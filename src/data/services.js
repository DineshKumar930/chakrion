import {
  Globe, Code2, Smartphone, Boxes, Bot, UserRound, Briefcase,
  ShoppingCart, PenTool, Wrench,
} from "lucide-react";

export const services = [
  { id: "web", icon: Globe, title: "Website Development", description: "High-performance marketing and corporate websites built with modern frameworks.", features: ["Responsive design", "SEO optimized", "CMS integration"] },
  { id: "web-app", icon: Code2, title: "Custom Web Applications", description: "Scalable web apps tailored to your business workflows and needs.", features: ["React & Node", "Secure APIs", "Cloud ready"] },
  { id: "mobile", icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile apps with delightful UX.", features: ["iOS & Android", "React Native", "App Store launch"] },
  { id: "erp", icon: Boxes, title: "ERP Software Development", description: "Integrated ERP systems to streamline your operations end-to-end.", features: ["Inventory", "Accounting", "Custom modules"] },
  { id: "chatbot", icon: Bot, title: "Custom AI Chatbots", description: "AI-powered conversational assistants for support and sales.", features: ["GPT integrations", "Multi-channel", "Analytics"] },
  { id: "portfolio", icon: UserRound, title: "Personal Portfolio Websites", description: "Stunning portfolios that help professionals stand out.", features: ["Personal branding", "Animations", "Fast deploy"] },
  { id: "business", icon: Briefcase, title: "Business Websites", description: "Conversion-focused sites that establish trust and generate leads.", features: ["Lead capture", "Analytics", "CMS"] },
  { id: "ecommerce", icon: ShoppingCart, title: "E-commerce Development", description: "Full-featured online stores with secure payments and logistics.", features: ["Payment gateway", "Inventory", "Coupons"] },
  { id: "design", icon: PenTool, title: "UI/UX Design", description: "Human-centered designs that convert and delight users.", features: ["Wireframes", "Prototypes", "Design systems"] },
  { id: "maintenance", icon: Wrench, title: "Maintenance & Support", description: "Ongoing support, monitoring, and improvements for your systems.", features: ["24/7 monitoring", "Updates", "Performance audits"] },
];