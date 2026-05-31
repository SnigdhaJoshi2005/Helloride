import { useState } from "react";
import Header from "./Header";
import helpHero from "../assets/helpcenter.jpeg";
import { IoChatboxEllipses, IoCall, IoMail } from "react-icons/io5";
import { IoAdd, IoRemove } from "react-icons/io5";

const contactIcons = {
  CHAT: <IoChatboxEllipses />,
  CALL: <IoCall />,
  MAIL: <IoMail />,
};

const contactCards = [
  {
    title: "Live chat",
    desc: "Chat with our support team",
    mobileTitle: "Live Chat",
    mobileDesc: "Chat with our support team in real time.",
    icon: "CHAT",
  },
  {
    title: "Call us",
    desc: "+977-9812345678",
    mobileTitle: "Call Us",
    mobileDesc: "Talk to our support team anytime.",
    icon: "CALL",
  },
  {
    title: "Email",
    desc: "support@helloride.com",
    mobileTitle: "Email",
    mobileDesc: "Send us an email and we'll get back to you.",
    icon: "MAIL",
  },
];

const faqs = [
  {
    q: "How do I book a ride?",
    a: "Open the app, enter your pickup and destination, choose your ride, and confirm.",
  },
  {
    q: "What payment methods are accepted?",
    a: "HelloRide supports cash, eSewa, Khalti, and card payments.",
  },
  {
    q: "How is the fare calculated?",
    a: "Fare is based on distance, estimated time, vehicle type, and current demand.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={`help-faq-item ${open ? "is-open" : ""}`}
      type="button"
      onClick={() => setOpen((current) => !current)}
    >
      <span className="help-faq-question">
        {q}
        <strong>
          <span className="help-faq-icon">{open ? <IoRemove /> : <IoAdd />}</span>
          <span className="help-faq-text">{open ? "-" : "+"}</span>
        </strong>
      </span>
      <span className="help-faq-answer">{a}</span>
    </button>
  );
}

function Help() {
  return (
    <main className="help-page">
      <Header />

      <section className="help-content">
        <div className="help-mobile-hero" style={{ backgroundImage: `url(${helpHero})` }}>
          <div>
            <h1>Help Center</h1>
            <p>We're here to help you whenever you need us.</p>
            <span>24/7 Support</span>
          </div>
        </div>

        <h1 className="help-desktop-title">Help Center</h1>

        <div className="help-contact-grid">
          {contactCards.map((card) => (
            <article className="help-contact-card" key={card.title}>
              <span aria-hidden="true">
                <span className="help-contact-card-icon">{contactIcons[card.icon]}</span>
                <span className="help-contact-card-text">{card.icon}</span>
              </span>
              <div>
                <h2>
                  <span className="desktop-help-text">{card.title}</span>
                  <span className="mobile-help-text">{card.mobileTitle}</span>
                </h2>
                <p>
                  <span className="desktop-help-text">{card.desc}</span>
                  <span className="mobile-help-text">{card.mobileDesc}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="help-faq-heading">Frequently Asked Questions</h2>

        <div className="help-faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Help;
