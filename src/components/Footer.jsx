import { motion } from 'framer-motion'
import { Globe, Link, Share2, Code2 } from 'lucide-react'

const socials = [
  { icon: <Code2 size={20} />, href: '#', label: 'GitHub' },
  { icon: <Link size={20} />, href: '#', label: 'LinkedIn' },
  { icon: <Share2 size={20} />, href: '#', label: 'Twitter' },
  { icon: <Globe size={20} />, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--beige)', borderTop: '2.5px solid var(--dark-blue)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '1.3rem', color: 'var(--dark-blue)' }}>
        V<span style={{ color: 'var(--red)' }}>.</span>
      </span>
      <p style={{ fontSize: '0.85rem', color: 'rgba(0,48,73,0.6)', fontWeight: 500 }}>
        © 2025 Vinayak Sriram. Designed & built with care.
      </p>
      <div style={{ display: 'flex', gap: '0.8rem' }}>
        {socials.map((s) => (
          <motion.a key={s.label} href={s.href} aria-label={s.label} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
            style={{ color: 'var(--dark-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', border: '2px solid var(--dark-blue)' }}>
            {s.icon}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}
