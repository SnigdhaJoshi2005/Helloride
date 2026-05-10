import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Benefit from './components/Benefit';
import Partner from './components/Partner';
import Form from './components/Form';
import Footer from './components/Footer';
import Help from './components/Help';
import EarnBike from './components/EarnBike';
import EarnCar from './components/EarnCar';
import CarRide from './components/CarRide';
import BikeRide from './components/BikeRide';
import Parcel from './components/Parcel';
import Food from './components/Food';
import PackageJourney from './components/PackageJourney';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    requestAnimationFrame(() => {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <HowItWorks />
              <Benefit />
              <Partner />
              <section className="earn-form-section community-section">
                <h2 className="earn-form-heading">Join our community</h2>
                <div className="community-form-layout">
                  <Form />
                  <div className="community-tracker">
                    <PackageJourney />
                  </div>
                </div>
              </section>
              <Footer />
            </>
          }
        />


        <Route path="/help" element={<Help />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/earn/bike" element={<EarnBike />} />
        <Route path="/earn/car" element={<EarnCar />} />
        <Route path="/services/car" element={<CarRide />} />
        <Route path="/services/bike" element={<BikeRide />} />
        <Route path="/services/parcel" element={<Parcel />} />
        <Route path="/services/food" element={<Food />} />
        <Route path="/car-rides" element={<CarRide />} />
        <Route path="/bike-rides" element={<BikeRide />} />
        <Route path="/parcel" element={<Parcel />} />
        <Route path="/food" element={<Food />} />

      </Routes>
    </Router>
  );
}

export default App;
