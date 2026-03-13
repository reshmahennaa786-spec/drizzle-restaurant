import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import useWhatsApp from '../hooks/useWhatsApp'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden,   setHidden]   = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openWhatsApp } = useWhatsApp()
  const lastScroll = { current: 0 }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      if (y > 400) {
        setHidden(y > lastScroll.current + 5)
      } else {
        setHidden(false)
      }
      lastScroll.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
        <Link to="/" className="nav-logo">Drizzle</Link>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <button className="nav-book" onClick={openWhatsApp}>Book Now</button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/"          onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/menu"      onClick={() => setMenuOpen(false)}>Menu</NavLink>
        <NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
        <NavLink to="/contact"   onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <button className="btn btn-gold" onClick={() => { openWhatsApp(); setMenuOpen(false) }}>
          Reserve a Table
        </button>
      </div>
    </>
  )
}