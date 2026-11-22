
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub
} from "react-icons/fa6";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight
} from "lucide-react";

import logo from "../assets/footerlogo.png";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com/"
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      url: "https://x.com/"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/"
    }
  ];

  return (
    <footer className="footer">

      <div className="container footer__grid">

        {/* Brand Section */}
        <div className="footer__brand">

          <Link to="/" className="footer__logo-link">
            <img
              src={logo}
              alt="Chakrion Technologies"
              className="footer__logo"
            />
          </Link>

          <p>
  Chakrion Technologies builds premium digital experiences —
  web, mobile, ERP and AI solutions that drive measurable
  business growth.
  <br />
  <span>Under the IGES (Indian Group of Education and Sports)</span>
</p>

          <div className="footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Company Links */}
        <div className="footer__col">
          <h4>Company</h4>

          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services Links */}
        <div className="footer__col">
          <h4>Our Services</h4>

          <Link to="/services#web">Web Development</Link>
          <Link to="/services#mobile">Mobile Apps</Link>
          <Link to="/services#erp">ERP Software</Link>
          <Link to="/services#chatbot">AI Chatbots</Link>
          <Link to="/services#design">UI/UX Design</Link>
        </div>

        {/* Contact Section */}
        <div className="footer__col footer__contact">
          <h4>Get in Touch</h4>

          <a href="mailto:chakriontech@gmail.com">
            <Mail size={17} />
            <span>chakriontech@gmail.com</span>
          </a>

          <a href="tel:+917715970852">
            <Phone size={17} />
            <span>+91 7715970852</span>
          </a>

          <p>
            <MapPin size={17} />
            <span>Infront of UCO Bank, Ugapur Aurai,Bhadohi-221301, Uttar Pradesh, India</span>
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="footer__newsletter">

          <h4>Stay Updated</h4>

          <p>
            Get the latest technology updates, insights and
            digital innovation news.
          </p>

          <form
            onSubmit={onSubscribe}
            className="footer__form"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
            />

            <button type="submit" aria-label="Subscribe">
              <Send size={18} />
            </button>
          </form>

          {subscribed && (
            <span className="footer__success">
              Thank you for subscribing! 🎉
            </span>
          )}

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer__bottom">

        <div className="container footer__bottom-inner">

          <p>
            © {new Date().getFullYear()} Chakrion Technologies.
            All rights reserved.
          </p>

          <div className="footer__bottom-links">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms &amp; Conditions
            </Link>

            <Link to="/" className="footer__back-top">
              Back to top <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}
