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
    <>
      <section className="partner-section" id="partners">
        <div className="partner-intro">
          <h2>Our Partners</h2>
          <p>Driving growth through trusted ride partnerships</p>
        </div>

        <div className="partner-marquees">
          <PartnerRow direction="right" />
          <PartnerRow direction="left" />
        </div>
      </section>

      <section className="join-network-section" aria-labelledby="join-network-title">
        <div className="join-network-copy">
          <h2 id="join-network-title">Join the HelloRide Network</h2>
          <p>Partner with us for rides, deliveries, driver programs, and local growth.</p>
        </div>

        <form className="join-network-form">
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
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  )
}

export default Partner
