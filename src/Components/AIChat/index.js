import { useState, useRef, useEffect } from "react";
import { Fab } from "@mui/material";
import { SmartToy, Send } from '@mui/icons-material';
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "./style.css";


function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef(null);

  const API_URL = process.env.REACT_APP_API_URL;

  const suggestedQuestions = [
    {
      icon: "💼",
      text: "Tell me about Sajid's experience.",
    },
    {
      icon: "🚀",
      text: "What projects has Sajid built?",
    },
    {
      icon: "⚛️",
      text: "What technologies does Sajid use?",
    },
    {
      icon: "🛒",
      text: "Can Sajid build eCommerce applications?",
    },
  ];

  const typeAssistantMessage = (answer) => {
    let index = 0;

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "",
      },
    ]);

    const interval = setInterval(() => {
      index++;

      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: answer.slice(0, index),
        };

        return updated;
      });

      if (index >= answer.length) {
        clearInterval(interval);
      }
    }, 15);
  };

  const sendMessage = async (customQuestion = null) => {
    setShowSuggestions(false);
    const question = customQuestion || input.trim();

    if (!question || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    if (!customQuestion) {
      setInput("");
    }
    setLoading(true);

    try {
      const conversationHistory = [
        ...messages,
        { role: "user", content: question, }
      ];

      const response = await axios.post(`${API_URL}/knowledge/ask`, {
        query: question,
        conversationHistory
      });

      const answer = response.data.data.answer;

      typeAssistantMessage(answer);
    } catch (error) {
      console.error("AI chat error:", error);

      let errorMessage = "Sorry, I'm unable to answer right now. Please try again later.";

      if (error.response?.status === 429) {
        errorMessage = "AI is temporarily unavailable. Please try again shortly.";
      };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage
        },
      ]);
    } finally {
      setLoading(false);
    };
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <>
      {isOpen && (
        <div className="ai-chat">
          <div className="ai-chat-header">
            <div>
              <h3>Sajid AI</h3>
              <span>Ask me about Sajid</span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="ai-close-btn"
            >
              ×
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-message ${message.role}`}
              >
                {message.role === "assistant" ? (
                  <ReactMarkdown>
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            ))}

            {showSuggestions && (
              <div className="suggested-questions">
                {suggestedQuestions.map((item) => (
                  <button
                    key={item.text}
                    className="question-chip"
                    onClick={() => sendMessage(item.text)}
                  >
                    <span>{item.icon}</span>
                    {item.text}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="ai-message assistant typing-indicator">
                <span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-chat-input">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Sajid..."
              rows={1}
              disabled={loading}
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              <Send />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
          onClick={() => setIsOpen(true)}
        >
          <SmartToy />
        </Fab>
      )}
    </>
  );
};

export default AIChat;