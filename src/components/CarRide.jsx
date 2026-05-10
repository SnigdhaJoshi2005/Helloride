import ServicePage from "./ServicePage";
import CarRideAnimation from "./CarRideAnimation";
import carServiceImage from "../assets/Car illustration.png";

const carStats = [
  { icon: "bolt", value: "7 min", label: "Avg wait time", delay: "0ms", x: "-30px", y: "-20px" },
  { icon: "star", value: "4.8", label: "Rider rating", delay: "200ms", x: "20px", y: "60px" },
  { icon: "check", value: "100%", label: "Eco-friendly", delay: "400ms", x: "-40px", y: "50px" },
  { icon: "fare", value: "NPR 150", label: "Starting fare", delay: "600ms", x: "10px", y: "-30px" },
];

function CarRide() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Car Rides"
      intro=""
      icon="car"
      image={carServiceImage}
      stats={carStats}
      leftContent={<CarRideAnimation />}
      features={[]}
    />
  );
}

export default CarRide;
