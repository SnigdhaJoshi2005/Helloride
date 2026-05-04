import { useState } from "react";
import Header from "./Header";

const contactCards = [
  { title: "Live chat", desc: "Chat with our support team", icon: "CHAT" },
  { title: "Call us", desc: "+977-9812345678", icon: "CALL" },
  { title: "Email", desc: "support@helloride.com", icon: "MAIL" },
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
    <button className="help-faq-item" type="button" onClick={() => setOpen((current) => !current)}>
      <span className="help-faq-question">
        {q}
        <strong>{open ? "-" : "+"}</strong>
      </span>
      {open && <span className="help-faq-answer">{a}</span>}
    </button>
  );
}

function Help() {
  return (
    <main className="help-page">
      <Header />

      <section className="help-content">
        <h1>Help Center</h1>

        <div className="help-contact-grid">
          {contactCards.map((card) => (
            <article className="help-contact-card" key={card.title}>
              <span aria-hidden="true">{card.icon}</span>
              <div>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
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
