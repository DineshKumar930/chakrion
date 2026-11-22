import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}