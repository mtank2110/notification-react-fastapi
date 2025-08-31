# 🚀 Instant Notification Demo

A **React + FastAPI** application that demonstrates **instant browser notifications**.  
Click the button on the frontend, and a notification pops up immediately!

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript, Vite  
- **Backend:** FastAPI, Python, Uvicorn  

---


## 🚀 how to run

```bash

# Clone the repo
git clone https://github.com/mtank2110/notification-react-fastapi.git
# or download it directly

# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# Linux / Mac
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn

# Run backend server
uvicorn main:app --reload --host 127.0.0.1 --port 8000

# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run frontend server
npm run dev
