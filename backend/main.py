from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Allow React frontend (adjust port if different)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "FastAPI backend is running!"}

# Very simple notification trigger (no subscription required)
@app.post("/notify")
def send_notification():
    # Just return data; frontend will use it to trigger notification
    return JSONResponse(content={
        "title": "Hello from FastAPI!",
        "body": "You clicked the button and I showed up instantly."
    })
