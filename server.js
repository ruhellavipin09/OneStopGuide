import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(".")); // serve index.html and script.js

// ⚠️ Put your OpenRouter API key here (safe in backend)
const API_KEY = "YOUR_OPENROUTER_API_KEY";

// Free model option
const MODEL = "mistralai/mistral-7b-instruct:free";

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "⚠️ No reply from AI.";

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "⚠️ Error contacting AI." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
