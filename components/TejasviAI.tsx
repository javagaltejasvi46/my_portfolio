"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = { role: "user" | "model", content: string };

export function TejasviAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hello. I'm Tejasvi's AI proxy. What would you like to know about his work?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: currentMessages })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to connect to AI");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      
      setMessages(prev => [...prev, { role: "model", content: "" }]);

      while (reader) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const text = decoder.decode(value, { stream: true });
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content += text;
          return newMessages;
        });
      }
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", content: `Error: ${error.message || 'Service unavailable'}.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        className="ai-trigger"
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <Bot size={20} />
        <span>TEJASVI_AI</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="ai-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="ai-header">
              <div className="ai-title">
                <Bot size={18} className="ai-icon" />
                <div>
                  <h3>TEJASVI_AI</h3>
                  <span><i className="live"></i> ONLINE</span>
                </div>
              </div>
              <button className="ai-close" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="ai-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`ai-message ${msg.role}`}>
                  <div className="ai-avatar">
                    {msg.role === 'model' ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className="ai-bubble">
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="ai-message model">
                  <div className="ai-avatar"><Bot size={14} /></div>
                  <div className="ai-bubble typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="ai-input" onSubmit={handleSubmit}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills..."
                disabled={isLoading}
              />
              <button type="submit" disabled={!input.trim() || isLoading}>
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
