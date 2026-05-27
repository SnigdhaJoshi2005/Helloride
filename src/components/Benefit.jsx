import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const benefits = [
  {
    number: '01.',
    title: 'For Every Journey',
    text: "Quick city rides or long trips, we've got you covered.",
  },
  {
    number: '02.',
    title: 'More Than Rides',
    text: 'Rent vehicles, hire drivers, or send parcels, all in one place.',
  },
  {
    number: '03.',
    title: 'Ride Your Way',
    text: 'Switch between instant booking or price negotiation, choose your way, every time.',
  },
  {
    number: '04.',
    title: 'All-in-One App',
    text: 'From daily rides to long trips and driver hire, everything you need in one app.',
  },
  {
    number: '05.',
    title: 'Clear Pricing',
    text: 'No hidden charges, see your fare upfront before you book.',
  },
  {
    number: '06.',
    title: 'Verified Drivers',
    text: 'Every driver is checked and trusted for a safer ride experience.',
  },
]

const benefitPath =
  'M82 66 C82 180 478 190 478 280 C478 370 82 460 82 540 C82 640 478 650 478 740 C478 820 82 900 82 990 C82 1060 478 1100 478 1180'

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function BenefitCard({ benefit, index }) {
  return (
    <motion.article
      className={`benefit-card benefit-card-${index + 1}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <span>{benefit.number}</span>
      <div>
        <h3>{benefit.title}</h3>
        <p>{benefit.text}</p>
      </div>
    </motion.article>
  )
}

function Benefit() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 })

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className={`benefit-section ${isInView ? 'is-visible' : ''}`}
    >
      <h2>
        HELLO<span>RIDE</span> BENEFITS
      </h2>

      <div className="benefit-roadmap">
        <svg
          className="benefit-path"
          viewBox="0 0 560 1280"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path d={benefitPath} pathLength="1000" />
        </svg>

        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.number} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Benefit

