import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      const botMessage = {
        text: data.answer || "No response from AI",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error connecting to server ❌", sender: "bot" },
      ]);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* CHATBOX */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          
          {/* HEADER */}
          <div className="bg-green-700 text-white p-3 text-sm font-semibold">
            C-Tons Assistant
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-green-200 ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
              placeholder="Ask about carbon credits, ESG, etc..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-green-700 text-white px-3 rounded-lg text-sm"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot;