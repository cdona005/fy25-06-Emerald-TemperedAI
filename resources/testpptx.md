<!-- Slide number: 1 -->

# EduSense
Design Presentation
Team Emerald 07/31/25

### Notes:

<!-- Slide number: 2 -->

# Table of Contents
15. Functional Components
18. Functional Components Diagram
19. Risks
24. Work Breakdown Structure
25. Algorithms
27. Database Schema
28. Real World Product vs Prototype
29. Conclusion
30. References
31. Appendix
33. Glossary

3. Team Bio
4. Elevator Pitch
5. The Societal Problem
6. Problem Characteristics
7. Current Process Flow
8. Problem Solution
10. Solution Process Flow
11. What It Will Do
12. What It Won't Do
13. Competition Matrix
14. Development Tools

2
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 3 -->

![The Photo of a corkboard by PhotoAuthor is licensed under CCYYSA.](Picture31.jpg)

Dillon Sapp
Team
Emerald
Team
Emerald
Christian Biehn

Cody Donahue

![Dillon Sapp](Picture56.jpg)

![Christian Biehn](Picture16.jpg)

![Cody Donahue](Picture60.jpg)

Zemichael Gebreyohannes
Brianna Thomas
Hannah Gill
Alex Gignac

![Zemichael Gebreyohannes](Picture66.jpg)

![Brianna Thomas](Picture64.jpg)

![Hannah Gill](Picture54.jpg)

![Alex Gignac](Picture62.jpg)
3
Team Emerald – Design Presentation

<!-- Slide number: 4 -->

# Elevator Pitch
AI language models like ChatGPT and Grammarly have become everyday companions for students. They are reaching for these AI tools without understanding how best to utilize them, instead letting it do the thinking for them. This is leading to weaker critical thinking, creativity, and problem-solving skills.
That’s why we're building a web application that will encourage users to think first. With features like reflective prompts, challenge modes, and usage tracking, students and instructors alike will find value in our product. EduSense will empower students and teachers to harness the benefits of AI while still building the independent skills that matter most for lifelong learning.

4
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 5 -->

# The Societal Problem

Recent studies show that using LLMs for writing tasks can boost quality and save time but will impede a student's understanding in the long term.  As students become more reliant on these tools, they begin to abuse them. Much of the effort required to properly learn is off-loaded onto the LLM. While it may save time on assignments, students will fail to learn the subjects and soft skills that are crucial to living life well.

5
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 6 -->

# Problem Characteristics
According to Qirui Ju, a study conducted on a group of students found that those who fully relied on AI for their school assignments scored almost 20% lower during a writing assignment than those who don't. (Ju, 2025)

A systematic review found that excessive reliance on AI dialogue systems significantly impairs students’ abilities in critical thinking, decision-making, and analytical reasoning. (Zhai et al., 2024)

Many users rely on AI responses without checking them, often because of mental shortcuts and cognitive biases. (Vasconcelos et al., 2023)

6
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 7 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Positive Outcome
- Negative Outcome
# Current Process Flow

![](Graphic15.jpg)

7
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 8 -->

# Solution Statement
Our goal is to build EduSense, a web application that helps students and educators use AI tools more intentionally. With guidance, reflective prompts, and challenge modes, EduSense will encourage users to think first.
EduSense isn't just for students. Usage history will be accessible to educators. Allowing them to identify problem areas in student comprehension, granting access to real-time feedback on their lesson plans.
EduSense will integrate seamlessly with Canvas, providing students with immediate access to help with their assignments as they work on them. Educators will be able connect entire courses to EduSense, allowing our tool to refer to the resources they want.

8
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 9 -->

# Canvas Integration Overview

Canvas was selected for its widespread adoption, reducing complexity for instructors and students.

Direct integration with Canvas API enables automatic syncing of assignments, due dates, and instructional materials into EduSense.

AI generates guided prompts tailored specifically to the synced assignment content.

Instructors can directly control AI assistance levels for each synced assignment.

Student interactions are captured, allowing instructors to monitor common difficulties.

9
Team Emerald – Design Presentation

<!-- Slide number: 10 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Positive Outcome
- Negative Outcome

# Solution Process Flow

![](Graphic29.jpg)

This Process Flow assumes that a student does not plan on letting AI tools solve their problems.

10
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 11 -->

# What It Will Do
Helps the student develop critical thinking and problem-solving skills.

Provides the student with access to an LLM while completing their assignment.

Guides the student's questions with leading prompts to help them arrive at the answer.

Provides the instructor with the student's user history.

Provides the instructor with the ability to upload assignments to EduSense.

Integrates with learning platforms such as Canvas to better guide students.

11
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 12 -->

# What It Won't Do
Provide direct answers to assignment questions.

Replace the need for student effort and critical thinking.

Diminish guardrails put in place by an LLM's originator.

12
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 13 -->

# Competition Matrix
| Function | EduSense | Chegg | ChatGPT | Google's AI Overview |
| --- | --- | --- | --- | --- |
| Explains how the solution was achieved | ✓ | ✓ | ✓ | ✓ |
| Saves user history for review | ✓ | ✓ | ✓ |  |
| Integrates with learning platforms to better assist students and instructors | ✓ |  |  |  |
| Provides external links to more information | ✓ |  | ✓ | ✓ |
| Guides the user with leading prompts based on the desired answer | ✓ |  |  |  |
| Improve Student Problem-Solving and Critical Thinking | ✓ |  |  |  |

13
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 14 -->

# Development Tools

| Development Space | Tool |
| --- | --- |
| Frontend | HTML, CSS, JavaScript and React |
| Backend | Python (Django) |
| Database | PostgreSQL |
| Testing Framework | PyTest (Python), Jest (JavaScript) |
| Documentation Tool | Pydoc (Python), JSDoc (JavaScript) |
| LLM Integration | OpenAI GPT, Claude, Gemini, or LLaMa |
| Version Control / CI-CD | Git, Github, Github Actions, Github Workflows |

14
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 15 -->

# Functional Components

User Authentication

Assignment Management (upload and reference)

Large Language Model Integration (guidance from an LLM)

Admin Controls (toggle features)

15
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 16 -->

# Admin Controls Example (ChatGPT)

Instructors will be able to enable or disable EduSense for specific assignments.

Instructors will be able to assign a limit to the number of prompts per question as a challenge mode, encouraging students to take great care in how they structure their prompts and what they use them for.

Instructors can assign challenge modes (unrelated to grade) based on prompt content or frequency of use and potentially reward students based on the challenge mode. This may incentivize students to be more considerate of how they use EduSense.

16
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 17 -->

# Gamification
Students may feel inclined to bypass the guided prompts
This issue can be mitigated by employing gamification to keep them engaged.
EduSense will feature a 'challenge mode' with different difficulties that students can select from.
Harder difficulties will limit the amount of support they get from the LLM (e.g, less guidance).
Educators have the option to reward extra credit for assignments completed on harder difficulties.

17
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 18 -->

# Major Functional Components Diagram

![A black screen with a red circle AI-generated content may be incorrect.](Picture2.jpg)

18
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 19 -->

# Risks Overview
Bypassing Guardrails: Students may still find workarounds.

Privacy Concerns: Tracking usage must comply with FERPA/GDPR.

Technical Complexity: integrating restrictions and analytics.

User Addoption: Educators and students may resist new workflows.

19
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 20 -->

# Risks - Customer & End User
Risk: Students Bypass Guided Prompts
Probability: 4; Impact: 5
Mitigation: Employ gamification and reward users to keep them engaged.
Expected reduction: Probability: 3; Impact: 3

Risk: Students Find EduSense Cumbersome
Probability: 3; Impact: 4
Mitigation: EduSense will remember what concepts users have already mastered,       bypassing unnecessary prompts in future   sessions and incorporating periodic knowledge checks to ensure users don't forget what they've already learned.
Expected Reduction: Probability: 2; Impact: 3
|  | 5 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | 4 |  |  |  |  |  |
|  | 3 |  |  |  |  |  |
|  | 2 |  |  |  |  |  |
|  | 1 |  |  |  |  |  |
|  |  | 1 | 2 | 3 | 4 | 5 |
|  | Impact |  |  |  |  |  |

Probability

20
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 21 -->

Risk: Prompt Guidance Fails
Probability: 3; Impact: 5
Mitigation: Employ extensive testing with diverse special cases and include 'backstep/undo' options to revert to a previous state should a prompt fail to guide the student.
Expected reduction: Probability: 2; Impact: 2

Risk: LLM Quota Limits
Probability: 4; Impact: 5
Note: Prototype risk that only needs to be considered during development.
# Risks - Technical
|  | 5 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | 4 |  |  |  |  |  |
|  | 3 |  |  |  |  |  |
|  | 2 |  |  |  |  |  |
|  | 1 |  |  |  |  |  |
|  |  | 1 | 2 | 3 | 4 | 5 |
|  | Impact |  |  |  |  |  |

Probability

21
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 22 -->

Risk: User Inputs Confidential/Personal Information
Probability: 2; Impact: 5
Mitigation: Utilize the filters already present in the LLM to detect certain keywords and block certain prompts. Then relay the LLM warnings to the user. Also relay if any confirmation on the user side is required due to possible confidential data within in the prompt.
Expected reduction: Probability: 1; Impact: 2
Risk: Users Try to Access Harmful Content
Probability: 3; Impact: 4
Mitigation: Utilize the filters already present in the LLM to detect certain keywords and block certain prompts. Then relay the LLM warnings to the user.
Expected reduction: Probability: 2; Impact: 2
# Risks - Security
|  | 5 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | 4 |  |  |  |  |  |
|  | 3 |  |  |  |  |  |
|  | 2 |  |  |  |  |  |
|  | 1 |  |  |  |  |  |
|  |  | 1 | 2 | 3 | 4 | 5 |
|  | Impact |  |  |  |  |  |

Probability

22
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 23 -->

# Risks - Legal
Risk: Plagiarism
Probability: 2; Impact: 4
Mitigation: Provide disclaimers and guidance on ethical AI use as well as encourage citation of AI assistance. EduSense will provide MLA / APA citations of source material in this case.
Expected reduction: Probability: 2; Impact: 1

Risk: Copyright Infringement (e.g. user uploads textbook excerpts)
Probability: 2; Impact: 4
Mitigation: Add a user content policy that prohibits copyright violations. In addition, utilize the filters already present in the LLM to detect certain keywords and block certain prompts. Then relay the LLM warnings to the user.
Expected reduction: Probability: 2; Impact: 2
|  | 5 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | 4 |  |  |  |  |  |
|  | 3 |  |  |  |  |  |
|  | 2 |  |  |  |  |  |
|  | 1 |  |  |  |  |  |
|  |  | 1 | 2 | 3 | 4 | 5 |
|  | Impact |  |  |  |  |  |
Probability

23
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 24 -->

![A diagram of software development AI-generated content may be incorrect.](Picture16.jpg)
# Work Breakdown Structure

24
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 25 -->

# Authentication Algorithm

An authorization request is generated.
EduSense redirects based on the selected method of authentication
Redirect options may be EduSense Login, Canvas SSO, or OAuth 2.0
The identity provider authenticates the user and returns an auth code
The backend exchanges the code for access tokens or validates password
The backend creates or updates the user's records in the database with the appropriate tokens.
The login event is recorded to the database.
A session is issued to the client.

25
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 26 -->

# Authentication Algorithm - Continued
8.    Subsequent requests will trigger validation of the stored token.
Logout or session timeout will cause revocation of the token and session cleanup

9.    Error/Edge Cases
If a provider is unavailable, the system will issue an error and recommend using another provider.
If the stored token is invalid, reauthentication will be forced.
Account lockout will occur on rapid or excessive login attempts.

26
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 27 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Outcome
- External Data
- Database- External Process
# Authentication Process Flow

![](Graphic5.jpg)

27
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 28 -->

# Assignment Management Algorithm
An assignment is delivered for parsing.
The assignment is converted into plain text.
The assignment and solution are delivered to the LLM with the appropriate command prompt.
This command prompt will request the LLM break down the assignment into individual questions.
The LLM breaks the assignment down into its individual questions.
Multi-step questions will be treated as individual questions with related information copied to each.
The LLM matches each solution to its respective question.
The LLM returns the Question-Solution pairs produced in original order.
Question-Solution pairs are stored in the database by assignment ID and question number for easy reference.

28
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 29 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Outcome
- External Data
- Database- External Process

# Assignment Management Process Flow

![](Graphic31.jpg)

29
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 30 -->

# Conversation History Algorithm
The student creates a prompt; it is handed off to the platform's engineering algorithm. In parallel, the original prompt is stored in the database by assignment ID and question number.
When the platform's engineering algorithm produces an adjusted prompt, it is stored in the database with the original prompt by assignment ID and question number.
After the LLM response has been validated, the response is stored in the database with its respective original and adjusted prompts by assignment ID and question number.
EduSense stores a timestamp with the Prompt-Response group.

30
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 31 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Outcome
- External Data
- Database- External Process

# Conversation History Process Flow

![A computer screen shot of a diagram AI-generated content may be incorrect.](Picture28.jpg)

31
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 32 -->

# Prompt Engineering Algorithm

The module begins by normalizing and parsing the original prompt plain text.
The original prompt will be scanned for banned asks
Direct answer requests, plagiarism, or violations of LLM terms of use.
A semantic search will pull relevant excerpts from provided context.
The provided context will be in the form of question text, rubrics, and solutions.
A command prompt is sent to the LLM to produce an adjusted prompt that will return a guidance-only response based on the original prompt and provided context.
The newly adjusted prompt is then sent to the Content Validation Algorithm and then displayed to the user if validated.

32
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 33 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Outcome
- External Data
- Database- External Process

# Prompt Engineering Process Flow

![](Graphic18.jpg)

33
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 34 -->

# Content Validation Algorithm
The LLM delivers a response to the EduSense.
The response is converted to a prompt by the Prompt Engineering algorithm.
Tagged as a special case to override settings and other requirements.
The respective question solution is referenced from the database.
The adjusted prompt is sent back to the LLM with the appropriate command prompt and solution for comparison.
This command prompt will have the LLM compare the response to the provided solution both word-for-word and by context.
The expected response from this step will be binary.
5T.  Return the valid response to the calling module
5F.  Request the LLM to fix the prompt according to the criteria and return to Step 4

34
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 35 -->

Key
- Start Point
- Scenario
- Event
- Decision
- Outcome
- External Data
- Database- External Process

# Content Validation Process Flow

![](Graphic18.jpg)

35
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 36 -->

![](Picture19.jpg)
# Database Schema

![A diagram of a keyword AI-generated content may be incorrect.](Picture23.jpg)

36
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 37 -->

Login Page

![A screenshot of a login screen AI-generated content may be incorrect.](Picture13.jpg)

37
37
Team Emerald – Design Presentation

<!-- Slide number: 38 -->

Student View

![A screenshot of a computer AI-generated content may be incorrect.](Picture1.jpg)

38
38
Team Emerald – Design Presentation

<!-- Slide number: 39 -->

Educator View

![A screenshot of a computer AI-generated content may be incorrect.](Picture13.jpg)

39
39
Team Emerald – Design Presentation

<!-- Slide number: 40 -->

Course Setup

![A screen shot of a course setup AI-generated content may be incorrect.](Picture13.jpg)

40
40
Team Emerald – Design Presentation

<!-- Slide number: 41 -->

Analytics

![A screenshot of a computer AI-generated content may be incorrect.](Picture1.jpg)

41
41
Team Emerald – Design Presentation

<!-- Slide number: 42 -->

# Real World Product vs. Prototype
| Feature | Real World Product | Prototype |
| --- | --- | --- |
| Scalability | High | Low |
| Security | Robust (OAuth, encryption) | Basic |
| Analytics | Full (detailed exportable) | Limited |
| UX/UI | Polished, responsive | Basic Functional |
| Canvas Integration | Full API sync | Pull from Canvas & Limited assignment types |
| LLM Integration | Proprietary, customizable | Open source limited |
| Number of LLM's | Multiple supported | One LLM |

42
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 43 -->

# Conclusion
Large Language Models like ChatGPT and Gemini have become pervasive in education.

Students and Educators need a tool that help them better engage with an LLM.

EduSense will apply ethical AI use and the Socratic method of teaching to fulfill this need.

43
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 44 -->
# References
Farhan, Hind N. “The Impact of AI-Powered Writing Tools on Students’ Writing Performance: A Content Analysis and Future Prospects.” ResearchGate, 1 Mar. 2025, www.researchgate.net/publication/389458566_The_Impact_of_AI-Powered_Writing_Tools_on_Students.
Freeman, Josh. “Student Generative AI Survey 2025 - HEPI.” HEPI, 26 Feb. 2025, www.hepi.ac.uk/2025/02/26/student-generative-ai-survey-2025/.
Ju, Qirui. “Experimental Evidence on Negative Impact of Generative AI on Scientific Learning Outcomes.” Research Square (Research Square), 21 Sept. 2023, https://doi.org/10.21203/rs.3.rs-3371292/v1.
M. Helena Vasconcelos, et al. “Explanations Can Reduce Overreliance on AI Systems during Decision-Making.” ArXiv (Cornell University), 13 Dec. 2022, https://doi.org/10.48550/arxiv.2212.06823.
Rastogi, Charvi, et al. “Deciding Fast and Slow: The Role of Cognitive Biases in AI-Assisted Decision-Making.” Proceedings of the ACM on Human-Computer Interaction, vol. 6, no. CSCW1, 30 Mar. 2022, pp. 1–22, krvarshney.github.io/pubs/RastogiZWVDT_cscw2022.pdf, https://doi.org/10.1145/3512930.
Zhai, Chunpeng, et al. “The Effects of Over-Reliance on AI Dialogue Systems on Students’ Cognitive Abilities: A Systematic Review.” Smart Learning Environments, vol. 11, no. 28, 18 June 2024, pp. 1–37, slejournal.springeropen.com/articles/10.1186/s40561-024-00316-7, https://doi.org/10.1186/s40561-024-00316-7.
44
Team Emerald – Design Presentation

### Notes:

<!-- Slide number: 45 -->

# Appendix
45
Team Emerald – Design Presentation

<!-- Slide number: 46 -->

Glossary
Artificial Intelligence (AI): Ability for a computer of machine to perform tasks that typically require human intelligence. Ex. Problem solving, languages, or understanding languages.
Canvas LMS: A learning management system used by educators to manage course content, assignments, and communication with students.
Challenge Mode: Setting that encourages learners to try on their own before getting help. It limits access to answers to encourage thinking through the assignment first.
Guided prompts: Targeted questions or hints created to help students think critically and come up with their own solution.
Large Language Model (LLM): An advanced AI system trained on massive text datasets to understand and generate human-like language
MFCD (Modified Functionality Component Diagram): A diagram showing the major hardware and software components of the product and how they interact.
Usage Tracking: The process of recording how users interact with the system, such as which features they use or how they engage with AI prompts.

46
46
Team Emerald – Design Presentation