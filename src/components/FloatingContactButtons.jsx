
import React from "react";
import { Phone } from "lucide-react";
import "./FloatingContactButtons.css";

const FloatingContactButtons = () => {
  const phoneNumber = "917715970852"; // Replace with your number

  const whatsappMessage = encodeURIComponent(
    "Hello Chakrion Technologies! I want to know more about your services."
  );

  return (
    <div className="floating-contact">

      {/* Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="floating-btn call-btn"
        aria-label="Call us"
        title="Call Us"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.04 2.67A13.28 13.28 0 0 0 4.6 22.7L2.67 29.33l6.8-1.78a13.3 13.3 0 1 0 6.57-24.88Zm0 24.25a10.95 10.95 0 0 1-5.58-1.53l-.4-.24-4.03 1.06 1.08-3.93-.26-.41a10.96 10.96 0 1 1 9.19 5.05Zm6.01-8.21c-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.64-1.96-1.83-2.29-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.01-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.76s1.18 3.2 1.34 3.42c.17.22 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.24-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z"/>
        </svg>
      </a>

    </div>
  );
};

export default FloatingContactButtons;
