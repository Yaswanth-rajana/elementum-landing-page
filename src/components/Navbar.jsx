import { useState, useEffect } from 'react'
import { cn } from '../utils/cn'
import './Navbar.css'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['Home', 'Studio', 'Services', 'Contact', 'FAQ']

  return (
    <nav className={cn('navbar', isScrolled && 'navbar-scrolled')}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Elementum</a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={cn('hamburger', isMobileMenuOpen && 'active')}></span>
        </button>

        {/* Mobile Menu */}
        <div className={cn('mobile-menu', isMobileMenuOpen && 'active')}>
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
