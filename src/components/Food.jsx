import ServicePage from "./ServicePage";
import FoodAnimation from "./FoodAnimation";
import Stopwatch from './Stopwatch'
import SeviceLeftV1 from "./SeviceLeftV1";

function Food() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Food Delivery"
      intro="Get your favorite meals delivered quickly and safely to your doorstep."
      icon="food"
      image={<Stopwatch />}
      stats={[]}
      // leftContent={<FoodAnimation />}
      leftContent={<SeviceLeftV1 type="food" />}
      pageClassName="ride-service-page food-service-page"
      features={[]}
    />
  );
}

export default Food;
