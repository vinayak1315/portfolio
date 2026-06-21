import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

// Images
import pin_left from '../assets/pin_left.svg'
import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import koda_01 from '../assets/koda_01.png'
import koda_02 from '../assets/koda_02.png'
import koda_03 from '../assets/koda_03.png'
import koda_04 from '../assets/koda_04.png'


const ImageWithHover = ({ src, alt, style, className, onClick, label, icon, autoHeight }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position: 'relative', cursor: 'pointer', ...style }}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} style={{ width: '100%', height: autoHeight ? 'auto' : '100%', display: 'block' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.45)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s ease',
        borderRadius: 'inherit',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '6px',
      }}>
        {icon && (
          <span style={{ fontSize: '28px', color: 'white', lineHeight: 1 }}>{icon}</span>
        )}
        {label && (
          <span style={{
            color: 'white', fontSize: '13px', fontWeight: '600',
            fontFamily: 'Poppins, sans-serif', letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>{label}</span>
        )}
      </div>
    </div>
  )
}

const Ekin = ({ onPrev, onNext }) => {
  const [popup, setPopup] = useState(null) // 'image1' | 'image2' | 'video'

  const close = () => setPopup(null)

  return (
    <div className="m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <motion.div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium flex flex-col items-center justify-content" {...fadeUp(0)}>Kodava Drip</motion.div>
      <motion.div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[16px] font-medium" {...fadeUp(0.1)}>
        Kodava Drip<br />
        Good coffee, good copy good campaigns for all types of coffee drinkers.
      </motion.div>

      <motion.div className="flex items-center justify-between mt-[48px] w-full" {...fadeUp(0.18)}>
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Kodava Drip</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Campaign</span></div>
      </motion.div>

      <motion.div className="relative mt-[31px]" {...fadeUp(0.28)}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

        <div className="flex gap-[40px] w-full">

          {/* Left — images */}
          <div className="w-[45%]">
            <ImageWithHover
              src={koda_01}
              alt="Ekins"
              style={{ marginTop: '17px', width: "100%" }}
              onClick={() => setPopup('image1')}
              icon="🔍"
              label="View Image"
              autoHeight
            />
            <div className="w-full flex justify-between mt-[34px] gap-[26px]">
              <ImageWithHover
                src={koda_02}
                alt="Ekins"
                style={{ width: '50%', height: '138px' }}
                onClick={() => setPopup('image2')}
                icon="🔍"
                label="View Image"
              />
              <ImageWithHover
                src={koda_03}
                alt="Ekins"
                style={{ width: '50%', height: '138px' }}
                onClick={() => setPopup('image3')}
                icon="🔍"
                label="View Image"
              />
            </div>

            <ImageWithHover
              src={koda_04}
              alt="Ekins"
              style={{ marginTop: '17px', width: "100%" }}
              onClick={() => setPopup('image4')}
              icon="🔍"
              label="View Image"
              autoHeight
            />

          </div>

          {/* Right — text content */}
          <div className="w-[55%] bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-[51px] py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">The Brief</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              Reintroduce a 4th-generation Coorg coffee brand to a new generation of coffee drinkers. The challenge was to make heritage, authenticity, and estate-grown craftsmanship feel as desirable as modern specialty coffee brands.
            </p>
            <br />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">Challenge</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              Coffee drinkers aren't one homogeneous group. Some treat coffee as a ritual, while others simply need their daily caffeine fix and constantly experiment with new recipes and formats. The brand needed a positioning that could appeal to both mindsets without alienating either.
            </p>
            <br />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">Big Idea</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              The Story Behind Every Sip.
              While modern coffee culture celebrates the final cup, Kodava Drip owns the entire journey behind it-Whether coffee is a cherished ritual or a quick pick-me-up, every consumer has a unique relationship with it. By offering multiple formats rooted in the same authentic Coorg heritage, Kodava Drip becomes a brand that adapts to different coffee personalities while staying true to its origins.
            </p>
          </div>

        </div>

        <div className="flex justify-between mt-[64px] cursor-pointer">
          <img src={arrow_left} alt="Arrow Left" onClick={onPrev} />
          <img src={arrow_right} alt="Arrow Right" onClick={onNext} />
        </div>
      </motion.div>

      {/* Popup overlay */}
      {createPortal(<div
        onClick={close}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
          opacity: popup ? 1 : 0,
          pointerEvents: popup ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            maxWidth: '80vw',
            maxHeight: '85vh',
            transform: popup ? 'scale(1)' : 'scale(0.88)',
            transition: 'transform 0.3s ease',
          }}
        >
          {/* Close button */}
          <button
            onClick={close}
            style={{
              position: 'absolute', top: '-16px', right: '-16px',
              width: '36px', height: '36px',
              background: 'white', border: 'none', borderRadius: '50%',
              fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10, lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Image popup */}
          {popup && (
            <div style={{ width: '75vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={{ image1: koda_01, image2: koda_02, image3: koda_03, image4: koda_04 }[popup]}
                alt="Popup"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          )}
        </div>
      </div>, document.body)}
    </div>
  )
}

export default Ekin
