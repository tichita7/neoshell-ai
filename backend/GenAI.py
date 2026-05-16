from groq import Groq
from dotenv import dotenv_values
import platform


class GenerativeAI:

    CONST_COMMAND = (
    "You are a terminal command generator. "
    "Return ONLY a valid shell command. "
    "Do not explain anything. "
    "Never return markdown. "
    "Generate SAFE and NON-DESTRUCTIVE commands only. "
    "Do not modify or delete files. "
    "Generate commands specifically for Windows PowerShell. "
    "If the request is unclear, return 'invalid input is given'. "
    "The operating system is "
)

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
            + self.CONST_OS
            + " "
            + user_input
        )

        response = self.client.chat.completions.create(
            model="llama-3.1-8b-instant",

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