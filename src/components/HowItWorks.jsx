import { useEffect, useRef, useState } from 'react'
import phoneScreen from '../assets/how-phone-screen.png'
import logo from '../assets/logoo.png'

const steps = [
  {
    title: 'Enter Your Location',
    text: 'Choose your pickup point and destination on the map or search bar.',
  },
  {
    title: 'Choose Your Ride',
    text: 'Select the ride type that fits your needs and see the estimated fare.',
  },
  {
    title: 'Confirm Booking',
    text: 'Review your trip details and tap Confirm Ride to request a driver.',
  },
  {
    title: 'Enjoy Your Ride',
    text: 'Track your driver in real-time and enjoy a safe, comfortable journey.',
  },
]

function StepItem({ step, index }) {
  return (
    <li className={`work-step step-card step-card-${index + 1}`}>
      <span className="step-number">{index + 1}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </li>
  )
}

function HowItWorks() {
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
      { threshold: 0.25 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`how-section reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="how-intro">
        <h2>
          HOW HELLO<span>RIDE</span> WORKS
        </h2>
        <p>
          Download and install the HelloRide app. Enter your phone number and
          make your user account, when approved you may choose one of the two
          option.
        </p>
      </div>

      <div className="how-stage">
        <ol className="work-steps" aria-label="How HelloRide works steps">
          {steps.map((step, index) => (
            <StepItem key={step.title} step={step} index={index} />
          ))}
        </ol>

        <div className="how-phone" aria-hidden="true">
          <div className="how-speaker" />
          <div className="how-screen">
            <img className="how-logo" src={logo} alt="" />
            <ol className="phone-steps">
              {steps.map((step, index) => (
                <li className={`phone-step phone-step-${index + 1}`} key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <img className="how-phone-screen-image" src={phoneScreen} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
