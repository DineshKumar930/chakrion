import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import logo from "../assets/logo.png";
import Button from "./Button";
import "./Header.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  {
    name: "Our Services",
    to: "/services",
    dropdown: [
      { name: "Website Development", to: "/services#web" },
      { name: "Web Applications", to: "/services#web-app" },
      { name: "Mobile Apps", to: "/services#mobile" },
      { name: "ERP Software", to: "/services#erp" },
      { name: "AI Chatbots", to: "/services#chatbot" },
      { name: "UI/UX Design", to: "/services#design" },
    ],
  },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Careers", to: "/careers" },
  { name: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + prevent horizontal overflow when drawer open
  useEffect(() => {
    document.body.classList.toggle("header-lock", mobileOpen);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("header-lock");
    };
  }, [mobileOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Close desktop dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>


{/* Top Contact Bar */}
<div className="header__topbar">
  <div className="container header__topbar-inner">

    <a
      href="mailto:chakriontech@gmail.com"
      className="header__topbar-item"
    >
      <Mail size={15} />
      <span>chakriontech@gmail.com</span>
    </a>

    <span className="header__topbar-divider" />

    <a
      href="tel:+917715970852"
      className="header__topbar-item"
    >
      <Phone size={15} />
      <span>+91 77159 70852</span>
    </a>

    <div className="header__topbar-tagline">
      <span>Web</span>
      <i />
      <span>Mobile App</span>
      <i />
      <span>ERP</span>
      <i />
      <span>AI Solutions</span>
    </div>

  </div>
</div>



        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label="Chakrion Technologies Home">
            <img src={logo} alt="Chakrion Technologies logo" />
          </Link>

          {/* ---------- Desktop Nav ---------- */}
          <nav className="header__nav" aria-label="Primary">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="header__dropdown"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `header__link ${isActive ? "header__link--active" : ""}`
                    }
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: servicesOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="header__menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        role="menu"
                      >
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) =>
                              `header__menu-item ${
                                isActive ? "header__menu-item--active" : ""
                              }`
                            }
                            onClick={() => setServicesOpen(false)}
                            role="menuitem"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link--active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
            <Button to="/contact" variant="primary" className="header__cta">
              Get a Quote <ArrowRight size={16} />
            </Button>
          </nav>

          {/* ---------- Mobile Toggle ---------- */}
          <button
            className="header__toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ---------- Mobile Drawer ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="header__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="header__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              aria-label="Mobile"
              style={{ willChange: "transform" }}
            >
              {/* ---- Drawer header with close button ---- */}
              <div className="header__mobile-top">
                <span className="header__mobile-title">Chakrion Technologies</span>
                <button
                  type="button"
                  className="header__mobile-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      type="button"
                      className={`header__mobile-link ${
                        mobileServicesOpen ? "active" : ""
                      }`}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        style={{
                          transform: mobileServicesOpen
                            ? "rotate(180deg)"
                            : "none",
                          transition: "transform 0.2s",
                        }}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          className="header__mobile-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          {link.dropdown.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.to}
                              className="header__mobile-sublink"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      `header__mobile-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )
              )}

              <Button
                to="/contact"
                variant="primary"
                className="header__mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote <ArrowRight size={16} />
              </Button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}