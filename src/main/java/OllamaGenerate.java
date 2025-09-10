
import java.net.http.*;
import java.net.URI;
import java.nio.charset.StandardCharsets;
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
        System.out.println("Usage: ./gradlew run --args=\"your prompt here\"");
        return;
    }

    String prompt = String.join(" ", args);

    String answer = sendPrompt(model, prompt);

    // Print response
    System.out.println("MODEL SAYS:\n" + answer);
}
 
}
