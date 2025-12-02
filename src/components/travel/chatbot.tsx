"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Hello! I'm SulKak, your travel assistant. How can I help you today?\n\nI can assist you with:\n• Kashmir tour packages\n• Umrah packages\n• Travel information\n• Booking inquiries"
        );
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("kashmir") || input.includes("package") || input.includes("tour")) {
      return "We offer curated Kashmir tour packages!\n\nOur packages include options like Paradise Kashmir (5N/6D), Heaven On Earth (6N/7D), and Beautiful Kashmir (7N/8D).\n\nAll include houseboats/hotels, meals, transport, and sightseeing. Pricing is on request — call +91-6006031751 or email travelbareofficial@gmail.com.";
    }

    if (input.includes("umrah") || input.includes("makkah") || input.includes("madinah") || input.includes("hajj")) {
      return "We offer comprehensive Umrah packages with 3★ to 5★ stays, transport, Ziyarat tours, and guidance.\n\nOptions include Economy (7N/8D), Standard (10N/11D), Premium (14N/15D), and Luxury (21N/22D). Pricing is on request — call +91-6006031751 or email travelbareofficial@gmail.com.";
    }

    if (input.includes("book") || input.includes("reservation") || input.includes("reserve")) {
      return "I'd be happy to help you with booking!\n\nYou can:\n1. Click the 'Book Now' button on our website\n2. Call us at: +91-6006031751\n3. Email: travelbareofficial@gmail.com\n\nOur team will assist you with the booking process and answer all your questions!";
    }

    if (input.includes("price") || input.includes("cost") || input.includes("rate") || input.includes("fee")) {
      return "Pricing is customized based on dates and inclusions. Please call +91-6006031751 or email travelbareofficial@gmail.com for a quote, and we'll tailor the best option for you.";
    }

    if (input.includes("contact") || input.includes("phone") || input.includes("email") || input.includes("address")) {
      return "Contact Information:\n\n• Phone: +91-6006031751\n• Email: travelbareofficial@gmail.com\n• Location: Srinagar & Ganderbal, Kashmir\n\nWe're here to assist you with travel plans!";
    }

    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("good morning") || input.includes("good afternoon")) {
      return "Hello! How can I assist you with your travel plans today? Are you interested in Kashmir tours or Umrah packages?";
    }

    if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! Feel free to ask if you need any more information. Have a great day!";
    }

    return "I'd be happy to help you!\n\nI can provide information about:\n• Kashmir tour packages\n• Umrah packages\n• Pricing and booking\n• Travel arrangements\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = inputValue;
    addUserMessage(userMessage);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.response) {
        addBotMessage(data.response);
      } else {
        const fallbackResponse = getBotResponse(userMessage);
        addBotMessage(fallbackResponse);
      }
    } catch (error) {
      console.error("Chat error:", error);
      const fallbackResponse = getBotResponse(userMessage);
      addBotMessage(fallbackResponse);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-3xl">💬</span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between rounded-t-2xl bg-amber-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold">SulKak</h3>
                  <p className="text-xs opacity-90">Travel Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 whitespace-pre-line ${
                      message.sender === "user"
                        ? "bg-amber-600 text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="h-2 w-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="h-2 w-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ""}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
