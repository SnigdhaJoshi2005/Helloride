import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiClock, FiStar } from "react-icons/fi";
import mapImage from "../assets/map.png";

function RideMobileSummary() {
  return (
    <section className="ride-mobile-summary" aria-label="Ride estimate">
      <div className="ride-mobile-map" aria-hidden="true">
        <img src={mapImage} alt="" className="ride-mobile-map-img" />
      </div>

      <dl className="ride-mobile-facts">
        <div>
          <dt><span className="ride-fact-icon"><FiClock /></span> ETA</dt>
          <dd>6 min</dd>
        </div>
        <div>
          <dt><span className="ride-fact-icon"><FaIndianRupeeSign /></span> Est. Fare</dt>
          <dd><FaIndianRupeeSign className="ride-value-icon" /> 80</dd>
        </div>
        <div>
          <dt><span className="ride-fact-icon"><FiStar /></span> Rider Rating</dt>
          <dd>4.8 <FiStar className="ride-rating-star" /></dd>
        </div>
      </dl>
    </section>
  );
}

export default RideMobileSummary;
