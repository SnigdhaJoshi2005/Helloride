import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logoo.png'
import StoreIcon from './StoreIcon'

function FooterDownload({ type }) {
  return (
    <a className="footer-download" href={`#download-${type}`}>
      <StoreIcon type={type} />
      <span>DOWNLOAD</span>
    </a>
  )
}

function Footer() {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${isVisible ? 'is-visible' : ''}`}
      id="help-center"
    >
      <div className="footer-brand">
        <img src={logo} alt="HelloRide" />
        <div className="footer-socials" aria-label="Contact links">
          <a className="social-icon-wrap" href="tel:" aria-label="Call HelloRide">
            <span className="social-icon-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </span>
            <span className="social-label">Call</span>
          </a>
          <a className="social-icon-wrap" href="#instagram" aria-label="Instagram">
            <span className="social-icon-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </span>
            <span className="social-label">Instagram</span>
          </a>
          <a className="social-icon-wrap" href="mailto:" aria-label="Email HelloRide">
            <span className="social-icon-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            <span className="social-label">Email</span>
          </a>
        </div>
      </div>

      <div className="footer-downloads" aria-label="Download HelloRide">
        <FooterDownload type="play" />
        <FooterDownload type="apple" />
      </div>

      <form className="footer-form">
        <h2>Join the HelloRide Network</h2>
        <label className="float-label">
          <input type="text" name="name" placeholder=" " />
          <span>Your Full Name</span>
        </label>
        <label className="float-label">
          <input type="tel" name="phone" placeholder=" " />
          <span>Phone Number</span>
        </label>
        <label className="float-label float-label--textarea">
          <textarea name="message" rows="4" placeholder=" " />
          <span>Your Message</span>
        </label>
        <button type="submit">
          Send Message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </footer>
  )
}

export default Footer