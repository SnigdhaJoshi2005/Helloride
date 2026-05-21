import ServicePage from "./ServicePage";
import ServiceIcon from "./ServiceIcon";

const travelStats = [
  { icon: "route", value: "24/7", label: "Trip support", delay: "0ms", x: "-30px", y: "-20px" },
  { icon: "star", value: "4.8", label: "Guest rating", delay: "200ms", x: "20px", y: "60px" },
  { icon: "check", value: "Easy", label: "Booking flow", delay: "400ms", x: "-40px", y: "50px" },
  { icon: "fare", value: "Best", label: "Fare options", delay: "600ms", x: "10px", y: "-30px" },
];

const travelSteps = [
  { icon: "01", label: "Choose Destination", sub: "Find routes for city rides, tours, and airport trips" },
  { icon: "02", label: "Pick Your Ride", sub: "Bike, car, or group travel options in one place" },
  { icon: "03", label: "Travel Confidently", sub: "Track your route and get support whenever needed" },
];

function TravelPlanVisual() {
  return (
    <div className="service-booking-visual travel-booking-visual" aria-hidden="true">
      <div className="booking-card booking-card-main">
        <span className="booking-kicker">Trip plan</span>
        <strong>Kathmandu to Pokhara</strong>
        <div className="booking-route-line">
          <span />
          <i />
          <span />
        </div>
        <div className="booking-meta-grid">
          <p>
            <span>Pickup</span>
            08:30 AM
          </p>
          <p>
            <span>Vehicle</span>
            Comfort Car
          </p>
        </div>
      </div>
      <div className="booking-card booking-card-small booking-card-airport">
        <ServiceIcon name="travel" />
        <strong>Airport</strong>
        <span>On-time pickup</span>
      </div>
      <div className="booking-card booking-card-small booking-card-support">
        <ServiceIcon name="shield" />
        <strong>Support</strong>
        <span>Ready 24/7</span>
      </div>
    </div>
  );
}

function TravelSteps() {
  return (
    <div className="service-custom-visual bike-ride-animation">
      <div
        className="pj-shell"
        aria-label="Travel booking features"
        style={{
          "--pj-progress": 1,
          "--pj-step-count": travelSteps.length,
          "--pj-step-duration": "1500ms",
        }}
      >
        <div className="pj-topic">
          <strong style={{ fontSize: "40px" }}>Travel</strong>
          <p>Plan rides, tours, and transfers with simple booking and reliable local support.</p>
        </div>

        <div className="pj-track-area">
          <span className="pj-progress-rail" aria-hidden="true" />
          <span className="pj-progress-fill" aria-hidden="true" />

          <div className="pj-track">
            {travelSteps.map((stage, i) => (
              <div
                key={stage.label}
                className="pj-stage is-complete"
                style={{ "--pj-delay": `${i * 0.2}s` }}
              >
                <div className="pj-dot-row">
                  <div className="pj-icon-wrap">
                    <span className="pj-ring" />
                    <span className="pj-icon">{stage.icon}</span>
                  </div>
                </div>
                <div className="pj-text">
                  <strong className="pj-label">{stage.label}</strong>
                  <span className="pj-sub">{stage.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Travel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Travel"
      intro=""
      icon="travel"
      image={<TravelPlanVisual />}
      stats={travelStats}
      leftContent={<TravelSteps />}
      features={[]}
    />
  );
}

export default Travel;
