import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    brand: 'Nothing',
    type: 'Spec Ad',
    runtime: '10 seconds',
    color: 'var(--dark-blue)',
    textColor: 'var(--beige)',
    accent: 'var(--light-blue)',
    tagline: '"Nothing happend¹ act cool."',
    script: `A woman wearing Nothing Headphones is walking down the street. She notices someone in the distance enthusiastically waving in her direction. She pauses, slightly confused.

After a brief hesitation, she awkwardly raises her hand and waves back with a polite smile. The stranger keeps waving. Her smile fades into uncertainty as she realizes something isn't adding up.

She turns around and discovers the stranger was actually greeting someone standing behind her. Her eyes widen in embarrassment.

Without reacting, she casually puts on her Nothing Headphones, pretending nothing happened. She walks off with complete confidence.

SUPER: "Nothing happend¹ act cool."`,
  },
  {
    id: 2,
    brand: 'Maybelline',
    type: 'Spec Ad',
    runtime: '35–40 seconds',
    color: 'var(--red)',
    textColor: '#fff',
    accent: 'var(--beige)',
    tagline: '"Happy tears stay happy. Tearproof."',
    script: `Close-up of the couple holding hands across a table, hinting at a romantic date. The man gets down on one knee and proposes. The woman freezes in disbelief as people around them watch.

Overwhelmed with joy, she starts crying happy tears while saying, "Yes!" The couple hug tightly as the emotional moment sinks in. A nearby photographer secretly captures the candid moment.

Later, the woman excitedly checks the pictures on the camera screen. Her smile disappears — her kajal has smudged, leaving dark tear streaks in every photo.

Furious, she slams the camera. She sits down, visibly upset, while her partner stands confused.

Product shot: Maybelline Colossal Kajal.

SUPER: "Introducing Maybelline Tearproof Colossal Kajal."
SUPER: "Happy tears stay happy. Tearproof."`,
  },
  {
    id: 3,
    brand: 'L\'Oréal Paris',
    type: 'Campaign',
    awards: 'DnAD New Bloods',
    color: 'var(--light-blue)',
    textColor: 'var(--dark-blue)',
    accent: 'var(--red)',
    tagline: '"The Winner takes it allllll, The looser uses it for their portfolio."',
    note: 'Will i get over it? No, but life goes on  — Dwight K. Shrute',
    hasBoards: true,
    hasFilm: true,
  },
  {
    id: 4,
    brand: 'Kodava Drip',
    type: 'Campaign',
    runtime: '35–40 seconds',
    color: 'var(--beige)',
    textColor: 'var(--dark-blue)',
    accent: 'var(--red)',
    tagline: 'A campaign rooted in culture.',
  },
]

function ProjectCard({ project, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{ position: 'relative' }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        style={{
          background: project.color,
          border: '2.5px solid var(--dark-blue)',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: `5px 5px 0 var(--dark-blue)`,
          cursor: 'pointer',
        }}
        onClick={() => setOpen(!open)}
      >
        {/* Card header */}
        <div style={{ padding: '1.8rem 1.8rem 1.4rem' }}>
          {/* Meta row */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{
              background: project.accent,
              color: project.accent === 'var(--beige)' ? 'var(--dark-blue)' : project.textColor === '#fff' ? 'var(--dark-blue)' : '#fff',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.25rem 0.8rem', borderRadius: '20px',
              border: '1.5px solid var(--dark-blue)',
            }}>
              {project.type}
            </span>
            {project.runtime && (
              <span style={{
                background: 'transparent',
                color: project.textColor,
                fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '0.25rem 0.8rem', borderRadius: '20px',
                border: `1.5px solid ${project.textColor === '#fff' ? 'rgba(255,255,255,0.4)' : 'rgba(0,48,73,0.3)'}`,
              }}>
                {project.runtime}
              </span>
            )}
            {project.awards && (
              <span style={{
                background: 'var(--dark-blue)',
                color: 'var(--beige)',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '0.25rem 0.8rem', borderRadius: '20px',
              }}>
                🏆 {project.awards}
              </span>
            )}
          </div>

          {/* Brand */}
          <h3 style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: project.textColor,
            margin: '0 0 0.6rem',
            lineHeight: 1.1,
          }}>
            {project.brand}
          </h3>

          {/* Tagline */}
          {project.tagline && (
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.9rem',
              color: project.textColor,
              opacity: 0.8,
              fontStyle: 'italic',
              margin: '0 0 1rem',
              lineHeight: 1.5,
            }}>
              {project.tagline}
            </p>
          )}

          {/* Expand toggle */}
          {project.script && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: project.textColor, opacity: 0.7,
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              <span>{open ? '↑ Hide script' : '↓ Read script'}</span>
            </div>
          )}

          {project.note && (
            <p style={{
              fontFamily: 'Caveat, cursive',
              fontSize: '1.1rem',
              color: project.textColor,
              opacity: 0.75,
              margin: '0.5rem 0 0',
              fontStyle: 'italic',
            }}>
              {project.note}
            </p>
          )}

          {project.hasBoards && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              {['Case Boards', 'Case Film'].map(l => (
                <span key={l} style={{
                  background: 'var(--dark-blue)', color: 'var(--beige)',
                  fontSize: '0.75rem', fontWeight: 600,
                  padding: '0.3rem 0.8rem', borderRadius: '4px',
                  letterSpacing: '0.05em',
                }}>{l}</span>
              ))}
            </div>
          )}
        </div>

        {/* Expandable script */}
        <AnimatePresence>
          {open && project.script && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                borderTop: `2px solid ${project.textColor === '#fff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,48,73,0.15)'}`,
                padding: '1.4rem 1.8rem 1.8rem',
                background: 'rgba(0,0,0,0.08)',
              }}>
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.85,
                  color: project.textColor,
                  opacity: 0.9,
                  margin: 0,
                  whiteSpace: 'pre-line',
                }}>
                  {project.script}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="work" ref={ref} style={{
      background: 'var(--beige)',
      padding: '6rem 2rem',
      backgroundImage:
        'linear-gradient(rgba(180,170,150,0.22) 1px, transparent 1px),' +
        'linear-gradient(90deg, rgba(180,170,150,0.22) 1px, transparent 1px)',
      backgroundSize: '72px 72px',
      backgroundColor: '#fdf9f0',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span style={{
            fontFamily: 'Caveat, cursive',
            fontSize: '1.1rem', fontWeight: 700,
            color: 'var(--red)', letterSpacing: '0.1em',
          }}>
            — Work
          </span>
          <h2 style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: 'var(--dark-blue)',
            lineHeight: 1, margin: '0.3rem 0 0',
          }}>
            The Ads.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
