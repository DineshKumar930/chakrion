
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import "./NewsTicker.css";

const news = [
  "🚀 Welcome to Chakrion Technologies",
  "💻 Custom Website Development",
  "📱 Modern Mobile App Solutions",
  "🤖 AI Chatbot Development",
  "⚡ Smart ERP & Business Automation",
  "✨ Transform Your Ideas Into Digital Reality",
];

export default function NewsTicker() {
  return (
    <div className="news-ticker">
      <div className="news-ticker__label">
        <Sparkles size={16} />
        <span>WHAT'S NEW</span>
      </div>

      <div className="news-ticker__track">
        <motion.div
          className="news-ticker__content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...news, ...news].map((item, index) => (
            <div className="news-ticker__item" key={index}>
              <span>{item}</span>
              <ArrowUpRight size={15} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
