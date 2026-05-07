import ServicePage from "./ServicePage";
import PackageJourney from "./PackageJourney";

function Parcel() {
  return (
    <ServicePage
      pageClassName="parcel-service-page"
      accent="#ffe100"
      background="#fff"
      title="Parcel Delivery"
      intro="Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service."
      icon="parcel"
      image={<PackageJourney />}
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
