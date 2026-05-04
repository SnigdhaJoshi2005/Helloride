import ServicePage from "./ServicePage";
import bikeServiceImage from "../assets/bike illustration.jpg";

function BikeRide() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Bike Rides"
      intro="Quick, affordable, and eco-friendly bike rides for navigating through traffic with ease."
      icon="bike"
      image={bikeServiceImage}
      features={[
        {
          icon: "route",
          title: "Fastest Route",
          desc: "Beat traffic and reach faster",
        },
        {
          icon: "money",
          title: "Most Affordable",
          desc: "Starting from NPR 50",
        },
        {
          icon: "shield",
          title: "Verified Riders",
          desc: "All riders are background-checked",
        },
      ]}
    />
  );
}

export default BikeRide;
