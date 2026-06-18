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
  const controls = useAnimation()
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const diff = currentY - lastScrollY.current

        if (currentY < 80) {
          // Always visible near the top
          controls.start({ y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } })
        } else if (diff > 4) {
          // Scrolling down — hide
          controls.start({ y: -140, opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } })
        } else if (diff < -4) {
          // Scrolling up — show
          controls.start({ y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } })
        }

        lastScrollY.current = currentY
        ticking.current = false
      })
    }

    // Entrance animation on mount
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } })

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  // Track which section is currently in view
  useEffect(() => {
    const observers = []

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
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
  }

  const showScribble = (id) => hoverId === id || (activeId === id && hoverId === '')

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={controls}
      style={{ willChange: 'transform',
        position: 'fixed',
        top: '2rem',
        left: '2.25rem',
        right: '2.25rem',
        zIndex: 100,
        borderRadius: '21px',
        background: '#CB3047',
        border: '4px solid #003049',
        boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 40px',
        height: '80px',
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}
      >
        <img
          src={logo}
          alt="Choppywriter logo"
          style={{ display: 'block' }}
        />
      </motion.div>

      {/* Nav links */}
      <ul style={{
        display: 'flex',
        gap: '1.8rem',
        listStyle: 'none',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}>
        {links.map((link) => (
          <li key={link.label}>
            <button
              onClick={() => navTo(link.id)}
              onMouseEnter={() => setHoverId(link.id)}
              onMouseLeave={() => setHoverId('')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#fff',
                letterSpacing: '0.02em',
                padding: '0.2rem 0',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
              }}
            >
              {link.label}

              {/* Scribble underline */}
              <AnimatePresence>
                {showScribble(link.id) && (
                  <motion.img
                    src={scribble}
                    alt=""
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      bottom: '-18px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '160%',
                      height: 'auto',
                      pointerEvents: 'none',
                      filter: 'brightness(0) invert(1)',  // make it white to show on red
                    }}
                  />
                )}
              </AnimatePresence>
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
