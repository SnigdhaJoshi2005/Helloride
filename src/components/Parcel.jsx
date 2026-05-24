import ServicePage from "./ServicePage";
import ParcelAnimation from "./ParcelAnimation";
import Parcel3DScene from "./Parcel3DScene";

function Parcel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Parcel Delivery"
      intro=""
      icon="parcel"
      image={<Parcel3DScene />}
      stats={[]}
      leftContent={<ParcelAnimation />}
      features={[]}
      pageClassName="parcel-service-page"
    />
  );
}

export default Parcel;
