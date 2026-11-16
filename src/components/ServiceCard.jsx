import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service, index = 0, detailed = false }) {
  const Icon = service.icon;
  return (
    <motion.article
      className={`service-card ${detailed ? "service-card--detailed" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      id={service.id}
    >
      <div className="service-card__icon"><Icon size={26} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {detailed && (
        <ul className="service-card__features">
          {service.features.map((f) => (
            <li key={f}><Check size={16} /> {f}</li>
          ))}
        </ul>
      )}
      <Link to="/contact" className="service-card__link">
        Get Started <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  );
}