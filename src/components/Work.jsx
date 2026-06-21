import { motion } from 'framer-motion'
import what_i_do from '../assets/what_i_do.svg'
import nothing from '../assets/nothing_happens.png'
import kajal from '../assets/kajal.png'
import loreal from '../assets/loreal.png'
import cetaphil from '../assets/cetaphil.png'
import drip from '../assets/drip.png'
import ekin from '../assets/ekin.png'
import little_text from '../assets/little_text.svg'

const projects = [
  { id: 'nothing', src: nothing, alt: 'Nothing' },
  { id: 'kajal', src: kajal, alt: 'Kajal' },
  { id: 'loreal', src: loreal, alt: "L'Oréal" },
  { id: 'cetaphil', src: cetaphil, alt: 'Cetaphil' },
  { id: 'drip', src: drip, alt: 'Drip' },
  { id: 'ekin', src: ekin, alt: 'Ekin' },
]

const slideMap = {
  nothing: 0,
  kajal: 1,
  loreal: 2,
  cetaphil: 3,
  ekin: 4,
  drip: 5,
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const Work = ({ onProjectClick }) => {
  const handleClick = (id) => {
    if (onProjectClick && slideMap[id] !== undefined) {
      onProjectClick(slideMap[id])
    }
  }

  return (
    <section id="work">
      <motion.div
        className="flex justify-center mt-[110px] mb-[53px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img src={what_i_do} alt="What I Do" />
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '40px',
          rowGap: '20px',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem 6rem',
        }}
      >
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            onClick={() => handleClick(project.id)}
            whileHover={{ scale: 1.04, y: -8 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'block',
              width: '100%',
            }}
          >
            <motion.img
              src={project.src}
              alt={project.alt}
              whileHover={{ filter: 'drop-shadow(8px 12px 10px rgba(0, 0, 0, 0.75))' }}
              transition={{ duration: 0.25 }}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(5px 5px 4.5px rgba(0, 0, 0, 0.67))',
              }}
            />
          </motion.button>
        ))}
      </div>

      <motion.div
        className="flex justify-center mb-[173px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={little_text} />
      </motion.div>
    </section>
  )
}

export default Work
