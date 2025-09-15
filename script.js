const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  addMessage("Thinking...", "bot");

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    chat.lastChild.remove(); // remove "Thinking..."
    addMessage(data.reply, "bot");
  } catch (err) {
    chat.lastChild.remove();
    addMessage("⚠️ Error connecting to backend.", "bot");
    console.error(err);
  }
}
