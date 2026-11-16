import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div className={`faq__item ${open === i ? "faq__item--open" : ""}`} key={i}>
          <button className="faq__question" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{item.q}</span>
            {open === i ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                className="faq__answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}