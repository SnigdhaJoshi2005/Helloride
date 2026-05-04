import { useState } from "react";
import Header from "./Header";

const benefits = [
  {
    icon: "NPR",
    title: "Earn NPR 1500-3000/day",
    desc: "Higher earnings with premium car rides",
  },
  {
    icon: "CAL",
    title: "Peak Hour Bonuses",
    desc: "Earn extra during rush hours",
  },
  {
    icon: "BON",
    title: "Monthly Incentives",
    desc: "Complete targets and earn rewards",
  },
];

const requirements = [
  "Valid driver's license (4+ wheeler)",
  "Registered car in good condition",
  "Smartphone with internet",
  "Age 21 or above",
  "Clean driving record",
];

const fields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone Number", name: "phone", type: "tel" },
  { label: "Car License Plate", name: "carPlate", type: "text" },
];

function EarnCar() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carPlate: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Application submitted! We'll be in touch soon.");
  };

  return (
    <main>
      <Header />

      <section className="earn-page earn-car-page">
        <div className="earn-hero">
          <div className="earn-copy">
            <div className="earn-title-row">
              <span className="earn-mode-icon" aria-hidden="true">
                CAR
              </span>
              <h1>Earn with Car</h1>
            </div>
            <p>
              Join HelloRide as a car driver and start earning on your own
              schedule.
            </p>
          </div>

          <div className="earn-illustration earn-car-illustration" aria-hidden="true">
            <div className="earn-cloud earn-cloud-one" />
            <div className="earn-cloud earn-cloud-two" />
            <div className="earn-mountain earn-mountain-one" />
            <div className="earn-mountain earn-mountain-two" />
            <div className="earn-tree-row">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="earn-road earn-road-top" />
            <div className="earn-road earn-road-bottom" />
            <div className="earn-car-shape">
              <span className="car-cabin" />
              <span className="car-wheel car-wheel-left" />
              <span className="car-wheel car-wheel-right" />
            </div>
          </div>
        </div>

        <section className="earn-requirements">
          <h2>Requirements</h2>
          <div className="earn-requirement-list earn-requirement-list-car">
            {requirements.map((requirement) => (
              <p key={requirement}>{requirement}</p>
            ))}
          </div>
        </section>

        <section className="earn-benefits earn-benefits-car" aria-label="Car earning benefits">
          {benefits.map((benefit) => (
            <article className="earn-benefit-card" key={benefit.title}>
              <span aria-hidden="true">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </article>
          ))}
        </section>

        <section className="earn-form-section">
          <p>Ready to start earning?</p>
          <h2>Join HelloRide</h2>

          <form className="earn-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <label key={field.name}>
                {field.label}
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </label>
            ))}

            <button type="submit">Submit Application</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default EarnCar;
