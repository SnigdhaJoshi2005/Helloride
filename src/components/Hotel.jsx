import ServicePage from "./ServicePage";
import ServiceIcon from "./ServiceIcon";

const hotelStats = [
  { icon: "star", value: "4.7", label: "Stay rating", delay: "0ms", x: "-30px", y: "-20px" },
  { icon: "lock", value: "Secure", label: "Reservations", delay: "200ms", x: "20px", y: "60px" },
  { icon: "check", value: "Verified", label: "Hotels", delay: "400ms", x: "-40px", y: "50px" },
  { icon: "fare", value: "Best", label: "Room rates", delay: "600ms", x: "10px", y: "-30px" },
];

const hotelSteps = [
  { icon: "01", label: "Search Stays", sub: "Browse trusted rooms near your destination" },
  { icon: "02", label: "Compare Comfort", sub: "Check price, location, and room facilities quickly" },
  { icon: "03", label: "Book and Arrive", sub: "Reserve your stay and ride straight to the hotel" },
];

function HotelStayScene() {
  return (
    <div className="hotel-stay-scene" aria-hidden="true">
      <div className="hotel-skyline">
        <span />
        <span />
        <span />
      </div>

      <div className="hotel-tower">
        <div className="hotel-roof">
          <ServiceIcon name="hotel" />
        </div>
        <div className="hotel-windows">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} style={{ "--window-delay": `${index * 0.16}s` }} />
          ))}
        </div>
        <div className="hotel-elevator">
          <span />
        </div>
        <div className="hotel-lobby">
          <ServiceIcon name="door" />
          <strong>Lobby</strong>
        </div>
      </div>

      <div className="hotel-route">
        <span className="hotel-route-line" />
        <span className="hotel-route-car">
          <ServiceIcon name="car" />
        </span>
        <span className="hotel-route-pin">Stay ready</span>
      </div>
    </div>
  );
}

function HotelSteps() {
  return (
    <div className="hotel-stay-animation" aria-label="Hotel booking features">
      <div className="hotel-stay-copy">
        <span>Hotel</span>
        <strong>Book the stay, then ride to the lobby.</strong>
        <p>Find comfortable hotels, compare rooms, and connect your stay with HelloRide travel.</p>
      </div>

      <div className="hotel-step-strip">
        {hotelSteps.map((stage, i) => (
          <article key={stage.label} style={{ "--hotel-step-delay": `${i * 0.18}s` }}>
            <span>{stage.icon}</span>
            <div>
              <strong>{stage.label}</strong>
              <p>{stage.sub}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Hotel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Hotel"
      intro=""
      icon="hotel"
      image={<HotelStayScene />}
      stats={hotelStats}
      leftContent={<HotelSteps />}
      features={[]}
      pageClassName="hotel-service-page"
    />
  );
}

export default Hotel;
