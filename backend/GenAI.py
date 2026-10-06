from groq import Groq
from dotenv import dotenv_values
import platform


class GenerativeAI:

    CONST_COMMAND = """
    You are NeoShell, a precise Linux terminal command generator.

    RULES:
    1. Return ONLY a valid Linux shell command.
    2. Never return explanations, markdown, or code fences.
    3. Generate commands for Linux using Bash-compatible syntax.
    4. Understand the user's intent and generate the simplest correct command.
    5. Generate only safe, non-destructive commands.
    6. Never generate commands that delete or modify files, change system
    settings, install packages, or execute downloaded scripts.
    7. Do not invent filenames, paths, or environment details.
    8. For listing files and folders in the current directory, use:
    ls
    9. For listing hidden files too, use:
    ls -la
    10. If the request is ambiguous, unsafe, or cannot be translated into
        a valid command, return exactly:
        invalid input is given
    """

    CONST_OS = platform.system()

    def __init__(self):

        env_vars = dotenv_values(".env")

        self.GROQ_API_KEY = env_vars.get("GROQ_API_KEY")

        self.client = Groq(
            api_key=self.GROQ_API_KEY
        )

    def generate_response(self, user_input):

        prompt = (
            self.CONST_COMMAND
            + "\nOperating System: Linux"
            + "\nUser Request: "
            + user_input
        )

        response = self.client.chat.completions.create(
            model="openai/gpt-oss-20b",

            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],

            temperature=0
        )

        output = response.choices[0].message.content

        if (
            not output
            or output.lower().startswith("invalid")
        ):
            raise ValueError("Invalid input is given.")

        return output