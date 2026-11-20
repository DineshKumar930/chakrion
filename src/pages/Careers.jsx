
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  Target,
  ArrowRight,
  Mail,
  Sparkles,
  Code2,
  Rocket,
  Globe
} from "lucide-react";

import Button from "../components/Button";
import "./Careers.css";

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    text: "Work with modern technologies and turn creative ideas into real-world digital solutions."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    text: "Build your technical skills, explore new opportunities and grow professionally."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    text: "Be part of a supportive environment where teamwork and knowledge sharing matter."
  },
  {
    icon: Rocket,
    title: "Meaningful Projects",
    text: "Contribute to projects that solve real business challenges and create impact."
  }
];

const values = [
  { icon: Target, title: "Excellence", text: "We believe in quality and delivering our best." },
  { icon: Heart, title: "Respect", text: "We value every individual and their contribution." },
  { icon: Code2, title: "Innovation", text: "We embrace technology and creative thinking." },
  { icon: Globe, title: "Growth", text: "We learn, improve and grow together." }
];

export default function Careers() {
  return (
    <main className="careers-page">

      {/* Hero */}
      <section className="career-hero">
        <div className="career-blob career-blob-one" />
        <div className="career-blob career-blob-two" />

        <div className="container career-hero-inner">
          <motion.div
            className="career-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="career-badge">
              <Sparkles size={15} />
              BUILD YOUR FUTURE WITH US
            </span>

            <h1>
              Build Your Career.
              <span> Create What's Next.</span>
            </h1>

            <p>
              Great technology starts with great people. Discover the
              culture, possibilities and vision that make Chakrion
              Technologies a place to grow.
            </p>

            <div className="career-hero-actions">
              <Button to="/contact" variant="primary" size="lg">
                Connect With Us <ArrowRight size={18} />
              </Button>
            </div>

            <div className="career-hero-note">
              <Users size={17} />
              <span>People. Ideas. Innovation. Growth.</span>
            </div>
          </motion.div>

          <motion.div
            className="career-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="career-visual-card">
              <div className="career-visual-icon">
                <BriefcaseBusiness size={55} />
              </div>
              <div className="career-floating career-float-one">
                <Code2 size={23} />
                <span>Innovation</span>
              </div>
              <div className="career-floating career-float-two">
                <Rocket size={23} />
                <span>Growth</span>
              </div>
              <div className="career-visual-bottom">
                <Sparkles size={18} />
                <span>Ideas Into Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="career-benefits section-padding">
        <div className="container">
          <div className="career-section-heading">
            <span>WHY CHAKRION?</span>
            <h2>A Place Where Ideas <span>Grow.</span></h2>
            <p>
              We believe great work happens when talented people
              get the opportunity to learn, create and collaborate.
            </p>
          </div>

          <div className="career-benefit-grid">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="career-benefit-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="career-card-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="career-culture">
        <div className="container career-culture-inner">
          <div className="career-culture-content">
            <span>OUR CULTURE</span>
            <h2>More Than Just <span>Work.</span></h2>
            <p>
              At Chakrion Technologies, we believe in building more
              than software. We believe in building relationships,
              sharing knowledge and creating an environment where
              people can do their best work.
            </p>
          </div>

          <div className="career-values-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div className="career-value-item" key={item.title}>
                  <Icon size={23} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="career-openings section-padding">
        <div className="container">
          <div className="career-opening-card">
            <div className="career-opening-icon">
              <BriefcaseBusiness size={35} />
            </div>

            <span className="career-opening-status">
              CURRENT OPPORTUNITIES
            </span>

            <h2>We're Not Hiring <span>Right Now.</span></h2>

            <p>
              We don't have any open positions at the moment.
              However, we're always interested in connecting with
              passionate people who love technology, creativity
              and innovation.
            </p>

            <div className="career-no-jobs">
              <span className="career-status-dot" />
              No Open Positions Currently
            </div>

            <div className="career-opening-divider" />

            <h3>Stay Connected With Us!</h3>
            <p className="career-opening-small">
              Keep an eye on this page for future career opportunities.
              We'd love to connect when the right opportunity comes along.
            </p>

            <Button to="/contact" variant="primary" size="lg">
              Contact Our Team <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="career-cta">
        <div className="container career-cta-inner">
          <div>
            <span>LET'S CONNECT</span>
            <h2>Have Something Great to Bring to the Table?</h2>
            <p>
              We'd love to hear from people who are passionate about
              technology and building meaningful digital experiences.
            </p>
          </div>

          <Button to="/contact" variant="primary" size="lg">
            Get In Touch <Mail size={18} />
          </Button>
        </div>
      </section>

    </main>
  );
}
