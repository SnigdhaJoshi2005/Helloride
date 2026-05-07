const partners = Array.from({ length: 8 }, (_, index) => `Partner ${index + 1}`)

function PartnerRow({ direction }) {
  const items = [...partners, ...partners]

  return (
    <div className={`partner-row partner-row-${direction}`} aria-hidden="true">
      <div className="partner-track">
        {items.map((item, index) => (
          <div className="partner-pill" key={`${item}-${index}`} />
        ))}
      </div>
    </div>
  )
}

function Partner() {
  return (
    <section className="partner-section" id="partners">
      <div className="partner-intro">
        <h2>Our Partners</h2>
        <p>Driving growth through trusted ride partnerships</p>
      </div>

      <div className="partner-marquees">
        <PartnerRow direction="right" />
        <PartnerRow direction="left" />
      </div>
      <h2 className="earn-form-heading">Join our community</h2>
    </section>
  )
  
}

export default Partner
