import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logoo.png";
import ServiceIcon from "./ServiceIcon";
import { IoIosArrowDown } from "react-icons/io";

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
  {
    title: "Travel",
    desc: "Plan trips with ease.",
    path: "/services/travel",
    icon: "travel",
  },
  {
    title: "Hotel",
    desc: "Book comfortable stays.",
    path: "/services/hotel",
    icon: "hotel",
  },
];

const earnItems = [
  {
    title: "Earn with Bike",
    desc: "Start earning by riding your bike.",
    path: "/earn/bike",
    icon: "bike",
  },
  {
    title: "Earn with Car",
    desc: "Drive and earn on your schedule.",
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
  const mfnRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      const inHeader = headerRef.current && headerRef.current.contains(event.target);
      const inMfn = mfnRef.current && mfnRef.current.contains(event.target);
      if (!inHeader && !inMfn) {
        setOpenMenu(null);
        setIsMobileNavOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  const toggleMenu = (menuName) => {
    setOpenMenu((currentMenu) => (currentMenu === menuName ? null : menuName));
  };

  const closeNavigation = () => {
    setOpenMenu(null);
    setIsMobileNavOpen(false);
  };

  function NavContent() {
    return (
      <>
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
            <span aria-hidden="true"><IoIosArrowDown size={22} /></span>
          </button>
          <AnimatePresence initial={false}>
            {openMenu === "services" && (
              <motion.div
                className="dropdown-panel services-dropdown-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="dropdown-card-grid">
                  {serviceItems.map((item) => (
                    <Link className="dropdown-card" key={item.title} to={item.path} onClick={closeNavigation}>
                      <span className="dropdown-card-icon"><DropdownIcon type={item.icon} /></span>
                      <span className="dropdown-card-title">{item.title}</span>
                      <span className="dropdown-card-desc">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            <span aria-hidden="true"><IoIosArrowDown size={22} /></span>
          </button>
          <AnimatePresence initial={false}>
            {openMenu === "earn" && (
              <motion.div
                className="dropdown-panel earn-dropdown-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="earn-option-list">
                  {earnItems.map((item) => (
                    <Link className="earn-option-card" key={item.title} to={item.path} onClick={closeNavigation}>
                      <span className="earn-option-icon"><DropdownIcon type={item.icon} /></span>
                      <span className="earn-option-text">
                        <span className="earn-option-title">{item.title}</span>
                        <span className="earn-option-desc">{item.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link to="/Blog" onClick={closeNavigation}>Blogs</Link>
        <Link className="help-button" to="/help" onClick={closeNavigation}>Help Center</Link>
      </>
    );
  }

  return (
    <>
      <header className={`site-header ${isMobileNavOpen ? "nav-is-open" : ""}`} ref={headerRef}>
        <Link className="brand-logo" to="/">
          <img src={logo} alt="HelloRide" />
        </Link>
        <a className="mobile-download-button" href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
          Download App
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-fullscreen-nav"
          onClick={() => {
            setIsMobileNavOpen((isOpen) => !isOpen);
            setOpenMenu(null);
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav className="main-nav desktop-nav" id="primary-navigation" aria-label="Primary navigation">
          <NavContent />
        </nav>
      </header>

      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            className="mobile-nav-fullscreen"
            id="mobile-fullscreen-nav"
            ref={mfnRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mfn-bg" aria-hidden="true" />

            <div className="mfn-top-bar">
              <Link className="mfn-logo" to="/" onClick={closeNavigation}>
                <img src={logo} alt="HelloRide" />
              </Link>
              <button
                className="mfn-close-btn"
                type="button"
                aria-label="Close navigation menu"
                onClick={closeNavigation}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="mfn-body">
              <div className="mfn-intro">
                <p className="mfn-tagline">Reliable Delivery Solutions Across Nepal</p>
              </div>

              <nav className="mfn-links">
                <Link className="mfn-link" to="/" onClick={closeNavigation}>
                  <span className="mfn-link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                  Home
                </Link>

                <div className="mfn-accordion">
                  <button
                    className="mfn-accordion-trigger"
                    type="button"
                    aria-expanded={openMenu === "services"}
                    onClick={() => toggleMenu("services")}
                  >
                    <span className="mfn-trigger-label">
                      <span className="mfn-link-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </span>
                      Services
                    </span>
                    <span className="mfn-trigger-arrow" aria-hidden="true"><IoIosArrowDown size={20} /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openMenu === "services" && (
                      <motion.div
                        className="mfn-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        {serviceItems.map((item) => (
                          <Link className="mfn-submenu-item" key={item.title} to={item.path} onClick={closeNavigation}>
                            <span className="mfn-submenu-icon"><DropdownIcon type={item.icon} /></span>
                            <span className="mfn-submenu-text">
                              <span className="mfn-submenu-title">{item.title}</span>
                              <span className="mfn-submenu-desc">{item.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mfn-accordion">
                  <button
                    className="mfn-accordion-trigger"
                    type="button"
                    aria-expanded={openMenu === "earn"}
                    onClick={() => toggleMenu("earn")}
                  >
                    <span className="mfn-trigger-label">
                      <span className="mfn-link-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </span>
                      Earn with us
                    </span>
                    <span className="mfn-trigger-arrow" aria-hidden="true"><IoIosArrowDown size={20} /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openMenu === "earn" && (
                      <motion.div
                        className="mfn-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        {earnItems.map((item) => (
                          <Link className="mfn-submenu-item" key={item.title} to={item.path} onClick={closeNavigation}>
                            <span className="mfn-submenu-icon"><DropdownIcon type={item.icon} /></span>
                            <span className="mfn-submenu-text">
                              <span className="mfn-submenu-title">{item.title}</span>
                              <span className="mfn-submenu-desc">{item.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link className="mfn-link" to="/Blog" onClick={closeNavigation}>
                  <span className="mfn-link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9h7" />
                      <polyline points="14 2 14 9 20 9" />
                    </svg>
                  </span>
                  Blogs
                </Link>
                <Link className="mfn-link" to="/help" onClick={closeNavigation}>
                  <span className="mfn-link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </span>
                  Help Center
                </Link>
              </nav>
            </div>

            <div className="mfn-bottom">
              <p className="mfn-bottom-label">Follow us</p>
              <div className="mfn-social">
                <a
                  className="mfn-social-link"
                  href="https://www.instagram.com/helloridenepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
                <a
                  className="mfn-social-link"
                  href="mailto:hello.ride7876@gmail.com"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
