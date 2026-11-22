
import { useRef, useState, useEffect } from "react";
import { MessagesSquare, X } from "lucide-react";
import "./ChatBot.css";

const questions = [
  {
    question: "आप कौन-कौन सी Services देते हैं?",
    answer:
      "हम Website Development, App Development, ERP Software, E-Commerce Website और Custom Chatbot जैसी Services देते हैं।",
  },
  {
    question: "Website बनवाने का कितना खर्च है?",
    answer:
      "Website की कीमत आपकी Requirements और Features पर निर्भर करती है। सही कीमत जानने के लिए हमसे संपर्क करें।",
  },
  {
    question: "क्या आप ERP Software बनाते हैं?",
    answer:
      "जी हाँ! हम School ERP, College ERP, Attendance Management, Inventory Management और Custom ERP Solutions बनाते हैं।",
  },
  {
    question: "आपसे Contact कैसे करें?",
    answer:
      "आप हमसे WhatsApp या Email के माध्यम से संपर्क कर सकते हैं। WhatsApp: +917715970852",
  },
];

export default function ChatBot() {
    
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "नमस्कार! 👋 हमारी Website पर आपका स्वागत है। मैं आपकी क्या सहायता कर सकता हूँ?",
    },
  ]);

const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}, [messages]);

  const [input, setInput] = useState("");

  // Chatbot drag position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);

  const handlePointerDown = (e) => {
    // Close button पर drag शुरू नहीं होगा
    if (e.target.closest("button")) return;

    const container = e.currentTarget.closest(".chatbot-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();

    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startLeft: rect.left,
      startTop: rect.top,
      startPosition: { ...position },
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== e.pointerId) return;

    const deltaX = e.clientX - drag.startX;
    const deltaY = e.clientY - drag.startY;

    const container = e.currentTarget.closest(".chatbot-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const newLeft = Math.max(
      0,
      Math.min(window.innerWidth - width, drag.startLeft + deltaX)
    );

    const newTop = Math.max(
      0,
      Math.min(window.innerHeight - height, drag.startTop + deltaY)
    );

    setPosition({
      x: drag.startPosition.x + (newLeft - drag.startLeft),
      y: drag.startPosition.y + (newTop - drag.startTop),
    });
  };

  const handlePointerUp = (e) => {
    if (dragRef.current?.pointerId === e.pointerId) {
      dragRef.current = null;
    }
  };

  const sendMessage = (question) => {
    if (!question.trim()) return;

    const matched = questions.find(
      (item) =>
        item.question.toLowerCase() === question.trim().toLowerCase()
    );

    const answer = matched
      ? matched.answer
      : "माफ कीजिए! इस सवाल का जवाब अभी उपलब्ध नहीं है। कृपया हमारे Contact Section से संपर्क करें।";

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question },
      { sender: "bot", text: answer },
    ]);

    setInput("");
  };

  return (
    <div
      className="chatbot-container"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {isOpen && (
        <div className="chatbot-window">
          {/* Draggable Header */}
          <div
            className="chatbot-header"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <MessagesSquare size={23} />
              </div>

              <div>
                <h3>AI Assistant</h3>
                <span>
                  <span className="online-dot"></span>
                  Online
                </span>
              </div>
            </div>

            <button
              className="chatbot-close"
              onClick={() => {
                setIsOpen(false);
                dragRef.current = null;
              }}
              aria-label="Close Chat"
            >
              <X size={21} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            <div className="chatbot-welcome">
              {messages[0].text}
            </div>

            {messages.slice(1).map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={messagesEndRef} />

            {messages.length === 1 && (
              <div className="chatbot-questions">
                <p>QUICK QUESTIONS</p>

                {questions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(item.question)}
                  >
                    {item.question}
                    <span>›</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            className="chatbot-input"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" aria-label="Send Message">
              ➤
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat"
        >
          <MessagesSquare size={32} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
