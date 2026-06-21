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
import ekin_01 from '../assets/ekin_01.png'
import ekin_02 from '../assets/ekin_02.png'
import ekin_03 from '../assets/ekin_03.png'
import ekin_04 from '../assets/ekin_04.png'
import ekin_05 from '../assets/ekin_05.png'


const ImageWithHover = ({ src, alt, style, className, onClick, label, icon }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position: 'relative', cursor: 'pointer', ...style }}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', display: 'block' }} />
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
      <motion.div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium flex flex-col items-center justify-content" {...fadeUp(0)}>Ekin Branding</motion.div>
      <motion.div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[16px] font-medium" {...fadeUp(0.1)}>
        A zero effort no brainer campaign for people who just like to chill through life in really cool sneakers.
      </motion.div>

      <motion.div className="flex items-center justify-between mt-[48px] w-full" {...fadeUp(0.18)}>
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">EKIN</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Campaign</span></div>
      </motion.div>

      <motion.div className="relative mt-[31px]" {...fadeUp(0.28)}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

        <div className="flex gap-[40px] w-full">

          {/* Left — images */}
          <div className="w-[45%]">
            <ImageWithHover
              src={ekin_01}
              alt="Ekins"
              style={{ height: '247px', marginTop: '17px' }}
              onClick={() => setPopup('image1')}
              icon="🔍"
              label="View Image"
            />
            <div className="w-full flex justify-between mt-[34px] gap-[26px]">
              <ImageWithHover
                src={ekin_02}
                alt="Ekins"
                style={{ width: '50%', height: '138px' }}
                onClick={() => setPopup('image2')}
                icon="🔍"
                label="View Image"
              />
              <ImageWithHover
                src={ekin_03}
                alt="Ekins"
                style={{ width: '50%', height: '138px' }}
                onClick={() => setPopup('image3')}
                icon="🔍"
                label="View Image"
              />
            </div>

            <div className="w-full flex justify-between mt-[34px] gap-[26px]">
              <ImageWithHover
                src={ekin_04}
                alt="Ekins"
                style={{ width: '50%', height: '138px' }}
                onClick={() => setPopup('image4')}
                icon="🔍"
                label="View Image"
              />
              <ImageWithHover
                src={ekin_05}
                alt="Ekins"
                style={{ width: '50%', height: '138px' }}
                onClick={() => setPopup('image5')}
                icon="🔍"
                label="View Image"
              />
            </div>

          </div>

          {/* Right — text content */}
          <div className="w-[55%] bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-[51px] py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">The Brief</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              A new brand of sneakers launched for the non-sporty, not in perfect shape  millions.
              The brand’s mission is to make the lazy/not so fit folks feel great about themselves.
            </p>
            <br />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">Challenge</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              The sneaker market is loud. Everyone's either selling performance run faster, jump higher,  or selling style.
            </p>
            <br />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">Big Idea</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              EKIN doesn't sell laziness. It sells chill.<br />
              Selling a lifestyle of not giving a damn and minding your own business, staying in your lane, and chilling through life in really nice shoes.
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
                src={{ image1: ekin_01, image2: ekin_02, image3: ekin_03, image4: ekin_04, image5: ekin_05 }[popup]}
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
