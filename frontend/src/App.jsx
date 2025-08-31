import { useState } from 'react';
import './App.css'; // Make sure to import the CSS below

function App() {
  const [message, setMessage] = useState("");

  async function handleClick() {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      alert("Please allow notifications in your browser.");
      return;
    }

    const res = await fetch("http://127.0.0.1:8000/notify", { method: "POST" });
    const data = await res.json();

    new Notification(data.title, { body: data.body });
    setMessage("Notification triggered!");
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>Instant Notification Demo</h1>
        <p>Click the button below and watch a browser notification appear instantly.</p>
        <button onClick={handleClick}>Click me to get a notification</button>
        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
}

export default App;
