import ServicePage from "./ServicePage";
import parcelServiceImage from "../assets/service-parcel.png";

function Parcel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Parcel Delivery"
      intro="Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service."
      icon="BOX"
      image={parcelServiceImage}
      features={[
        {
          icon: "DAY",
          title: "Same-Day Delivery",
          desc: "Express delivery within the city",
        },
        {
          icon: "SAFE",
          title: "Secure Handling",
          desc: "Your parcels are in safe hands",
        },
        {
          icon: "PIN",
          title: "Door-to-Door",
          desc: "Pickup and delivery at your location",
        },
      ]}
    />
  );
}

export default Parcel;
