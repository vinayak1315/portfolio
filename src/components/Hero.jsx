import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" style={{
      // minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '110px 2rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '900px',
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
              src="/1.svg"
              alt="About me sticker tin"
              style={{ width: '95%', height: 'auto',  margin: '0 auto' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
