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

const Work = () => {
  const handleClick = (id) => {
    // redirect logic will be added later
  }

  return (
    <section id="work">
      <div className="flex justify-center mt-[110px] mb-[53px]">
        <img src={what_i_do} alt="What I Do" />
      </div>

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
        {projects.map((project) => (
          <motion.button
            key={project.id}
            onClick={() => handleClick(project.id)}
            whileHover={{ scale: 1.04, y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
              whileHover={{
                filter: 'drop-shadow(8px 12px 10px rgba(0, 0, 0, 0.75))',
              }}
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

      <div className="flex justify-center mb-[53px]">
        <img src={little_text} />
      </div>


    </section>
  )
}

export default Work
