import "./App.css";
import { useEffect, useState } from "react";
import { blogPosts } from "./components/Blog";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Benefit from "./components/Benefit";
import Partner from "./components/Partner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Help from "./components/Help";
import EarnBike from "./components/EarnBike";
import EarnCar from "./components/EarnCar";
import CarRide from "./components/CarRide";
import BikeRide from "./components/BikeRide";
import Parcel from "./components/Parcel";
import Food from "./components/Food";
import Travel from "./components/Travel";
import Hotel from "./components/Hotel";
import PackageJourney from "./components/PackageJourney";
import Blog from "./components/Blog";
import Header from "./components/Header";

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

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      ↑
    </button>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <BackToTopButton />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HowItWorks />
              <Benefit />
              <Partner />
              <section className="home-community-section">
                <h2>Join Our Community</h2>
                <Form />
              </section>

              <section className="blog-home-section">
                <h2 className="blog-home-section-heading">
                  More About HelloRide
                </h2>
                <Link to="/blog" className="view-all-btn">
                  View All Posts <span>→</span>
                </Link>

                <div className="blog-grid">
                  {blogPosts.slice(0, 3).map((post) => (
                    <article key={post.id} className="blog-card">
                      <div className="blog-image-wrapper">
                        <img src={post.image} alt={post.title} />
                        <span className="blog-category">{post.category}</span>
                      </div>

                      <div className="blog-content">
                        <span className="blog-date">{post.date}</span>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              <Footer />
            </>
          }
        />

        <Route path="/help" element={<>
        <Help />
        <Footer /></>} />
        <Route path="/Help" element={<>
        <Help />
        <Footer /></>} />
        <Route path="/earn/bike" element={<>
        <EarnBike />
        <Footer /></>} />
        <Route path="/earn/car" element={<>
        <EarnCar />
        <Footer /></>} />
        <Route path="/services/car" element={<CarRide />} />
        <Route path="/services/bike" element={<BikeRide />} />
        <Route path="/services/parcel" element={<Parcel />} />
        <Route path="/services/food" element={<Food />} />
        <Route path="/services/travel" element={<Travel />} />
        <Route path="/services/hotel" element={<Hotel />} />
        <Route path="/car-rides" element={<CarRide />} />
        <Route path="/bike-rides" element={<BikeRide />} />
        <Route path="/parcel" element={<Parcel />} />
        <Route path="/food" element={<Food />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/hotel" element={<Hotel />} />

        <Route
          path="/Blog"
          element={
            <>
              <Header />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Header />
              <BlogDetail />{" "}
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
