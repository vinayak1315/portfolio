import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'Figma', level: 90, cat: 'Design' },
  { name: 'React', level: 85, cat: 'Frontend' },
  { name: 'CSS / Tailwind', level: 92, cat: 'Frontend' },
  { name: 'Node.js', level: 70, cat: 'Backend' },
  { name: 'Framer Motion', level: 82, cat: 'Frontend' },
  { name: 'Adobe XD', level: 80, cat: 'Design' },
  { name: 'MongoDB', level: 65, cat: 'Backend' },
]

const tools = ['VS Code', 'Git', 'Vite', 'Postman', 'Notion', 'Vercel', 'Canva', 'Photoshop']

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--dark-blue)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <span style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--light-blue)' }}>— Skills & Tools</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--beige)', marginTop: '0.5rem', lineHeight: 1.1 }}>
            What I<br /><em style={{ color: 'var(--red)' }}>Bring.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            {skills.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07 }} style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--beige)' }}>{skill.name}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--light-blue)', fontWeight: 500 }}>{skill.level}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(149,187,234,0.15)', border: '1px solid rgba(149,187,234,0.2)', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                    style={{ height: '100%', background: skill.cat === 'Design' ? 'var(--red)' : skill.cat === 'Frontend' ? 'var(--light-blue)' : 'rgba(255,248,231,0.6)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--light-blue)', marginBottom: '1.5rem' }}>
              Tools I Use
            </motion.p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
              {tools.map((tool, i) => (
                <motion.div key={tool} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }} whileHover={{ scale: 1.04 }}
                  style={{ border: '2px solid rgba(149,187,234,0.25)', padding: '0.8rem 1rem', color: 'var(--beige)', fontWeight: 600, fontSize: '0.9rem' }}>
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
