import ServicePage from "./ServicePage";
import carServiceImage from "../assets/Car illustration.png";

function CarRide() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Car Rides"
      intro="Travel in comfort with air-conditioned cars and professional drivers for your premium journey."
      icon="car"
      image={carServiceImage}
      features={[
        {
          icon: "seat",
          title: "Comfortable Seating",
          desc: "Room for up to 4 passengers",
        },
        {
          icon: "gem",
          title: "Premium Service",
          desc: "Professional drivers & clean cars",
        },
        {
          icon: "snowflake",
          title: "AC Available",
          desc: "Stay cool in all weather",
        },
      ]}
    />
  );
}

export default CarRide;
