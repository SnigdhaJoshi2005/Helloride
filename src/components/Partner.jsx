import { useEffect, useRef, useState } from "react"
import atsLogo from "../assets/ats.png"
import attLogo from "../assets/att.jpeg"
import bthLogo from "../assets/bth.jpg"

const partners = [
  { name: "ATS", image: atsLogo },
  { name: "ATT", image: attLogo },
  { name: "BTH", image: bthLogo },
]

function PartnerRow({ direction }) {
  const items = [...partners, ...partners]

  return (
    <div className={`partner-row partner-row-${direction}`} aria-hidden="true">
      <div className="partner-track">
        {items.map((item, index) => (
          <div className="partner-pill" key={`${item.name}-${index}`}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Partner() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`partner-section ${isVisible ? 'is-visible' : ''}`} id="partners">
      <div className="partner-intro">
        <h2>Our Partners</h2>
        <p>Driving growth through trusted ride partnerships</p>
      </div>

      <div className="partner-marquees">
        <PartnerRow direction="right" />
        <PartnerRow direction="left" />
      </div>
    </section>
  )
  
}

export default Partner
