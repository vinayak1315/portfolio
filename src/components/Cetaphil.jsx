import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import ceta_01 from '../assets/ceta_01.png'
import ceta_02 from '../assets/ceta_02.png'
import hers_01 from '../assets/hers_01.png'
import hers_02 from '../assets/hers_02.png'

const ImageWithHover = ({ src, alt, style, className, onClick, label, icon }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div style={{ position: 'relative', cursor: 'pointer', ...style }} className={className} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease', borderRadius: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        {icon && <span style={{ fontSize: '28px', color: 'white', lineHeight: 1 }}>{icon}</span>}
        {label && <span style={{ color: 'white', fontSize: '13px', fontWeight: '600', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</span>}
      </div>
    </div>
  )
}

const Cetaphil = ({ onPrev, onNext }) => {
  const [popup, setPopup] = useState(null)
  const close = () => setPopup(null)

  return (
    <div>
      {/* Cetaphil section */}
      <div className="m-auto mb-20 md:mb-[165px] px-4 md:px-0" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
        <motion.div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[28px] md:text-[48px] font-medium flex flex-col items-center" {...fadeUp(0)}>OOH La La</motion.div>
        <motion.div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 md:mt-[72px] text-[16px] font-medium" {...fadeUp(0.1)}>
          A collection of speculative OOH ads built around simple observations and visual wordplay.
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 md:mt-[48px] w-full gap-1 sm:gap-0" {...fadeUp(0.18)}>
          <div className="text-[14px] sm:text-[20px] font-medium">Client: <span className="font-bold ml-[8px]">Cetaphil</span></div>
          <div className="text-[14px] sm:text-[20px] font-medium">Category: <span className="font-bold ml-[8px]">OOH Spec ADS</span></div>
        </motion.div>

        <motion.div className="relative mt-3 md:mt-[31px]" {...fadeUp(0.28)}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-[40px] w-full">
            <div className="w-full md:w-[45%]">
              <ImageWithHover src={ceta_01} alt="Cetaphil 01" style={{ height: '247px', marginTop: '17px' }} onClick={() => setPopup('image1')} icon="🔍" label="View Image" />
              <ImageWithHover src={ceta_02} alt="Cetaphil 02" style={{ height: '247px', marginTop: '17px' }} onClick={() => setPopup('image2')} icon="🔍" label="View Image" />
            </div>
            {/* Content box — pin lives here */}
            <div className="w-full md:w-[55%] flex justify-center items-center bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-6 md:px-[51px] py-6 md:py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
              <img src={pin_right} alt="" className="absolute top-2 right-2 w-8 md:w-auto md:top-[-25px] md:right-[-19px] z-10" />
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[16px] font-medium">
                Sun protection begins with pore-tection, this spec OOH ad uses wordplay to create a distinctive product message. The circular shadows across the face echo the appearance of pores, bringing the idea to life visually
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hershey's section */}
      <div className="flex flex-col items-center m-auto mb-20 md:mb-[165px] px-4 md:px-0" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 md:mt-[48px] w-full gap-1 sm:gap-0">
          <div className="text-[14px] sm:text-[20px] font-medium">Client: <span className="font-bold ml-[8px]">Hershey's</span></div>
          <div className="text-[14px] sm:text-[20px] font-medium">Category: <span className="font-bold ml-[8px]">OOH Spec ADS</span></div>
        </div>

        <div className="relative mt-3 md:mt-[31px] w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-[40px] w-full">
            <div className="w-full md:w-[45%]">
              <ImageWithHover src={hers_01} alt="Hersheys 01" style={{ height: '247px', marginTop: '17px' }} onClick={() => setPopup('image3')} icon="🔍" label="View Image" />
              <ImageWithHover src={hers_02} alt="Hersheys 02" style={{ height: '247px', marginTop: '17px' }} onClick={() => setPopup('image4')} icon="🔍" label="View Image" />
            </div>
            {/* Content box — pin lives here */}
            <div className="w-full md:w-[55%] flex justify-center items-center bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-6 md:px-[51px] py-6 md:py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
              <img src={pin_right} alt="" className="absolute top-2 right-2 w-8 md:w-auto md:top-[-25px] md:right-[-19px] z-10" />
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[16px] font-medium">
                Built around the idea that single people are often overlooked during Valentine's Day, this spec OOH ad uses witty copy to put them at the center of the celebration. The playful wordplay creates a light-hearted message that celebrates independence without turning it into a pity narrative.
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8 md:mt-[64px] cursor-pointer">
            <img src={arrow_left} alt="Arrow Left" onClick={onPrev} />
            <img src={arrow_right} alt="Arrow Right" onClick={onNext} />
          </div>
        </div>
      </div>

      {createPortal(<div
        onClick={close}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, opacity: popup ? 1 : 0, pointerEvents: popup ? 'auto' : 'none', transition: 'opacity 0.3s ease' }}
      >
        <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '80vw', maxHeight: '85vh', transform: popup ? 'scale(1)' : 'scale(0.88)', transition: 'transform 0.3s ease' }}>
          <button onClick={close} style={{ position: 'absolute', top: '-16px', right: '-16px', width: '36px', height: '36px', background: 'white', border: 'none', borderRadius: '50%', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, lineHeight: 1 }}>×</button>
          {popup && (
            <img src={{ image1: ceta_01, image2: ceta_02, image3: hers_01, image4: hers_02 }[popup]} alt="Popup" style={{ maxWidth: '80vw', maxHeight: '85vh', objectFit: 'contain', display: 'block' }} />
          )}
        </div>
      </div>, document.body)}
    </div>
  )
}

export default Cetaphil
