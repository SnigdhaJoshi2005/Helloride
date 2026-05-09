import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.png";
import ServiceIcon from "./ServiceIcon";

const serviceItems = [
  {
    title: "Bike",
    desc: "Travel fast and cheaper.",
    path: "/services/bike",
    icon: "bike",
  },
  {
    title: "Car",
    desc: "Travel in comfort.",
    path: "/services/car",
    icon: "car",
  },
  {
    title: "Food",
    desc: "Order and eat from home.",
    path: "/services/food",
    icon: "food",
  },
  {
    title: "Parcel",
    desc: "Deliver fast and easy.",
    path: "/services/parcel",
    icon: "parcel",
  },
];

const earnItems = [
  {
    title: "Earn with Bike",
    path: "/earn/bike",
    icon: "bike",
  },
  {
    title: "Earn with Car",
    path: "/earn/car",
    icon: "car",
  },
];

function DropdownIcon({ type }) {
  return <ServiceIcon name={type} />;
}

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu((currentMenu) => (currentMenu === menuName ? null : menuName));
  };

  const closeNavigation = () => {
    setOpenMenu(null);
    setIsMobileNavOpen(false);
  };

  return (
    <header className={`site-header ${isMobileNavOpen ? "nav-is-open" : ""}`} ref={headerRef}>
      <Link className="brand-logo" to="/">
        <img src={logo} alt="HelloRide" />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileNavOpen}
        aria-controls="primary-navigation"
        onClick={() => {
          setIsMobileNavOpen((isOpen) => !isOpen);
          setOpenMenu(null);
        }}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav className="main-nav" id="primary-navigation" aria-label="Primary navigation">
        <Link to="/" onClick={closeNavigation}>Home</Link>

        <div className="nav-dropdown nav-services-dropdown">
          <button
            className="nav-dropdown-trigger"
            type="button"
            aria-haspopup="true"
            aria-expanded={openMenu === "services"}
            onClick={() => toggleMenu("services")}
          >
            Services
            <span aria-hidden="true">v</span>
          </button>

          {openMenu === "services" && (
            <div className="dropdown-panel services-dropdown-menu">
              <p className="dropdown-panel-label"></p>
              <div className="dropdown-card-grid">
                {serviceItems.map((item) => (
                  <Link className="dropdown-card" key={item.title} to={item.path} onClick={closeNavigation}>
                    <span className="dropdown-card-icon">
                      <DropdownIcon type={item.icon} />
                    </span>
                    <strong>{item.title}</strong>
                    <small>{item.desc}</small>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="nav-dropdown">
          <button
            className="nav-dropdown-trigger"
            type="button"
            aria-haspopup="true"
            aria-expanded={openMenu === "earn"}
            onClick={() => toggleMenu("earn")}
          >
            Earn with us
            <span aria-hidden="true">v</span>
          </button>

          {openMenu === "earn" && (
            <div className="dropdown-panel earn-dropdown-menu">
              <p className="dropdown-panel-label"></p>
              <div className="earn-option-list">
                {earnItems.map((item) => (
                  <Link className="earn-option-card" key={item.title} to={item.path} onClick={closeNavigation}>
                    <span className="earn-option-icon">
                      <DropdownIcon type={item.icon} />
                    </span>
                    {item.title}
                  </Link>
                ))}
                <Link className="earn-drive-button" to="/earn/bike" onClick={closeNavigation}>
                  Download HelloRide Drive App
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link to="/#how-it-works" onClick={closeNavigation}>How It Works</Link>
        <Link to="/#benefits" onClick={closeNavigation}>Benefits</Link>
        <Link className="help-button" to="/help" onClick={closeNavigation}>
          Help Center
        </Link>
      </nav>
    </header>
  );
}

export default Header;
