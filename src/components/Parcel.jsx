import ServicePage from "./ServicePage";
import ParcelAnimation from "./ParcelAnimation";
import PackageJourney from "./PackageJourney";

function Parcel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Parcel Delivery"
      intro=""
      icon="parcel"
      image={<PackageJourney />}
      stats={[]}
      leftContent={<ParcelAnimation />}
      features={[]}
    />
  );
}

export default Parcel;
