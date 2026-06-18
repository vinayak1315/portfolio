import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="me" ref={ref} style={{
    }}>
      <section id="hero" style={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '110px 2rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
        }}>

          {/* Greeting tag */}

          {/* Main SVG — the sticker tin */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            style={{ position: 'relative', width: '100%', marginTop: "40px" }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '100%',
                filter:
                  'drop-shadow(0 8px 4px rgba(0,0,0,0.12))' +
                  ' drop-shadow(0 20px 28px rgba(0,0,0,0.2))' +
                  ' drop-shadow(0 4px 8px rgba(203,48,71,0.08))',
              }}
            >
              <img
                src="section_2.svg"
                alt="About me sticker tin"
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
          </motion.div>


          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => document.getElementById('me')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'pointer', marginTop: '0.5rem', opacity: 0.5, fontSize: '1.5rem' }}
          >
            ↓
          </motion.div>
        </div>
      </section>
    </section>
  )
}
