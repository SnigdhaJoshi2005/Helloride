import { useEffect, useState } from "react";

const foodStages = [
  {
    icon: "01",
    label: "Quick Delivery",
    sub: "Get your food in 30 minutes or less",
  },
  { icon: "02", label: "Hot & Fresh", sub: "Temperature-controlled delivery" },
  {
    icon: "03",
    label: "Real-time Tracking",
    sub: "Track your order every step",
  },
];
const bikeStages = [
  {
    icon: "01",
    number: "01",
    label: "Faster Travel",
    sub: "We fine the best routes to get you here quicker.",
    mobileLabel: "Faster Travel",
    mobileSub: "We fine the best routes to get you here quicker.",
  },
  {
    icon: "02",
    number: "02",
    label: "Affordable Rides",
    sub: "Enjoy budget-friendly rides starting from NRP 50.",
    mobileLabel: "Affordable Rides",
    mobileSub: "Enjoy budget-friendly rides starting from NRP 50.",
  },
  {
    icon: "03",
    number: "03",
    label: "Safe & Verified",
    sub: "All riders are background checked for your safety.",
    mobileLabel: "Safe & Verified",
    mobileSub: "All riders are background checked for your safety.",
  },
];
const carStages = [
  {
    icon: "01",
    number: "01",
    label: "Faster Travel",
    sub: "We fine the best routes to get you here quicker.",
    mobileLabel: "Comfortable Seating",
    mobileSub: "Room for up to 4 passengers.",
  },
  {
    icon: "02",
    number: "02",
    label: "Affordable Rides",
    sub: "Enjoy budget-friendly rides starting from NRP 150.",
    mobileLabel: "Premium Service",
    mobileSub: "Professional drivers & clean cars.",
  },
  {
    icon: "03",
    number: "03",
    label: "Safe & Verified",
    sub: "All drivers are background checked for your safety.",
    mobileLabel: "AC Available",
    mobileSub: "Stay cool in every weather.",
  },
];

const parcelStages = [
  {
    icon: "01",
    label: "Same-Day Delivery",
    sub: "Express delivery within the city",
  },
  {
    icon: "02",
    label: "Secure Handling",
    sub: "Your parcels are in safe hands",
  },
  {
    icon: "03",
    label: "Door-to-Door",
    sub: "Pickup and delivery at your location",
  },
];

const travelStages = [
  {
    icon: "01",
    label: "Choose Destination",
    sub: "Find routes for city rides, tours, and airport trips",
  },
  {
    icon: "02",
    label: "Pick Your Ride",
    sub: "Bike, car, or group travel options in one place",
  },
  {
    icon: "03",
    label: "Travel Confidently",
    sub: "Track your route and get support whenever needed",
  },
];

const hotelStages = [
  {
    icon: "01",
    label: "Search Stays",
    sub: "Browse trusted rooms near your destination",
  },
  {
    icon: "02",
    label: "Compare Comfort",
    sub: "Check price, location, and room facilities quickly",
  },
  {
    icon: "03",
    label: "Book and Arrive",
    sub: "Reserve your stay and ride straight to the hotel",
  },
];

const headerStages = {
  bike: {
    title: "Bike Ride",
    sub: "Quick, affordable, and eco-friendly bike rides for navigating through traffic with ease.",
  },
  car: {
    title: "Car Rides",
    sub: "Experience the convenience of car rides with our premium service.",
  },
  food: {
    title: "Food",
    sub: "Enjoy delicious meals delivered to your doorstep.",
  },
  parcel: {
    title: "Parcel Delivery",
    sub: "Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service.",
  },
  travel: {
    title: "Travel",
    sub: "Plan rides, tours, and transfers with simple booking and reliable local support.",
  },
  hotel: {
    title: "Hotel",
    sub: "Find comfortable hotels, compare rooms, and connect your stay with HelloRide travel.",
  },
};

const stepDuration = 1500;

const SeviceLeftV1 = ({ type }) => {
  const stages = [];
  let title = "";
  let sub = "";

  if (type === "bike") {
    stages.push(...bikeStages);
    title = headerStages.bike.title;
    sub = headerStages.bike.sub;
  } else if (type === "car") {
    stages.push(...carStages);
    title = headerStages.car.title;
    sub = headerStages.car.sub;
  } else if (type === "food") {
    stages.push(...foodStages);
    title = headerStages.food.title;
    sub = headerStages.food.sub;
  } else if (type === "parcel") {
    stages.push(...parcelStages);
    title = headerStages.parcel.title;
    sub = headerStages.parcel.sub;
  } else if (type === "travel") {
    stages.push(...travelStages);
    title = headerStages.travel.title;
    sub = headerStages.travel.sub;
  } else if (type === "hotel") {
    stages.push(...hotelStages);
    title = headerStages.hotel.title;
    sub = headerStages.hotel.sub;
  }

  const [activeStage, setActiveStage] = useState(0);
  const isFinished = activeStage === stages.length;
  const progress =
    Math.min(activeStage, stages.length - 1) / (stages.length - 1);

  useEffect(() => {
    if (window.matchMedia("(max-width: 560px)").matches) return undefined;
    if (activeStage === stages.length) return undefined;

    const timer = window.setTimeout(() => {
      setActiveStage((current) => current + 1);
    }, stepDuration);

    return () => window.clearTimeout(timer);
  }, [activeStage]);

  return (
    <div className="service-custom-visual bike-ride-animation bor">
      <div
        className="pj-shell"
        aria-label="Bike ride features"
        style={{
          "--pj-progress": progress,
          "--pj-step-count": stages.length,
          "--pj-step-duration": `${stepDuration}ms`,
        }}
      >
        <div className="pj-topic">
          <strong style={{ fontSize: "40px" }}>{title}</strong>
          <p>{sub}</p>
        </div>

        <div className="pj-track-area">
          <span className="pj-progress-rail" aria-hidden="true" />
          <span className="pj-progress-fill" aria-hidden="true" />

          <div className="pj-track">
            {stages.map((stage, i) => {
              const isActive = i === activeStage && !isFinished;
              const isComplete = i < activeStage;

              return (
                <div
                  key={stage.label}
                  className={`pj-stage ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}`}
                  style={{ "--pj-delay": `${i * 0.2}s` }}
                  aria-current={i === activeStage ? "step" : undefined}
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
};

export default SeviceLeftV1;
