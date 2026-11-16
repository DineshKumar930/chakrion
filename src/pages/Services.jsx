import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import "./Services.css";

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <div className="services page">
      <section className="services__hero">
        <div className="container services__hero-inner">
          <span className="eyebrow">Our Services</span>
          <h1>End-to-end software services for modern businesses.</h1>
          <p className="text-muted">From concept to launch and beyond, our team builds digital products that perform beautifully.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services__grid">
            {services.map((s, i) => (
              <motion.div key={s.id} id={s.id}>
                <ServiceCard service={s} index={i} detailed />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Not sure which service you need?" subtitle="Tell us your challenge — we'll recommend the right solution, free of charge." />
    </div>
  );
}