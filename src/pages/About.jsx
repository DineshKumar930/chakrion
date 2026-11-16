
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Award,
  Code2,
  Rocket,
  Lightbulb,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import CTASection from "../components/CTASection";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const values = [
  {
    icon: Heart,
    title: "Client First",
    text: "Your outcomes define our success. We treat every project like our own.",
  },
  {
    icon: Zap,
    title: "Innovation",
    text: "We embrace modern technology and creative problem-solving.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Transparent communication and true partnership at every step.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "High-quality code, thoughtful design, and measurable results.",
  },
];

const team = [
  {
    name: "Er. Dinesh Kumar",
    role: "Co-Founder & CTO",
    qualification: "B.Tech | MBA (IT & Operations)",
    description:
      "Technology Strategy, Full Stack Development, ERP & Software Architecture",
    img: "images/dk.jpeg",
    number: "01",
  },
  {
    name: "Er. Kuwarsingh P. Yadav",
    role: "Co-Founder & CEO",
    qualification: "B.Tech | MBA (IT & HR)",
    description:
      "Business Strategy, Management, Client Relations & Operations",
    img: "images/kuvar.jpeg",
    number: "02",
  },
  {
    name: "Er. Vinay Kumar",
    role: "Co-Founder & Lead Software Engineer",
    qualification: "B.Tech (CSE)",
    description:
      "Software Development, Application Development & Technical Implementation",
    img: "images/gkuvar.jpeg",
    number: "03",
  },
  {
    name: "Er. Prince Kumar",
    role: "Co-Founder & Software Engineer",
    qualification: "B.Tech | MBA (IT & Operations)",
    description:
      "Web Applications, ERP Solutions & Software Development",
    img: "images/pk.jpg",
    number: "04",
  },
  {
    name: "Er. Ranjeet Kumar",
    role: "Co-Founder & Head of HR",
    qualification: "B.Tech | MBA (HR & Operations)",
    description:
      "Human Resource Management, Team Coordination & Operations",
    img: "images/ranjeet.jpeg",
    number: "05",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "Python",
  "React Native",
  "Flutter",
  "Oracle",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "OpenAI",
  "Tailwind CSS",
  "Git & GitHub",
  "JavaScript",
  "MySQL",
  "Microservices",
  "PHP",
];

export default function About() {
  return (
    <div className="about page">

      {/* HERO SECTION */}
      <section className="about__hero">
        <div className="about__hero-glow about__hero-glow--one" />
        <div className="about__hero-glow about__hero-glow--two" />

        <motion.div
          className="container about__hero-inner"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            ABOUT CHAKRION TECHNOLOGIES
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Building Digital Experiences.
            <span> Engineering the Future.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-muted">
            We are a technology-driven software development company
            transforming ambitious ideas into powerful digital solutions.
            From websites and mobile applications to enterprise ERP systems,
            we help businesses innovate, grow, and succeed.
          </motion.p>

          <motion.div variants={fadeUp} className="about__hero-tags">
            <span><Code2 size={16} /> Technology</span>
            <span><Lightbulb size={16} /> Innovation</span>
            <span><Rocket size={16} /> Growth</span>
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="section">
        <div className="container">
          <motion.div
            className="about__mission-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="about__card">
              <div className="about__icon">
                <Target size={28} />
              </div>
              <span className="about__card-label">OUR PURPOSE</span>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with reliable, scalable, and elegant
                technology that solves real-world problems and unlocks
                new opportunities for growth.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="about__card">
              <div className="about__icon">
                <Eye size={28} />
              </div>
              <span className="about__card-label">OUR FUTURE</span>
              <h3>Our Vision</h3>
              <p>
                To become a globally trusted technology partner known for
                innovation, quality, customer satisfaction, and lasting
                business relationships.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section--tint">
        <div className="container">
          <motion.div
            className="section-title about__section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">WHAT DRIVES US</span>
            <h2>The Principles Behind Everything We Build</h2>
            <p>
              Our values shape our culture, guide our decisions,
              and define how we work with our clients.
            </p>
          </motion.div>

          <motion.div
            className="about__values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="about__value"
              >
                <div className="about__value-icon">
                  <v.icon size={25} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
                <ArrowUpRight className="about__value-arrow" size={19} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="section">
        <div className="container about__tech">
          <motion.div
            className="about__tech-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">OUR TECH STACK</span>
            <h2>Technology That Turns Ideas Into Reality.</h2>
            <p className="text-muted">
              We combine modern technologies, proven frameworks, and
              innovative tools to build secure, scalable, and
              high-performance digital solutions.
            </p>

            <div className="about__tech-points">
              <span><CheckCircle2 size={17} /> Modern Development</span>
              <span><CheckCircle2 size={17} /> Scalable Architecture</span>
              <span><CheckCircle2 size={17} /> Reliable Solutions</span>
            </div>
          </motion.div>

          <motion.div
            className="about__tech-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                whileHover={{ scale: 1.07, y: -3 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section section--tint about__team-section">
        <div className="container">

          <motion.div
            className="section-title about__section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">THE PEOPLE BEHIND OUR WORK</span>
            <h2>Meet the Minds Behind Chakrion</h2>
            <h4>Five Minds. One Vision. Limitless Possibilities.</h4>
            <p>
              At Chakrion Technologies, we believe in collaboration,
              innovation, and shared expertise. Our team brings together
              technology, business management, and creative problem-solving
              to deliver smart digital solutions that help businesses grow.
            </p>
          </motion.div>

          <motion.div
            className="about__team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                whileHover={{ y: -9 }}
                className="about__member"
              >
                <div className="about__member-top">
                  <span className="about__member-number">
                    {m.number}
                  </span>
                  <span className="about__member-badge">
                    <CheckCircle2 size={13} /> Founding Team
                  </span>
                </div>

                <div className="about__member-image">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                  />
                </div>

                <div className="about__member-info">
                  <h3>{m.name}</h3>
                  <span className="about__member-role">{m.role}</span>

                  <div className="about__member-qualification">
                    {m.qualification}
                  </div>

                  <p>{m.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Work With Us?"
        subtitle="Let's turn your ideas into powerful digital solutions. Together, we can build something incredible."
      />
    </div>
  );
}
