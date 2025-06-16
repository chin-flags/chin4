"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
  is_admin: boolean;
}

const ADMIN_NAME = "Chin"; // Your name here

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Load name from localStorage
    const savedName = localStorage.getItem("guestbook_name");
    if (savedName) {
      setName(savedName);
      // Check if the saved name is admin
      setIsAdmin(savedName === ADMIN_NAME);
    }
    fetchEntries();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [entries]);

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (name) {
      localStorage.setItem("guestbook_name", name);
      setIsAdmin(name === ADMIN_NAME);
    }
  }, [name]);

  async function fetchEntries() {
    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching entries:', error);
        return;
      }

      setEntries(data || []);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('guestbook')
        .insert([
          {
            name: name.trim(),
            message: message.trim(),
            is_admin: isAdmin
          }
        ]);

      if (error) {
        console.error('Error inserting entry:', error);
        return;
      }

      await fetchEntries();
      setMessage("");
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const shouldShowDate = (index: number, timestamp: string) => {
    if (index === 0) return true;
    const currentDate = new Date(timestamp).toLocaleDateString();
    const prevDate = new Date(entries[index - 1].created_at).toLocaleDateString();
    return currentDate !== prevDate;
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-[80vh] bg-card/80 backdrop-blur-md border border-border rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card/90">
        <h3 className="text-xl font-bold">The Guestbook</h3>
        <p className="text-sm text-muted-foreground">
          Drop a note, say hi, or leave a random thought!
        </p>
        {name && (
          <p className="text-sm text-primary mt-1">
            Chatting as: {name}
            {isAdmin && " (Admin)"}
            <button
              onClick={() => {
                localStorage.removeItem("guestbook_name");
                setName("");
                setIsAdmin(false);
              }}
              className="ml-2 text-xs text-muted-foreground hover:text-foreground"
            >
              (change)
            </button>
          </p>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {entries.map((entry, index) => (
          <div key={entry.id}>
            {shouldShowDate(index, entry.created_at) && (
              <div className="flex justify-center my-4">
                <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-full">
                  {formatDate(entry.created_at)}
                </span>
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col max-w-[80%] ${
                entry.is_admin ? "ml-auto" : "mr-auto"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl ${
                  entry.is_admin
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}
              >
                <div className="text-xs font-medium mb-1 flex items-center gap-1">
                  {entry.name}
                  {entry.is_admin && (
                    <span className="px-1 py-0.5 bg-primary-foreground/20 rounded text-[10px]">
                      Admin
                    </span>
                  )}
                </div>
                <p className="text-sm break-words">{entry.message}</p>
              </div>
              <span className={`text-xs text-muted-foreground mt-1 ${
                entry.is_admin ? "text-right" : "text-left"
              }`}>
                {formatTime(entry.created_at)}
              </span>
            </motion.div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-border bg-background/50">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {!name && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name first..."
              className="w-full px-4 py-2 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground text-foreground text-sm"
              maxLength={50}
              disabled={isSubmitting}
            />
          )}
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={name ? "Type a message..." : "Enter your name first"}
              className="flex-1 px-4 py-2 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground text-foreground text-sm"
              maxLength={200}
              disabled={isSubmitting || !name}
            />
            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              type="submit"
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting || !name || !message.trim()}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
