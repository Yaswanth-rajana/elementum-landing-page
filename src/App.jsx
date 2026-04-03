import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { SplitSection } from './sections/SplitSection'
import { Services } from './sections/Services'
import { Testimonials } from './sections/Testimonials'
import { Newsletter } from './sections/Newsletter'
import { Footer } from './sections/Footer'
import './styles/animations.css'
import { CurveLine } from './components/common/CurveLine'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <div style={{ position: 'relative' }}>
        <SplitSection 
          title="Tomorrow should be better than today"
          description="We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
          imageSrc="/image 348 (1).png"
          variant="featured"
          reverse={false}
        />
        <CurveLine position="absolute" />
        <SplitSection 
          title="See how we can help you progress"
          description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research."
          imageSrc="/image 348.png"
          variant="featured-progress"
          reverse={true}
        />
      </div>
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
