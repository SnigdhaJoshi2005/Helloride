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
    desktop: "Valid driver's license (4+ wheeler)",
    title: "Valid License",
    desc: "Driver must have a valid driver's license (4 wheeler)",
  },
  {
    desktop: "Registered car in good condition",
    title: "Personal Car",
    desc: "You must have registered car in a good condition.",
  },
  {
    desktop: "Smartphone with internet",
    title: "Smartphone Access",
    desc: "Must have a Smartphone with internet access to it.",
  },
  {
    desktop: "Age 21 or above",
    title: "Age Requirement",
    desc: "You must be at least 21 years old or above to join.",
  },
  {
    desktop: "Clean driving record",
    title: "Clean Record",
    desc: "Maintain a clean and safe driving record.",
    desktopOnly: true,
  },
];

const steps = [
  { icon: "1", label: "Apply online" },
  { icon: "2", label: "Get verified" },
  { icon: "3", label: "Download app" },
  { icon: "4", label: "Start earning" },
];

function EarnCar() {
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

        <section className="earn-requirements">
          <h2>Requirements</h2>
          <div className="earn-requirement-list earn-requirement-list-car">
            {requirements.map((req, index) => (
              <p key={req.title} className={req.desktopOnly ? "desktop-only-requirement" : undefined}>
                <span className="desktop-requirement-text">{req.desktop}</span>
                <span className="mobile-requirement-number">{String(index + 1).padStart(2, "0")}.</span>
                <strong className="mobile-requirement-title">{req.title}</strong>
                <small className="mobile-requirement-desc">{req.desc}</small>
              </p>
            ))}
          </div>
        </section>

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
