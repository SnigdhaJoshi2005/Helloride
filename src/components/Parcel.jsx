import ServicePage from "./ServicePage";
import DeliveryAnimation from "./DeliveryAnimation";

function Parcel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Parcel Delivery"
      intro="Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service."
      icon="parcel"
      image={<DeliveryAnimation />}
      features={[
        {
          icon: "calendar",
          title: "Same-Day Delivery",
          desc: "Express delivery within the city",
        },
        {
          icon: "lock",
          title: "Secure Handling",
          desc: "Your parcels are in safe hands",
        },
        {
          icon: "door",
          title: "Door-to-Door",
          desc: "Pickup and delivery at your location",
        },
      ]}
    />
  );
}

export default Parcel;
