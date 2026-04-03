import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonial = {
  text: "Elementum delivered the site within the timeline exactly as requested. In the end, the client saw a 50% increase in traffic within days of launch. They also brought an impressive ability to work with technologies the company had not used before, and made them feel intuitive, reliable, and easy to adopt."
}

const floatingAvatars = [
  {
    className: 'avatar avatar1',
    src: '/Ellipse 263 (1).png'
  },
  {
    className: 'avatar avatar2',
    src: '/Ellipse 266.png'
  },
  {
    className: 'avatar avatar3',
    src: '/Ellipse 268.png'
  },
  {
    className: 'avatar avatar4',
    src: '/Ellipse 267.png'
  },
  {
    className: 'avatar avatar5',
    src: '/Ellipse 270.png'
  },
  {
    className: 'avatar avatar6',
    src: '/Ellipse 264.png'
  },
  {
    className: 'avatar avatar7',
    src: '/Ellipse 265.png'
  },
  {
    className: 'avatar avatar8',
    src: '/Ellipse 269.png'
  }
]

export function Testimonials() {
  return (
    <section className="testimonials testimonial-section" id="testimonials">
      <div className="testimonials-container section">
        <motion.div
          className="testimonial-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="floating-images" aria-hidden="true">
            {floatingAvatars.map((avatar) => (
              <img
                key={avatar.className}
                className={avatar.className}
                src={avatar.src}
                alt=""
              />
            ))}
          </div>

          <div className="testimonial-main">
            <h2 className="heading">
              <span className="highlight">What</span> our customer <br />
              says{' '}
              <span className="underline">
                <span className="underline-text">About Us</span>
                <span className="underline-stroke underline-stroke-1" aria-hidden="true"></span>
                <span className="underline-stroke underline-stroke-2" aria-hidden="true"></span>
                <span className="underline-stroke underline-stroke-3" aria-hidden="true"></span>
              </span>
            </h2>

            <div className="testimonial-card">
              <span className="quote-left">“</span>

              <p className="testimonial-text">{testimonial.text}</p>
              <span className="quote-right">”</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
