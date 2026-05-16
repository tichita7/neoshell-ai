# NeoShell AI

NeoShell AI is a full-stack AI-powered command generation platform that converts natural language prompts into terminal commands using modern LLM integration.

Built with:
- React
- Tailwind CSS
- FastAPI
- Groq API
- Meta Llama 3.1

---

## Features

- AI-powered terminal command generation
- Full-stack architecture
- Modern cyberpunk-inspired UI
- Responsive design
- FastAPI REST API integration
- Groq + Llama 3.1 powered backend
- Smooth scrolling interactions
- Real-time frontend-backend communication

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- JavaScript

### Backend
- Python
- FastAPI
- Groq API
- Uvicorn

### AI
- Meta Llama 3.1
- Groq Inference Engine

---

## Project Structure

```bash
NeoShell_AI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── GenAI.py
│   ├── server.py
│   ├── utils.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

## Frontend Setup

Move into frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## Backend Setup

Move into backend directory:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv .venv
```

Activate environment (Windows):

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file:

```env
GROQ_API_KEY=your_api_key
```

Run backend server:

```bash
uvicorn server:app --port 8001
```

Backend runs on:

```txt
http://127.0.0.1:8001
```

---

## Example Prompt

### Input

```txt
Show current logged in user
```

### Generated Output

```powershell
whoami
```

---

## Author

Tichita Dhiman

---

## License

This project is licensed under the MIT License.