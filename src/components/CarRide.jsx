import ServicePage from "./ServicePage";
import CarRideAnimation from "./CarRideAnimation";
import carServiceImage from "../assets/Car illustration.jpg";

const carStats = [
  { icon: "bolt", value: "7 min", label: "Avg wait time", mobileValue: "2 min", delay: "0ms", x: "-30px", y: "-20px" },
  { icon: "star", value: "4.8", label: "Rider rating", mobileValue: "4.9", mobileLabel: "Driver rating", delay: "200ms", x: "20px", y: "60px" },
  { icon: "check", value: "100%", label: "Eco-friendly", mobileValue: "50+", mobileLabel: "Rides today", delay: "400ms", x: "-40px", y: "50px" },
  { icon: "fare", value: "NPR 150", label: "Starting fare", mobileValue: "NRP 100", mobileLabel: "Starting Price", delay: "600ms", x: "10px", y: "-30px" },
];

function CarRide() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Car Rides"
      intro="Travel in comfort with air-conditioned cars and professional drivers for your premium journey."
      icon="car"
      image={carServiceImage}
      stats={carStats}
      leftContent={<CarRideAnimation />}
      features={[]}
      pageClassName="ride-service-page car-service-page"
    />
  );
}

export default CarRide;
