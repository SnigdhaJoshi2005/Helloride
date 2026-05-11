import Header from "./Header";
import Form from "./Form";
import ServiceIcon from "./ServiceIcon";

const benefits = [
  { icon: "money", title: "Earn NPR 1500-3000/day", desc: "Higher earnings with premium car rides" },
  { icon: "calendar", title: "Peak Hour Bonuses", desc: "Earn extra during rush hours" },
  { icon: "star", title: "Monthly Incentives", desc: "Complete targets and earn rewards" },
];

const requirements = [
  "Valid driver's license (4+ wheeler)",
  "Registered car in good condition",
  "Smartphone with internet",
  "Age 21 or above",
  "Clean driving record",
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

          <div className="earn-illustration earn-car-illustration" aria-hidden="true">
            <div className="earn-cloud earn-cloud-one" />
            <div className="earn-cloud earn-cloud-two" />
            <div className="earn-mountain earn-mountain-one" />
            <div className="earn-mountain earn-mountain-two" />
            <div className="earn-tree-row">
              <span /><span /><span /><span />
            </div>
            <div className="earn-road earn-road-top" />
            <div className="earn-road earn-road-bottom" />
            <div className="earn-car-shape">
              <span className="car-wheel car-wheel-left" />
              <span className="car-wheel car-wheel-right" />
            </div>
          </div>
        </div>

        <section className="earn-requirements">
          <h2>Requirements</h2>
          <div className="earn-requirement-list earn-requirement-list-car">
            {requirements.map((req) => <p key={req}>{req}</p>)}
          </div>
        </section>

        <section className="earn-benefits earn-benefits-car" aria-label="Car earning benefits">
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
