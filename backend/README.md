# NeoShell AI Backend

FastAPI backend powering NeoShell AI with Groq LLM integration for intelligent command generation.

This backend handles:
- AI prompt processing
- command generation
- API routing
- frontend communication
- Groq API integration

---

## Features

- AI-powered shell command generation
- FastAPI REST API
- Groq LLM integration
- Prompt engineering for safe command generation
- CORS-enabled frontend communication
- Lightweight and fast backend architecture

---

## Tech Stack

### Backend
- Python
- FastAPI
- Groq API
- Uvicorn

### AI Integration
- Groq API
- Meta Llama 3.1 8B Instant

---

## Project Structure

```bash
neoShell_backend/
│
├── .env
├── .gitignore
├── LICENSE
├── README.md
├── requirements.txt
│
├── GenAI.py
├── server.py
└── utils.py
```

---

## API Endpoint

### Generate Command

```http
POST /generate
```

### Request Body

```json
{
  "input": "Show current logged in user"
}
```

### Example Response

```json
{
  "message": "success",
  "data": "whoami"
}
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/tichita7/neoshell-ai-backend.git
```

Move into the project directory:

```bash
cd neoshell-ai-backend
```

Create virtual environment:

```bash
python -m venv .venv
```

Activate virtual environment:

### Windows

```bash
.venv\\Scripts\\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create `.env` file inside backend root:

```env
GROQ_API_KEY=your_api_key
```

---

## Run Server

```bash
uvicorn server:app --port 8001
```

Backend runs on:

```txt
http://127.0.0.1:8001
```

---

## Frontend Integration

Connected with NeoShell AI frontend built using:
- React
- Tailwind CSS
- Vite

Frontend communicates using REST API requests.

---

## Example Prompt

### Input

```txt
Show network configuration
```

### Generated Output

```powershell
ipconfig
```

---

## Safety Features

- Non-destructive command prompting
- Restricted AI behavior using prompt engineering
- Invalid request handling
- Controlled output generation

---

## Author

Tichita Dhiman

---

## License

This project is licensed under the MIT License.