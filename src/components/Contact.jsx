import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--dark-blue)',
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(rgba(149,187,234,0.06) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(149,187,234,0.06) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', fontWeight: 700, color: 'var(--light-blue)', letterSpacing: '0.1em' }}>
            — Contact
          </span>
          <h2 style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            fontWeight: 700, color: 'var(--beige)',
            lineHeight: 1, margin: '0.3rem 0 0.8rem',
          }}>
            Let's make an ad.
          </h2>
          <p style={{ color: 'rgba(149,187,234,0.8)', fontSize: '1rem', lineHeight: 1.7 }}>
            Want to collab? Got a brief? Or just want to talk about that one ad that made you cry?
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(field => (
              <div key={field.id}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--light-blue)', marginBottom: '0.4rem' }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} required
                  style={{ width: '100%', padding: '0.85rem 1rem', background: 'rgba(149,187,234,0.07)', border: '2px solid rgba(149,187,234,0.2)', color: 'var(--beige)', fontSize: '0.95rem', fontFamily: 'Space Grotesk', outline: 'none', borderRadius: '4px' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--red)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(149,187,234,0.2)')}
                />
              </div>
            ))}
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--light-blue)', marginBottom: '0.4rem' }}>Message</label>
            <textarea placeholder="Tell me about the brief..." required rows={5}
              style={{ width: '100%', padding: '0.85rem 1rem', background: 'rgba(149,187,234,0.07)', border: '2px solid rgba(149,187,234,0.2)', color: 'var(--beige)', fontSize: '0.95rem', fontFamily: 'Space Grotesk', outline: 'none', resize: 'vertical', borderRadius: '4px' }}
              onFocus={e => (e.target.style.borderColor = 'var(--red)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(149,187,234,0.2)')}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: '6px 6px 0 var(--red)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: sent ? '#2d8a4e' : 'var(--beige)',
              color: sent ? '#fff' : 'var(--dark-blue)',
              border: '2.5px solid var(--dark-blue)',
              padding: '1rem 2rem', cursor: 'pointer',
              fontFamily: 'Caveat, cursive', fontWeight: 700,
              fontSize: '1.3rem',
              letterSpacing: '0.02em',
              borderRadius: '4px',
              boxShadow: '4px 4px 0 rgba(149,187,234,0.3)',
              transition: 'background 0.25s, color 0.25s',
            }}
          >
            {sent ? '✓ Sent! Talk soon.' : 'Send it →'}
          </motion.button>
        </motion.form>

        {/* Footer sig */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <span style={{
            fontFamily: 'Caveat, cursive',
            fontSize: '2rem', fontWeight: 700,
            color: 'rgba(255,248,231,0.2)',
            letterSpacing: '0.02em',
          }}>
            Choppywriter.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
