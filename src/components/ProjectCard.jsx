import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <div className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <a href={project.live} className="project-card__btn" aria-label={`Live demo of ${project.title}`}>
            <ExternalLink size={18} />
          </a>
          <Link to={`/portfolio/${project.slug}`} className="project-card__btn" aria-label={`View details of ${project.title}`}>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </motion.article>
  );
}