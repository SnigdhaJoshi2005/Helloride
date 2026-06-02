import ServicePage from "./ServicePage";
import BikeRideAnimation from "./BikeRideAnimation";
import bikeServiceImage from "../assets/Bike illustration.jpg";
import SeviceLeftV1 from "./SeviceLeftV1";

const bikeStats = [
  {
    icon: "bolt",
    value: "3 min",
    label: "Avg wait time",
    mobileValue: "2 min",
    delay: "0ms",
    x: "-30px",
    y: "-20px",
  },
  {
    icon: "star",
    value: "4.8",
    label: "Rider rating",
    mobileValue: "4.9",
    mobileLabel: "Driver rating",
    delay: "200ms",
    x: "20px",
    y: "60px",
  },
  {
    icon: "check",
    value: "100%",
    label: "Eco-friendly",
    mobileValue: "50+",
    mobileLabel: "Rides today",
    delay: "400ms",
    x: "-40px",
    y: "50px",
  },
  {
    icon: "fare",
    value: "NPR 50",
    label: "Starting fare",
    mobileValue: "NRP 50",
    mobileLabel: "Starting Price",
    delay: "600ms",
    x: "10px",
    y: "-30px",
  },
];

function BikeRide() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Bike Rides"
      intro="Travel fast through traffic with affordable bike rides and trusted local riders."
      icon="bike"
      image={bikeServiceImage}
      stats={bikeStats}
      // leftContent={<BikeRideAnimation />}
      leftContent={<SeviceLeftV1 type="bike" />}
      features={[]}
      pageClassName="ride-service-page bike-service-page"
    />
  );
}

export default BikeRide;
