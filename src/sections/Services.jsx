import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    description: ['Office of multiple', 'interest content'],
    title: 'Collaborative & partnership',
  },
  {
    description: ['The hanger US Air force', 'digital experimental'],
    title: 'We talk about our weight',
  },
  {
    description: ['Delta faucet content,', 'social, digital'],
    title: 'Piloting digital confidence',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function ServiceRow({ description, title }) {
  return (
    <motion.div className="service-row" variants={itemVariants}>
      <div className="service-desc">
        {description.map((line) => (
          <span key={line} className="service-desc-line">{line}</span>
        ))}
      </div>

      <div className="service-title-wrap">
        <span className="service-title">{title}</span>
      </div>

      <span className="service-arrow" aria-hidden="true"></span>
    </motion.div>
  )
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-intro">
          <div className="services-copy">
            <h2 className="services-heading">
              <span className="services-heading-line">
                What we <span className="services-highlight">can</span>
              </span>
              <span className="services-heading-line services-heading-line-bottom">
                <span className="services-offer">
                  offer
                  <span className="services-underline" aria-hidden="true"></span>
                </span>{' '}
                you!
              </span>
            </h2>
          </div>

          <div className="services-graphic" aria-hidden="true">
            <img className="services-curve" src="/Vector 2516.png" alt="" />
          </div>
        </div>

        <motion.div
          className="services-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceRow
              key={index}
              description={service.description}
              title={service.title}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
