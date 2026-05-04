import { useState } from "react";
import Header from "./Header";
import bike2Image from "../assets/Bike2.png";

const benefits = [
  {
    icon: "NPR",
    title: "Earn NPR 500-1500/day",
    desc: "Average earnings from part-time riders",
  },
  {
    icon: "CAL",
    title: "Flexible Schedule",
    desc: "Work whenever you want, wherever you want",
  },
  {
    icon: "BON",
    title: "Weekly Bonuses",
    desc: "Complete rides and earn extra incentives",
  },
];

const requirements = [
  "Valid driver's license",
  "Your own bike (any model)",
  "Smartphone with internet",
  "Age 18 or above",
];

const fields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone Number", name: "phone", type: "tel" },
  { label: "Bike License Plate", name: "bikePlate", type: "text" },
];

function EarnBike() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bikePlate: "",
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

      <section className="earn-page earn-bike-page">
        <div className="earn-hero earn-bike-hero">
          <div className="earn-copy">
            <div className="earn-title-row">
              <span className="earn-mode-icon" aria-hidden="true">
                BIKE
              </span>
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
              <span aria-hidden="true">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </article>
          ))}
        </section>

        <section className="earn-requirements earn-bike-requirements">
          <h2>Requirements</h2>
          <div className="earn-requirement-list earn-requirement-list-bike">
            {requirements.map((requirement) => (
              <p key={requirement}>{requirement}</p>
            ))}
          </div>
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

export default EarnBike;
