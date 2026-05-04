import { useEffect, useRef, useState } from 'react'
import Header from './Header'
import ServiceIcon from './ServiceIcon'

function StatCard({ stat }) {
  return (
    <div
      className="stat-card"
      style={{
        '--stat-delay': stat.delay,
        '--stat-x': stat.x,
        '--stat-y': stat.y,
      }}
    >
      <span className="stat-icon">
        <ServiceIcon name={stat.icon} />
      </span>
      <div>
        <strong>{stat.value}</strong>
        <p>{stat.label}</p>
      </div>
    </div>
  )
}

function ServicePage({ accent, background, title, intro, icon, features, image, stats }) {
  const visualRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (visualRef.current) observer.observe(visualRef.current)

    return () => observer.disconnect()
  }, [])

  const defaultStats = [
    { icon: 'bolt', value: '2 min', label: 'Avg wait time', delay: '0ms', x: '-30px', y: '-20px' },
    { icon: 'star', value: '4.9', label: 'Driver rating', delay: '200ms', x: '20px', y: '60px' },
    { icon: 'check', value: '50+', label: 'Rides today', delay: '400ms', x: '-40px', y: '50px' },
    { icon: 'fare', value: 'NPR 50', label: 'Starting fare', delay: '600ms', x: '10px', y: '-30px' },
  ]

  const statCards = stats || defaultStats

  return (
    <main className="service-shell" style={{ '--service-accent': accent, '--service-bg': background }}>
      <Header />

      <section className="service-page">
        <div className="service-layout">
          <div className="service-copy">
            <div className="service-title-row">
              <span className="service-title-icon" aria-hidden="true">
                <ServiceIcon name={icon} />
              </span>
              <h1>{title}</h1>
            </div>

            <p className="service-intro">{intro}</p>

            <div className="service-feature-list">
              {features.map((feature) => (
                <article className="service-feature-card" key={feature.title}>
                  <span aria-hidden="true">
                    <ServiceIcon name={feature.icon} />
                  </span>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div ref={visualRef} className={`service-visual ${isVisible ? 'is-visible' : ''}`}>
            <div className="service-visual-inner">
              {typeof image === 'string' ? <img src={image} alt="" /> : image}

              {typeof image === 'string' &&
                statCards.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicePage
