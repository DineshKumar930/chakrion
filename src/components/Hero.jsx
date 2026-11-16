import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Button from "./Button";
import AnimatedText from "./AnimatedText";
import heroVisual from "../assets/ss.gif";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero__badge">
            <Sparkles size={16} /> Premium Software Agency
          </span>
          <h1>
            We Build Digital Experiences That Drive{" "}
            <span className="hero__grad">Business Growth.</span>
          </h1>
          <p className="hero__lead">
            Chakrion Technologies crafts scalable web apps, mobile apps, ERPs, and AI
            solutions — turning your vision into measurable results. <br />
            We specialize in <AnimatedText />
          </p>
          <div className="hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Let&apos;s Talk <ArrowRight size={18} />
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              <Play size={16} /> Explore Our Work
            </Button>
          </div>
          <div className="hero__trust">
            <div><ShieldCheck size={20} /><span>100% Secure Delivery</span></div>
            <div><TrendingUp size={20} /><span>Growth-Focused</span></div>
            <div><Sparkles size={20} /><span>Modern Tech Stack</span></div>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={heroVisual} alt="Technology illustration" />
        </motion.div>
      </div>
    </section>
  );
}