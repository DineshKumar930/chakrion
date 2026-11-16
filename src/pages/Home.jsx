import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Rocket, Settings } from "lucide-react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import "./Home.css";

const stats = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 1, suffix: "+", label: "Countries Served" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const process = [
  { icon: Code2, title: "Discover", text: "We understand your goals, users, and constraints to shape the right solution." },
  { icon: Palette, title: "Design", text: "Beautiful, human-centered UI/UX prototypes that align with your brand." },
  { icon: Settings, title: "Develop", text: "Clean, scalable code with rigorous QA and performance optimization." },
  { icon: Rocket, title: "Deploy & Grow", text: "Launch confidently, then iterate with data-driven improvements." },
];

const faqs = [
  { q: "What industries do you work with?", a: "We work with startups, SMEs, and enterprises across SaaS, healthcare, e-commerce, fintech, logistics, and more." },
  { q: "How long does a typical project take?", a: "Marketing sites take 2–4 weeks; complex web apps and ERPs range from 8–20 weeks depending on scope." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer maintenance plans, monitoring, security updates, and feature iterations after launch." },
  { q: "How do you handle pricing?", a: "We offer fixed-price and dedicated-team models. After a discovery call, we provide a transparent quote." },
];

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="home page">
      <Hero />

      {/* Trust / expertise */}
      <section className="section">
        <div className="container">
          <p className="home__trustline">Trusted by fast-growing teams worldwide</p>
          <div className="home__logos">
            {["Nova", "MediSync", "AgroCorp", "ShopEase", "HelpDesk AI", "Aurora"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What We Do</span>
            <h2>Software solutions engineered for impact</h2>
            <p className="text-muted">From websites to complex ERP systems and AI, we build what your business needs to scale.</p>
          </div>
          <div className="grid-3">
            {services.slice(0, 6).map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
          <div className="home__center">
            <a href="/services" className="home__link">View all services <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container home__why">
          <motion.div
            className="home__why-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why Chakrion</span>
            <h2>A partner obsessed with your growth</h2>
            <p className="text-muted">
              We don&apos;t just write code — we solve business problems. Every decision is
              guided by performance, scalability, and user delight.
            </p>
            <ul className="home__checks">
              {["Dedicated senior developers", "Transparent communication", "On-time, on-budget delivery", "Post-launch support & scaling"].map((t) => (
                <li key={t}><span>✓</span> {t}</li>
              ))}
            </ul>
            <a href="/about" className="home__link">Learn more about us <ArrowRight size={16} /></a>
          </motion.div>
          <motion.div
            className="home__why-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="home__why-card">
              <Rocket size={36} />
              <h3>Ship Faster</h3>
              <p>Agile sprints and battle-tested tooling get you to market quicker.</p>
            </div>
            <div className="home__why-card home__why-card--alt">
              <Code2 size={36} />
              <h3>Clean Code</h3>
              <p>Maintainable, well-tested code that your future team will thank you for.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="home__stats">
        <div className="container home__stats-grid">
          {stats.map((s) => (
            <div className="home__stat" key={s.label}>
              <strong><Counter target={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Featured Work</span>
            <h2>Projects that deliver real results</h2>
          </div>
          <div className="grid-3">
            {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
          <div className="home__center">
            <a href="/portfolio" className="home__link">Explore full portfolio <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>A proven path from idea to launch</h2>
          </div>
          <div className="home__process">
            {process.map((step, i) => (
              <div className="home__process-step" key={step.title}>
                <div className="home__process-icon"><step.icon size={26} /></div>
                <span className="home__process-num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Testimonials</span>
            <h2>Loved by clients</h2>
          </div>
          <div className="grid-2">
            {testimonials.map((t, i) => <TestimonialCard key={t.name} testimonial={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}