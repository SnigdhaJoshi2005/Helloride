import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.png";
import StoreIcon from "./StoreIcon";

function FooterDownload({ type }) {
  return (
    <a className="footer-download" href={`#download-${type}`}>
      <StoreIcon type={type} />
      <span>DOWNLOAD</span>
    </a>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a className="social-icon-wrap" href={href} aria-label={label}>
      <span className="social-icon-circle">{children}</span>
      <span className="social-label">{label}</span>
    </a>
  );
}

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${isVisible ? "is-visible" : ""}`}
      id="help-center"
    >
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link
              className="footer-brand-logo"
              to="/"
              aria-label="HelloRide home"
            >
              <img src={logo} alt="HelloRide" />
            </Link>
            <div className="footer-socials" aria-label="Social links">
              <SocialLink
                href="https://www.instagram.com/helloridenepal/"
                label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://mail.google.com/mail/u/4/#inbox"
                label="Email"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link to="/services/bike">Bike Rides</Link>
            <Link to="/services/car">Car Rides</Link>
            <Link to="/services/parcel">Parcel Delivery</Link>
            <Link to="/services/food">Food Delivery</Link>
          </nav>

          <address className="footer-contactus-block footer-contact">
            
            <h2>Contact Us</h2>
            <a href="tel:+9779812345678">+977-9812345678</a>
            <a href="https://mail.google.com/mail/u/4/#inbox">
              hello.ride7876@gmail.com
            </a>
            <span>Kathmandu, Nepal</span>
            <h2>Download</h2>
            <div className="footer-downloads" aria-label="Download HelloRide">
              <FooterDownload type="play" />
              <FooterDownload type="apple" />
            </div>
          </address>
        </div>

        <div className="footer-bottom">
          <span>(c) 2026 HelloRide. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
