import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import "./Contact.css";

const serviceOptions = [
  "Website Development", "Custom Web Application", "Mobile App", "ERP Software",
  "AI Chatbot", "E-commerce", "UI/UX Design", "Maintenance & Support", "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | "error"

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.phone && !/^[+\d\s-]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.service) e.service = "Please select a service.";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) { setStatus("error"); return; }
    setStatus("success");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setStatus(null), 5000);
  };

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="contact page">
      <section className="contact__hero">
        <div className="container contact__hero-inner">
          <span className="eyebrow">Contact Us</span>
          <h1>Let&apos;s talk about your next project.</h1>
          <p className="text-muted">Fill in the form and our team will get back to you within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact__grid">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" value={form.name} onChange={change} placeholder="John Doe" />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={change} placeholder="john@company.com" />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={form.phone} onChange={change} placeholder="+91 99999 99999" />
                {errors.phone && <span className="contact__error">{errors.phone}</span>}
              </div>
              <div className="contact__field">
                <label htmlFor="service">Service Needed *</label>
                <select id="service" name="service" value={form.service} onChange={change}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <span className="contact__error">{errors.service}</span>}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={change} placeholder="Tell us about your project..." />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button type="submit" className="contact__submit">
              Send Message <Send size={18} />
            </button>

            {status === "success" && (
              <div className="contact__feedback contact__feedback--success">
                <CheckCircle2 size={18} /> Thanks! Your message was sent. We&apos;ll be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="contact__feedback contact__feedback--error">
                <AlertCircle size={18} /> Please fix the highlighted fields and try again.
              </div>
            )}
          </motion.form>

          <aside className="contact__aside">
            <div className="contact__info-card">
              <h3>Contact Information</h3>
              <a href="mailto:chakriontech@gmail.com"><Mail size={18} /> chakriontech@gmail.com</a>
              <a href="tel:+919118668889"><Phone size={18} /> +91 9118668889</a>
              <p><MapPin size={18} />Infront of UCO Bank, Ugapur Aurai,Bhadohi-221301, Uttar Pradesh, India</p>
            </div>

            <a
              href="https://wa.me/919118668889?text=Hi%20Chakrion%2C%20I%27d%20like%20to%20discuss%20a%20project"
              className="contact__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>

            <div className="contact__map">
              <iframe
                title="Chakrion Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.133826433086!2d82.56102167408491!3d25.29970742754313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fdd58415cd4ed%3A0xece6ce160bb6e615!2sUCO%20Bank!5e0!3m2!1sen!2sin!4v1794805865207!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}