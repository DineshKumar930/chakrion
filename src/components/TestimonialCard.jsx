import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
    >
      <div className="testimonial-card__stars">
        {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <div className="testimonial-card__author">
        <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </motion.div>
  );
}