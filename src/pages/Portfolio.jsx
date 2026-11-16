import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import { projects, categories } from "../data/projects";
import "./Portfolio.css";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="portfolio page">
      <section className="portfolio__hero">
        <div className="container portfolio__hero-inner">
          <span className="eyebrow">Our Portfolio</span>
          <h1>Work we&apos;re proud to put our name on.</h1>
          <p className="text-muted">Explore a selection of digital products we&apos;ve designed and built for ambitious clients.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio__filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`portfolio__filter ${active === c ? "portfolio__filter--active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div className="portfolio__grid" layout>
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection title="Have a similar project in mind?" subtitle="Let's build your next big thing together." />
    </div>
  );
}