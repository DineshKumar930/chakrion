import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`scroll-top ${show ? "scroll-top--show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}