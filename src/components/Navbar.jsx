import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import logo from '../assets/Logo.svg'
import scribble from '../assets/Scribble_round_active_nav.svg'

const links = [
  { label: 'Me', id: 'me' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState('')
  const [hoverId, setHoverId] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const controls = useAnimation()
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const diff = currentY - lastScrollY.current
        if (currentY < 80) {
          controls.start({ y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } })
        } else if (diff > 4) {
          controls.start({ y: -140, opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } })
        } else if (diff < -4) {
          controls.start({ y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } })
        }
        lastScrollY.current = currentY
        ticking.current = false
      })
    }
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  useEffect(() => {
    const observers = []
    const visible = new Set()
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { visible.add(id); setActiveId(id) }
          else { visible.delete(id); if (visible.size === 0) setActiveId('') }
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const showScribble = (id) => hoverId === id || (activeId === id && hoverId === '')

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={controls}
        className="nav-root"
        style={{
          willChange: 'transform',
          borderRadius: '21px',
          background: '#CB3047',
          border: '4px solid #003049',
          boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.04 }} style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Choppywriter logo" style={{ display: 'block' }} />
        </motion.div>

        {/* Desktop nav links */}
        <ul className="nav-links hidden md:flex">
          {links.map((link) => (
            <li key={link.label} style={{ position: 'relative' }}>
              <button
                onClick={() => navTo(link.id)}
                onMouseEnter={() => setHoverId(link.id)}
                onMouseLeave={() => setHoverId('')}
                className="nav-link-btn"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '24px',
                  color: '#fff', letterSpacing: '0.02em', padding: '0.2rem 0',
                  textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
                }}
              >
                <div style={{ zIndex: 1 }}>{link.label}</div>
              </button>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100%' }}>
                {showScribble(link.id) && (
                  <motion.img
                    key="scribble" src={scribble} alt=""
                    initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ pointerEvents: 'none', zIndex: 0 }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden cursor-pointer flex flex-col"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', padding: '4px', gap: '5px' }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2.5px', background: 'white', borderRadius: '2px',
            transition: 'transform 0.22s ease',
            transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2.5px', background: 'white', borderRadius: '2px',
            transition: 'opacity 0.22s ease', opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2.5px', background: 'white', borderRadius: '2px',
            transition: 'transform 0.22s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        </button>
      </motion.nav>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 150 }}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '220px',
                background: '#CB3047', border: '4px solid #003049',
                borderRadius: '20px 0 0 20px', zIndex: 200,
                padding: '76px 32px 40px',
                display: 'flex', flexDirection: 'column', gap: '28px',
                boxShadow: '-4px 0 20px rgba(0,0,0,0.3)',
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'absolute', top: '18px', right: '18px',
                  background: 'white', border: 'none', borderRadius: '50%',
                  width: '30px', height: '30px', fontSize: '18px', fontWeight: 'bold',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#CB3047', lineHeight: 1,
                }}
              >×</button>
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navTo(link.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '26px',
                    color: '#fff', textAlign: 'left', letterSpacing: '0.02em',
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
