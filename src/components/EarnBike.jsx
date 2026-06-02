import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from "./Header";
import Form from "./Form";
import ServiceIcon from "./ServiceIcon";
import bike2Image from "../assets/Bike2.png";

const benefits = [
  {
    icon: "money",
    title: "Earn NPR 500-1500/day",
    desc: "Average earnings from part-time riders",
  },
  {
    icon: "calendar",
    title: "Flexible Schedule",
    desc: "Work whenever you want, wherever you want",
  },
  {
    icon: "star",
    title: "Weekly Bonuses",
    desc: "Complete rides and earn extra incentives",
  },
];

const requirements = [
  {
    number: '01.',
    title: 'Valid License',
    text: "Drive legally with a government approved driver's license.",
  },
  {
    number: '02.',
    title: 'Personal Bike',
    text: 'Use your own bike with any models.',
  },
  {
    number: '03.',
    title: 'Smartphone Access',
    text: 'Must have a Smartphone with internet access to it.',
  },
  {
    number: '04.',
    title: 'Age Requirement',
    text: 'You must be at least 18 years old to join.',
  },
];

const steps = [
  { icon: "1", label: "Apply online" },
  { icon: "2", label: "Get verified" },
  { icon: "3", label: "Download app" },
  { icon: "4", label: "Start earning" },
];

const requirementPath =
  'M82 66 C82 170 478 180 478 260 C478 350 82 360 82 440 C82 530 478 540 478 620 C478 700 82 710 82 780'

const requirementCardVariants = {
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

function RequirementCard({ requirement, index }) {
  return (
    <motion.article
      className={`bike-requirement-card bike-requirement-card-${index + 1}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={requirementCardVariants}
    >
      <span>{requirement.number}</span>
      <div>
        <h3>{requirement.title}</h3>
        <p>{requirement.text}</p>
      </div>
    </motion.article>
  )
}

function EarnBike() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 })

  return (
    <main>
      <Header />

      <section className="earn-page earn-bike-page">
        <div className="earn-hero earn-bike-hero">
          <div className="earn-copy">
            <div className="earn-title-row">
              <h1>Earn with Bike</h1>
            </div>
            <p>
              Join HelloRide as a bike rider and start earning on your own
              schedule.
            </p>
          </div>

          <img className="earn-bike2-image" src={bike2Image} alt="" />
        </div>

        <section className="earn-benefits earn-benefits-bike" aria-label="Bike earning benefits">
          {benefits.map((benefit) => (
            <article className="earn-benefit-card" key={benefit.title}>
              <span aria-hidden="true">
                <ServiceIcon name={benefit.icon} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </article>
          ))}
        </section>

        <section className={`bike-requirements-section ${isInView ? 'is-visible' : ''}`} ref={sectionRef}>
          <h2>REQUIRE<span>MENTS</span></h2>
          <div className="bike-requirement-roadmap">
            <svg className="bike-requirement-path" viewBox="0 0 560 860" aria-hidden="true" preserveAspectRatio="none">
              <path d={requirementPath} pathLength="1000" />
            </svg>
            {requirements.map((requirement, index) => (
              <RequirementCard key={requirement.number} requirement={requirement} index={index} />
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
                <strong className="efv-amount">NPR 1,500</strong>
                <span className="efv-bar-track">
                  <span className="efv-bar-fill efv-bar-fill--bike" />
                </span>
              </div>

              <div className="efv-steps">
                {steps.map((step, index) => (
                  <div
                    className="efv-step"
                    key={step.label}
                    style={{ animationDelay: `${index * 0.18}s` }}
                  >
                    <span className="efv-step-icon">{step.icon}</span>
                    <span className="efv-step-label">{step.label}</span>
                    {index < steps.length - 1 && <span className="efv-step-connector" />}
                  </div>
                ))}
              </div>

              <div className="efv-card efv-card--rating">
                <span className="efv-label">Rider rating</span>
                <div className="efv-stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`efv-star${n <= 4 ? " efv-star--lit" : ""}`}
                    >
                      *
                    </span>
                  ))}
                </div>
                <span className="efv-rating-note">Top 15% of riders</span>
              </div>

              <div className="efv-pulse-ring" />
            </div>
          </div>
        </section>
      </section>


    </main>
  );
}

export default EarnBike;
