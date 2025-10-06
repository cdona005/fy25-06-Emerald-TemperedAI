
import java.net.http.*;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class OllamaGenerate {
    private static final String OLLAMA_URL = "http://localhost:11434/api/generate";
    private static final ObjectMapper MAPPER = new ObjectMapper();

    public static String sendPrompt(String model, String prompt) throws Exception {
        ObjectNode body = MAPPER.createObjectNode();
        body.put("model", model);
        body.put("prompt", prompt);
        body.put("stream", false);

        HttpClient client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(5))
                .build();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(OLLAMA_URL))
                .timeout(Duration.ofSeconds(120))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body.toString(), StandardCharsets.UTF_8))
                .build();

        HttpResponse<String> resp = client.send(request, HttpResponse.BodyHandlers.ofString());

        if (resp.statusCode() != 200) {
            throw new RuntimeException("Ollama error: HTTP " + resp.statusCode() + " -> " + resp.body());
        }

        ObjectNode json = (ObjectNode) MAPPER.readTree(resp.body());
        return json.path("response").asText();
    }

   public static void main(String[] args) throws Exception {
    String model = "llama3.1:8b-instruct-q5_K_M";

    if (args.length == 0) {
        System.out.println("Usage:");
        System.out.println("  ./gradlew run --args=\"your prompt here\"");
        System.out.println("  ./gradlew run --args=\"path/to/file.md, your question here\"");
        return;
    }

    String raw = String.join(" ", args);

    String prompt;
     String guidelines = "\n\nGuidlines: Give no answers, use guided prompts to help explain";

    if (raw.contains(",")) {
        // Split into file path and user question
        String[] parts = raw.split(",", 2);
        Path filePath = Paths.get(parts[0].trim());
        if(filePath.toString().endsWith(".pdf") || filePath.toString().endsWith(".docx") || filePath.toString().endsWith(".pptx")){
            String newFilePath = convertWithMarkitdown(filePath.toString());
            filePath = Paths.get(newFilePath);
        }
        else if(!filePath.toString().endsWith(".md")){
        }
        String userPrompt = parts.length > 1 ? parts[1].trim() : "";

        if (!Files.exists(filePath)) {
            throw new RuntimeException("File not found: " + filePath);
        }

        String fileContent = Files.readString(filePath);
       
        // Combine file text + user question
        prompt = fileContent + "\n\nUser question: " + userPrompt + guidelines;
        //System.out.println(prompt);
    } else {
        // No comma, just treat as plain prompt
        prompt = raw + guidelines;
        //System.out.println(prompt);

    }

    String answer = sendPrompt(model, prompt);
    
    System.out.println("MODEL SAYS:\n" + answer);
}

public static String convertWithMarkitdown (String filePath) throws Exception {
   String newFilePath = "";
    if(filePath.contains(".pdf")){
        newFilePath = filePath.replace(".pdf", ".md");
}
    else if(filePath.contains(".docx")){
        newFilePath = filePath.replace(".docx", ".md");

}
    else if(filePath.contains(".pptx")){
        newFilePath = filePath.replace(".pptx", ".md");
    }
    else{
        
    }
    
    ProcessBuilder pb = new ProcessBuilder("python", "-m", "markitdown", filePath, "-o", newFilePath);
    pb.redirectErrorStream(true);
    Process process = pb.start();
    int exitCode = process.waitFor();
    if (exitCode != 0) {
        throw new RuntimeException("Markitdown conversion failed with exit code " + exitCode);
    }
    return newFilePath;
}
 
}
