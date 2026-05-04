import ServicePage from "./ServicePage";
import foodServiceImage from "../assets/service-food.png";

function Food() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Food Delivery"
      intro="Delicious meals delivered hot and fresh from your favorite restaurants right to your door."
      icon="FOOD"
      image={foodServiceImage}
      features={[
        {
          icon: "30",
          title: "Quick Delivery",
          desc: "Get your food in 30 minutes or less",
        },
        {
          icon: "HOT",
          title: "Hot & Fresh",
          desc: "Temperature-controlled delivery",
        },
        {
          icon: "GPS",
          title: "Real-time Tracking",
          desc: "Track your order every step",
        },
      ]}
    />
  );
}

export default Food;
