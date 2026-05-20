import Header from "./Header";
import phoneMap from '../assets/phone-map.png';
import StoreIcon from './StoreIcon';
import { Link } from "react-router-dom";

function PhonePreview() {
  return (
    <section className="phone-preview">
      <img className="phone-map-image" src={phoneMap} alt="" />
    </section>
  );
}

function StoreButton({ type }) {
  return (
    <a className="store-button" href="#">
      <StoreIcon type={type} />
      <span>DOWNLOAD</span>
    </a>
  );
}

function Home() {
  return (
    <main>
      <Header />

      <section className="hero-section">
        <div className="hero-copy">
          <h1>Ride Anywhere in Nepal, Anytime.</h1>
          <p>
            From quick rides to long journeys, we make getting around simple,
            flexible, and reliable.
          </p>
          <Link className="earn-for-drivers" to="/earn/bike">
            Download for drivers
          </Link>
        </div>

        <div className="hero-download-showcase">
          <PhonePreview />
          <div className="download-actions">
            <StoreButton type="play" />
            <StoreButton type="apple" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
