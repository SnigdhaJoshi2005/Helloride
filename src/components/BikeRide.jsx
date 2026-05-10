import ServicePage from "./ServicePage";
import BikeRideAnimation from "./BikeRideAnimation";
import bikeServiceImage from "../assets/Bike illustration.jpg";

const bikeStats = [
  { icon: "bolt", value: "3 min", label: "Avg wait time", delay: "0ms", x: "-30px", y: "-20px" },
  { icon: "star", value: "4.8", label: "Rider rating", delay: "200ms", x: "20px", y: "60px" },
  { icon: "check", value: "100%", label: "Eco-friendly", delay: "400ms", x: "-40px", y: "50px" },
  { icon: "fare", value: "NPR 50", label: "Starting fare", delay: "600ms", x: "10px", y: "-30px" },
];

function BikeRide() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Bike Rides"
      intro=""
      icon="bike"
      image={bikeServiceImage}
      stats={bikeStats}
      leftContent={<BikeRideAnimation />}
      features={[]}
    />
  );
}

export default BikeRide;
