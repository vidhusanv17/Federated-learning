"use client";

import { Bot, Send, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const starterMessages = [
  { role: "ai", text: "I am monitoring outbreak risk, hospital trust drift, and model confidence in real time." },
  { role: "user", text: "Explain the latest prediction." },
  { role: "ai", text: "Glucose and BMI are the strongest contributors. I recommend clinician review if risk exceeds 62%." }
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((items) => [...items, { role: "user", text: input }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((items) => [
        ...items,
        {
          role: "ai",
          text: "Recommendation: prioritize trusted hospitals above 90%, isolate anomalous gradients, and compare the SHAP profile before escalation."
        }
      ]);
    }, 900);
  };

  return (
    <>
      <Button
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full"
        size="icon"
        aria-label="Open AI assistant"
        onClick={() => setOpen(true)}
      >
        <Bot size={24} />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-md"
          >
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-cyan-400/15 text-cyan-300">
                    <Bot size={19} />
                  </span>
                  <div>
                    <p className="font-semibold">AI Healthcare Assistant</p>
                    <p className="text-xs text-muted-foreground">Secure clinical intelligence</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close assistant">
                  <X size={18} />
                </Button>
              </div>
              <div className="medical-scrollbar max-h-80 space-y-3 overflow-auto p-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.text}-${index}`}
                    className={`rounded-md p-3 text-sm ${
                      message.role === "ai" ? "bg-cyan-400/10" : "ml-8 bg-muted"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
                {typing && <div className="text-sm text-cyan-300">AI is typing...</div>}
              </div>
              <div className="flex gap-2 border-t p-4">
                <Input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask for disease, trust, or security insight" onKeyDown={(event) => event.key === "Enter" && send()} />
                <Button size="icon" onClick={send} aria-label="Send message">
                  <Send size={18} />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
