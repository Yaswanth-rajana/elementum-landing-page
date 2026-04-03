import { motion } from 'framer-motion'
import './Hero.css'

const avatars = [
  { src: '/Ellipse 262.png', alt: 'Team member', className: 'hero-avatar hero-avatar-1' },
  { src: '/Ellipse 261.png', alt: 'Team member', className: 'hero-avatar hero-avatar-2' },
  { src: '/Ellipse 255.png', alt: 'Team member', className: 'hero-avatar hero-avatar-3' },
  { src: '/Ellipse 256.png', alt: 'Team member', className: 'hero-avatar hero-avatar-4' },
  { src: '/Ellipse 257.png', alt: 'Team member', className: 'hero-avatar hero-avatar-5' },
  { src: '/Ellipse 258.png', alt: 'Team member', className: 'hero-avatar hero-avatar-6' },
  { src: '/Ellipse 259.png', alt: 'Team member', className: 'hero-avatar hero-avatar-7' },
  { src: '/Ellipse 260.png', alt: 'Team member', className: 'hero-avatar hero-avatar-8' },
]

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-headline-wrap"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero-curve" aria-hidden="true">
            <img src="/hero-curve-coral.svg" alt="" className="hero-curve-image" />
            <img src="/hero-curve-black.svg" alt="" className="hero-curve-image" />
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">
              The{' '}
              <span className="hero-underlined">
                <span className="hero-underlined-text">thinkers</span>
                <span className="hero-underline-stroke hero-underline-stroke-1" aria-hidden="true"></span>
                <span className="hero-underline-stroke hero-underline-stroke-2" aria-hidden="true"></span>
                <span className="hero-underline-stroke hero-underline-stroke-3" aria-hidden="true"></span>
              </span>{' '}
              and
            </span>
            <span className="hero-line hero-line-2">
              doers were{' '}
              <span className="hero-changing-group">
                <span className="hero-changing-prefix">ch</span>
                <span className="hero-highlight hero-highlight-pink">
                  <span className="hero-highlight-bg" aria-hidden="true"></span>
                  <span className="hero-highlight-text">anging</span>
                </span>
                <span className="hero-purple-blob" aria-hidden="true"></span>
              </span>
            </span>
            <span className="hero-line hero-line-3">
              the{' '}
              <span className="hero-highlight hero-highlight-green">
                <span className="hero-highlight-bg" aria-hidden="true"></span>
                <span className="hero-highlight-text">status</span>
              </span>{' '}
              Quo with
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        >
          We are a team of strategists, designers, communicators, and researchers. Together,
          <br />
          we believe that progress only happens when you refuse to play things safe.
        </motion.p>

        <motion.div
          className="hero-avatars-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
        >
          {avatars.map((avatar) => (
            <img key={avatar.className} src={avatar.src} alt={avatar.alt} className={avatar.className} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
