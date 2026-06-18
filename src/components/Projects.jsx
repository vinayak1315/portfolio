import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  { title: 'BrandKit Studio', description: 'A web app for generating brand identity kits — logos, color palettes, and typography sets — powered by AI.', tags: ['React', 'Figma', 'Node.js'], accent: 'var(--red)', year: '2024' },
  { title: 'ShopFlow Dashboard', description: 'E-commerce analytics dashboard with real-time sales data, inventory management, and customer insights.', tags: ['Vite', 'MongoDB'], accent: 'var(--light-blue)', year: '2024' },
  { title: 'Netal Portfolio', description: "Personal branding portfolio — you're looking at it. Built with Vite + React and Framer Motion animations.", tags: ['React', 'Framer Motion', 'CSS'], accent: 'var(--beige)', year: '2025' },
  { title: 'TaskFlow App', description: 'Minimalist project management app with kanban boards, time tracking, and team collaboration features.', tags: ['React', 'Tailwind', 'Firebase'], accent: 'var(--red)', year: '2023' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--beige)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <span style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)' }}>— Projects</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--dark-blue)', marginTop: '0.5rem', lineHeight: 1.1 }}>
            Selected<br /><em style={{ color: 'var(--red)' }}>Work.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -6 }}
              style={{ border: '2.5px solid var(--dark-blue)', background: '#fff', position: 'relative', cursor: 'pointer' }}>
              <div style={{ height: '4px', background: p.accent === 'var(--beige)' ? 'var(--dark-blue)' : p.accent }} />
              <div style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--red)', textTransform: 'uppercase' }}>{p.year}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--dark-blue)', margin: '0.5rem 0 0.8rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'rgba(0,48,73,0.75)', marginBottom: '1.2rem' }}>{p.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ background: 'var(--beige)', border: '1.5px solid var(--dark-blue)', padding: '0.2rem 0.7rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--dark-blue)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dark-blue)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Code2 size={16} /> Code
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--red)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', fontWeight: 600 }}>
                    <ExternalLink size={16} /> Live
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
