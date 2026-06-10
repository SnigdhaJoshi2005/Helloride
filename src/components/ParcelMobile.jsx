import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ServiceIcon from './ServiceIcon';
import Parcel3DScene from './Parcel3DScene';
import { FiPackage, FiMapPin, FiTruck, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const stats = [
  { value: '10K+', label: 'Deliveries', icon: 'check' },
  { value: '4.9', label: 'Rating', icon: 'star' },
  { value: '98%', label: 'On-Time', icon: 'bolt' },
  { value: 'Nationwide', label: 'Coverage', icon: 'gps' },
];

const featureCards = [
  { title: 'Same-Day Delivery', desc: 'Express delivery within the city', icon: 'bolt' },
  { title: 'Secure Handling', desc: 'Your parcels are in safe hands', icon: 'shield' },
  { title: 'Door-to-Door', desc: 'Pickup and drop at your location', icon: 'door' },
  { title: 'Real-Time Tracking', desc: 'Track your parcel every step of the way', icon: 'gps' },
  { title: 'Package Insurance', desc: 'Full coverage for valuable items', icon: 'lock' },
];

const timelineSteps = [
  { icon: FiPackage, label: 'Book' },
  { icon: FiMapPin, label: 'Pickup' },
  { icon: FiTruck, label: 'In Transit' },
  { icon: FiCheckCircle, label: 'Delivered' },
];

function ParcelMobile() {
  return (
    <main className="parcel-mobile-shell">
      <Header />

      <div className="parcel-m-bg" aria-hidden="true" />

      <section className="parcel-m-hero">
        <div className="parcel-m-hero-text">
          <motion.div
            className="parcel-m-title-row"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="parcel-m-icon">
              <ServiceIcon name="parcel" />
            </span>
            <h1>Parcel Delivery</h1>
          </motion.div>
          <motion.p
            className="parcel-m-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service.
          </motion.p>
        </div>

        <motion.div
          className="parcel-m-3d-area is-active"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          <div className="parcel-m-scene-wrap">
            <Parcel3DScene cameraZ={10} />
          </div>
        </motion.div>

        <motion.div
          className="parcel-m-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="parcel-m-stat-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.07, duration: 0.35 }}
            >
              <span className="parcel-m-stat-icon">
                <ServiceIcon name={stat.icon} />
              </span>
              <div className="parcel-m-stat-info">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="parcel-m-section parcel-m-timeline-section">
        <motion.h2
          className="parcel-m-section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
        >
          How It Works
        </motion.h2>
        <div className="parcel-m-timeline">
          {timelineSteps.map((step, i) => (
            <div key={step.label} className="parcel-m-timeline-step-wrap">
              <motion.div
                className="parcel-m-timeline-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <span className="parcel-m-tl-icon">
                  <step.icon />
                </span>
                <span className="parcel-m-tl-label">{step.label}</span>
              </motion.div>
              {i < timelineSteps.length - 1 && (
                <div className="parcel-m-tl-connector">
                  <FiChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="parcel-m-section parcel-m-features-section">
        <motion.h2
          className="parcel-m-section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="parcel-m-features-grid">
          {featureCards.map((f, i) => (
            <motion.div
              key={f.title}
              className="parcel-m-feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="parcel-m-feature-icon">
                <ServiceIcon name={f.icon} />
              </span>
              <div>
                <strong>{f.title}</strong>
                <p>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ParcelMobile;
