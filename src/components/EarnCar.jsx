import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from "./Header";
import Form from "./Form";
import ServiceIcon from "./ServiceIcon";
import car2Image from "../assets/Car2.png";

const benefits = [
  { icon: "money", badge: "NPR", title: "Earn NPR 1500-3000/day", desc: "Higher earnings with premium car rides" },
  {
    icon: "calendar",
    badge: "CAL",
    title: "Peak Hour Bonuses",
    desc: "Earn extra during rush hours",
    mobileTitle: "Flexible Schedule",
    mobileDesc: "Work whenever you want, wherever you want.",
  },
  {
    icon: "star",
    badge: "BON",
    title: "Monthly Incentives",
    desc: "Complete targets and earn rewards",
    mobileTitle: "Weekly Bonus",
    mobileDesc: "Complete rides and earn extra amount and bonus.",
  },
];

const requirements = [
  {
    number: '01.',
    title: 'Valid License',
    text: "Driver must have a valid driver's license (4 wheeler)",
  },
  {
    number: '02.',
    title: 'Personal Car',
    text: 'You must have registered car in a good condition.',
  },
  {
    number: '03.',
    title: 'Smartphone Access',
    text: 'Must have a Smartphone with internet access to it.',
  },
  {
    number: '04.',
    title: 'Age Requirement',
    text: 'You must be at least 21 years old or above to join.',
  },
  {
    number: '05.',
    title: 'Clean Record',
    text: 'Maintain a clean and safe driving record.',
  },
];

const steps = [
  { icon: "1", label: "Apply online" },
  { icon: "2", label: "Get verified" },
  { icon: "3", label: "Download app" },
  { icon: "4", label: "Start earning" },
];

const carRequirementPath =
  'M82 66 C82 155 478 165 478 225 C478 300 82 310 82 375 C82 450 478 460 478 525 C478 600 82 610 82 680 C82 755 478 765 478 835'

const carRequirementCardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function CarRequirementCard({ requirement, index }) {
  return (
    <motion.article
      className={`car-requirement-card car-requirement-card-${index + 1}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={carRequirementCardVariants}
    >
      <span>{requirement.number}</span>
      <div>
        <h3>{requirement.title}</h3>
        <p>{requirement.text}</p>
      </div>
    </motion.article>
  )
}

function EarnCar() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 })

  return (
    <main>
      <Header />

      <section className="earn-page earn-car-page">
        <div className="earn-hero">
          <div className="earn-copy">
            <div className="earn-title-row">
              <h1>Earn with Car</h1>
            </div>
            <p>Join HelloRide as a car driver and start earning on your own schedule.</p>
          </div>

          <img className="earn-bike2-image" src={car2Image} alt="" />
        </div>

        <section className="earn-benefits earn-benefits-car" aria-label="Car earning benefits">
          {benefits.map((benefit) => (
            <article className="earn-benefit-card" key={benefit.title}>
              <span aria-hidden="true">
                <b className="desktop-benefit-badge">{benefit.badge}</b>
                <ServiceIcon name={benefit.icon} />
              </span>
              <h3>
                <span className="desktop-benefit-text">{benefit.title}</span>
                <span className="mobile-benefit-text">{benefit.mobileTitle || benefit.title}</span>
              </h3>
              <p>
                <span className="desktop-benefit-text">{benefit.desc}</span>
                <span className="mobile-benefit-text">{benefit.mobileDesc || benefit.desc}</span>
              </p>
            </article>
          ))}
        </section>

        <section className={`car-requirements-section ${isInView ? 'is-visible' : ''}`} ref={sectionRef}>
          <h2>REQUIRE<span>MENTS</span></h2>
          <div className="car-requirement-roadmap">
            <svg className="car-requirement-path" viewBox="0 0 560 1050" aria-hidden="true" preserveAspectRatio="none">
              <path d={carRequirementPath} pathLength="1000" />
            </svg>
            {requirements.map((requirement, index) => (
              <CarRequirementCard key={requirement.number} requirement={requirement} index={index} />
            ))}
          </div>
        </section>

        <section className="earn-form-section">
          <p>Ready to start earning?</p>
          <h2>Join HelloRide</h2>

          <div className="earn-form-split">
            <Form />

            <div className="earn-form-visual" aria-hidden="true">
              <div className="efv-card efv-card--earn">
                <span className="efv-label">Average daily</span>
                <strong className="efv-amount">NPR 3,000</strong>
                <span className="efv-bar-track">
                  <span className="efv-bar-fill" />
                </span>
              </div>

              <div className="efv-steps">
                {steps.map((s, i) => (
                  <div className="efv-step" key={s.label} style={{ animationDelay: `${i * 0.18}s` }}>
                    <span className="efv-step-icon">{s.icon}</span>
                    <span className="efv-step-label">{s.label}</span>
                    {i < steps.length - 1 && <span className="efv-step-connector" />}
                  </div>
                ))}
              </div>

              <div className="efv-card efv-card--rating">
                <span className="efv-label">Driver rating</span>
                <div className="efv-stars">
                  {[1,2,3,4,5].map((n) => (
                    <span key={n} className={`efv-star${n <= 4 ? " efv-star--lit" : ""}`}>*</span>
                  ))}
                </div>
                <span className="efv-rating-note">Top 10% of drivers</span>
              </div>

              <div className="efv-pulse-ring" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default EarnCar;
