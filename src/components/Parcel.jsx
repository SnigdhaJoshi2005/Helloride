import ServicePage from "./ServicePage";
import ParcelAnimation from "./ParcelAnimation";
import Parcel3DScene from "./Parcel3DScene";
import SeviceLeftV1 from "./SeviceLeftV1";

function Parcel() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Parcel Delivery"
      intro="Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service."
      icon="parcel"
      image={<Parcel3DScene />}
      stats={[]}
      // leftContent={<ParcelAnimation />}
      leftContent={<SeviceLeftV1 type="parcel" />}
      features={[]}
      pageClassName="parcel-service-page"
    />
  );
}

export default Parcel;
