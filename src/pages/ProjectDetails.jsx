import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import { projects } from "../data/projects";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-details page">
        <div className="container project-details__empty">
          <h2>Project not found</h2>
          <Button to="/portfolio" variant="primary">Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details page">
      <section className="project-details__hero">
        <div className="container">
          <Link to="/portfolio" className="project-details__back"><ArrowLeft size={16} /> Back to Portfolio</Link>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="text-muted">{project.description}</p>
          <div className="project-details__actions">
            <Button href={project.live} variant="primary">Live Demo <ExternalLink size={16} /></Button>
            <Button to="/contact" variant="outline">Discuss a Project</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container project-details__body">
          <img src={project.image} alt={project.title} className="project-details__img" />
          <div className="project-details__side">
            <h3>Overview</h3>
            <p>{project.details}</p>
            <h3>Technologies</h3>
            <div className="project-details__tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h3>Highlights</h3>
            <ul>
              {["Fully responsive", "Performance optimized", "Scalable architecture", "Delivered on time"].map((h) => (
                <li key={h}><CheckCircle2 size={16} /> {h}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}