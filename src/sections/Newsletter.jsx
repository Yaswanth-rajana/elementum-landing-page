import { motion } from 'framer-motion'
import './Newsletter.css'

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-shape purple"></div>
      <div className="newsletter-container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="newsletter-heading-block">
            <div className="newsletter-decor" aria-hidden="true">
              <svg
                width="360"
                height="180"
                viewBox="0 0 360 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M130 0C122 18 106 30 84 40C54 54 30 72 44 118"
                  stroke="#FF7B7B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M36 107L44 118L54 108"
                  stroke="#FF7B7B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M236 0C228 18 212 30 190 40C160 54 136 72 150 118"
                  stroke="#FF7B7B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M142 107L150 118L160 108"
                  stroke="#FF7B7B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="newsletter-title">
              Subscribe to<br />
              our newsletter
            </h2>
          </div>
          <p className="newsletter-text">
            To make your stay special and even more memorable
          </p>
          
          <div className="newsletter-cta">
            <button type="button" className="newsletter-button">
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Divider */}
      <div className="newsletter-divider"></div>
    </section>
  )
}
