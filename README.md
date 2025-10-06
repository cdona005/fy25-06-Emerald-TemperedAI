# Team Emerald- Fall 2025

## Members

 - Cshgill012 - Hannah Gill - hgill012@odu.edu
 - cdona005 - Cody Donahue - cdona005@odu.edu
 - ZemYG21 - Zemi Gebreyohannes - zgebr001@odu.edu
 - coola101 - Alex Gignac - agign001@odu.edu
 - klevvergirl - Dillon Sapp - dsapp001@odu.edu
 - BriaTheCreator - Brianna Thomas - bthom083@odu.edu
 - cbieh001 - Christian Biehn - cbieh001@odu.edu

 ## Runing the Program
 To run, use gradle and for args use <prompt> or <inputfile, prompt>. Example: ./gradlew run --args="teach me the derivative power rule", ./gradlew run --args="resources\testpdf.md, explain question 3"

 I have a simple guidelines as a variable (guidelines) that gets added to every prompt, it seems to be working well for now.

 If a docx or pdf is passed in args, the program will call markitdown to convert it to markdown before sending the prompt to the LLM. I only have it written for PDF and docx currently.

 I have a few test markdown files in resources that were coverted to .md files using markitdown, but to create any other .md files in a terminal run <python -m markitdown filetobeconverted -o filenameformarkdownfile> 
 Example: python -m markitdown C:\Users\EduSense\Desktop\testpdf.pdf -o test.md
