import { useEffect, useState } from "react";
import ServicePage from "./ServicePage";
import ServiceIcon from "./ServiceIcon";
import hotel1 from "../assets/hotel1.png";
import hotel2 from "../assets/hotel2.png";
import hotel3 from "../assets/hotel3.png";
import hotel4 from "../assets/hotel4.png";
import hotel5 from "../assets/hotel5.png";

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

const stepDuration = 1500;

const hotelImages = [hotel1, hotel2, hotel3, hotel4, hotel5];

const stayCards = [
  { icon: "gps", title: "Near your route", meta: "1.8 km", detail: "Hotels close to your pickup and drop-off path" },
  { icon: "star", title: "Top rated", meta: "4.8", detail: "Comfortable stays reviewed by real guests" },
  { icon: "hotel", title: "City View Suite", meta: "Rs 3,200", detail: "King bed, breakfast, and smooth check-in" },
  { icon: "shield", title: "Verified stay", meta: "Secure", detail: "Trusted rooms with confirmed reservations" },
  { icon: "car", title: "Ride included", meta: "Ready", detail: "Book a HelloRide straight to the lobby" },
];

function HotelStayScene() {
  const [activeCard, setActiveCard] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % stayCards.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="hotel-stay-scene" aria-label="Hotel stay card carousel">
      <div
        className="deck"
        tabIndex="0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {stayCards.map((card, index) => {
          const slot = ((index - activeCard + 2 + stayCards.length) % stayCards.length) + 1;
          const zIndex = slot === 3 ? 3 : slot === 2 || slot === 4 ? 2 : 1;

          return (
            <article
              className={`card c${slot}`}
              key={card.title}
              style={{
                zIndex,
                backgroundImage: `url(${hotelImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="stay-card-icon">
                <ServiceIcon name={card.icon} />
              </span>
              <small>{card.meta}</small>
              <strong>{card.title}</strong>
              <p>{card.detail}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function HotelSteps() {
  const [activeStage, setActiveStage] = useState(0);
  const isFinished = activeStage === hotelSteps.length;
  const progress = Math.min(activeStage, hotelSteps.length - 1) / (hotelSteps.length - 1);

  useEffect(() => {
    if (activeStage === hotelSteps.length) return undefined;

    const timer = window.setTimeout(() => {
      setActiveStage((current) => current + 1);
    }, stepDuration);

    return () => window.clearTimeout(timer);
  }, [activeStage]);

  return (
    <div className="service-custom-visual bike-ride-animation">
      <div
        className="pj-shell"
        aria-label="Hotel booking features"
        style={{
          "--pj-progress": progress,
          "--pj-step-count": hotelSteps.length,
          "--pj-step-duration": `${stepDuration}ms`,
        }}
      >
        <div className="pj-topic">
          <strong style={{ fontSize: "40px" }}>Hotel</strong>
          <p>Find comfortable hotels, compare rooms, and connect your stay with HelloRide travel.</p>
        </div>

        <div className="pj-track-area">
          <span className="pj-progress-rail" aria-hidden="true" />
          <span className="pj-progress-fill" aria-hidden="true" />

          <div className="pj-track">
            {hotelSteps.map((stage, i) => {
              const isActive = i === activeStage && !isFinished;
              const isComplete = i < activeStage;

              return (
                <div
                  key={stage.label}
                  className={`pj-stage ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}`}
                  style={{ "--pj-delay": `${i * 0.2}s` }}
                  aria-current={isActive ? "step" : undefined}
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
              );
            })}
          </div>
        </div>
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
