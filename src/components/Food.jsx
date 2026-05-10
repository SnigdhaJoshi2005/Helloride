import ServicePage from "./ServicePage";
import FoodAnimation from "./FoodAnimation";
import Stopwatch from './Stopwatch'

function Food() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Food Delivery"
      intro=""
      icon="food"
      image={<Stopwatch />}
      stats={[]}
      leftContent={<FoodAnimation />}
      features={[]}
    />
  );
}

export default Food;
