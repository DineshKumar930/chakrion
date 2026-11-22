import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import "./CTASection.css";

export default function CTASection({
  title = "Ready to build something exceptional?",
  subtitle = "Let's turn your vision into a high-performing digital product. Talk to our team today.",
}) {
  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta__card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta__glow cta__glow--1" />
          <div className="cta__glow cta__glow--2" />
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="cta__actions">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Quote <ArrowRight size={18} />
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">See Our Work</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}