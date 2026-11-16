import { useState, useEffect } from "react";
import "./AnimatedText.css";

const phrases = [
  "Web Development",
  "Mobile Applications",
  "ERP Solutions",
  "AI Chatbots",
  "Business Automation",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="animated-text">
      <span className="animated-text__word">{text}</span>
      <span className="animated-text__caret" />
    </span>
  );
}