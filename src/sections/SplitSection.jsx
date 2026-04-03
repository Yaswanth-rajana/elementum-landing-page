import { motion } from 'framer-motion'
import './SplitSection.css'

export function SplitSection({ title, description, imageSrc, reverse = false, variant = 'default' }) {
  const isFeatured = variant === 'featured'
  const isFeaturedProgress = variant === 'featured-progress'
  const isEditorial = isFeatured || isFeaturedProgress
  const imageAlt = typeof title === 'string' ? title : 'Section image'
  const sectionClassName = [
    'split-section',
    isEditorial ? 'split-section-featured' : '',
    isFeaturedProgress ? 'split-section-featured-progress' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClassName}>
      <div className="split-container section">
        <motion.div 
          className={`split-content ${reverse ? 'order-2' : 'order-1'}`}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isFeatured ? (
            <div className="split-title-featured" aria-label={typeof title === 'string' ? title : undefined}>
              <div className="split-title-row">
                <span className="split-title-underlined">
                  Tomorrow
                  <span className="split-title-stroke split-title-stroke-1" aria-hidden="true"></span>
                  <span className="split-title-stroke split-title-stroke-2" aria-hidden="true"></span>
                  <span className="split-title-stroke split-title-stroke-3" aria-hidden="true"></span>
                </span>
                <span className="split-title-should">should</span>
              </div>
              <div className="split-title-row">
                <span>be better than</span>
                <span className="split-title-highlight">today</span>
              </div>
            </div>
          ) : isFeaturedProgress ? (
            <div className="split-title-featured split-title-featured-progress" aria-label={typeof title === 'string' ? title : undefined}>
              <div className="split-title-row split-title-row-progress-top">
                <span className="split-title-highlight split-title-highlight-leading">See</span>
                <span>how we can</span>
              </div>
              <div className="split-title-row split-title-row-progress-bottom">
                <span>help you</span>
                <span className="split-title-underlined split-title-underlined-progress">
                  progress
                  <span className="split-title-stroke split-title-stroke-progress-1" aria-hidden="true"></span>
                  <span className="split-title-stroke split-title-stroke-progress-2" aria-hidden="true"></span>
                  <span className="split-title-stroke split-title-stroke-progress-3" aria-hidden="true"></span>
                </span>
              </div>
            </div>
          ) : (
            <h2 className="split-title">{title}</h2>
          )}

          <p className={`split-description ${isEditorial ? 'split-description-featured' : ''}`}>
            {description}
          </p>

          {isEditorial ? (
            <a href="#" className="split-link split-link-featured">
              <span>Read more</span>
              <span className="split-link-line" aria-hidden="true"></span>
            </a>
          ) : (
            <a href="#" className="split-link">Read more →</a>
          )}
        </motion.div>
        
        <motion.div 
          className={`split-image ${reverse ? 'order-1' : 'order-2'} ${isFeatured ? 'split-image-featured-accent' : ''} ${isFeaturedProgress ? 'split-image-featured-progress' : ''}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isFeatured ? <span className="image-accent-shape" aria-hidden="true"></span> : null}
          {isFeaturedProgress ? (
            <>
              <span className="image-progress-shape image-progress-shape-top" aria-hidden="true"></span>
              <span className="image-progress-shape image-progress-shape-bottom" aria-hidden="true"></span>
            </>
          ) : null}
          <div className="image-circle">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
