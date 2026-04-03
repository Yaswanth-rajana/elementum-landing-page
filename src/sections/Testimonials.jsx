import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonial = {
  text: "Elementum delivered the site within the timeline exactly as requested. In the end, the client saw a 50% increase in traffic within days of launch. They also brought an impressive ability to work with technologies the company had not used before, and made them feel intuitive, reliable, and easy to adopt."
}

const floatingAvatars = [
  {
    className: 'avatar avatar1',
    src: 'public/Ellipse 263 (1).png',
    alt: 'Top left avatar'
  },
  {
    className: 'avatar avatar2',
    src: 'public/Ellipse 266.png',
    alt: 'Middle left small avatar'
  },
  {
    className: 'avatar avatar3',
    src: 'public/Ellipse 268.png',
    alt: 'Main left large avatar'
  },
  {
    className: 'avatar avatar4',
    src: 'public/Ellipse 267.png',
    alt: 'Bottom left avatar'
  },
  {
    className: 'avatar avatar5',
    src: 'public/Ellipse 270.png',
    alt: 'Top right avatar'
  },
  {
    className: 'avatar avatar6',
    src: 'public/Ellipse 264.png',
    alt: 'Upper middle right small avatar'
  },
  {
    className: 'avatar avatar7',
    src: 'public/Ellipse 265.png',
    alt: 'Middle right medium avatar'
  },
  {
    className: 'avatar avatar8',
    src: 'public/Ellipse 269.png',
    alt: 'Bottom right large avatar'
  }
]

export function Testimonials() {
  return (
    <section className="testimonials testimonial-section" id="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="testimonial-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {floatingAvatars.map((avatar) => (
            <img
              key={avatar.className}
              className={avatar.className}
              src={avatar.src}
              alt={avatar.alt}
            />
          ))}

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
