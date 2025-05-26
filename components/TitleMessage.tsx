"use client";
import { useEffect, useState } from "react";

interface TitleMessageProps {
  messages: string[];
  interval?: number;
}

export default function TitleMessage({ messages, interval = 1000 }: TitleMessageProps) {
  const [title, setTitle] = useState(messages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitle((prev) => {
        const nextIndex = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIndex];
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [messages, interval]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
} 