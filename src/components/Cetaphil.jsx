import React, { useState } from 'react'

// Images
import pin_left from '../assets/pin_left.svg'
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
    <div
      style={{ position: 'relative', cursor: 'pointer', ...style }}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

const Cetaphil = () => {
  const [popup, setPopup] = useState(null) // 'image1' | 'image2' | 'video'

  const close = () => setPopup(null)

  return (
    <div>
      <div className="m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
        <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium flex flex-col items-center justify-content ">OOH La La</div>
        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[16px] font-medium">
          A collection of speculative OOH ads built around simple observations and visual wordplay.
        </div>

        <div className="flex items-center justify-between mt-[48px] w-full">
          <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Cetaphil</span></div>
          <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">OOH Spec ADS</span></div>
        </div>

        <div className="relative mt-[31px]">
          <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

          <div className="flex gap-[40px] w-full">

            {/* Left — images */}
            <div className="w-[45%]">
              <ImageWithHover
                src={ceta_01}
                alt="Nothing Happens"
                style={{ height: '247px', marginTop: '17px' }}
                onClick={() => setPopup('image1')}
                icon="🔍"
                label="View Image"
              />
              <ImageWithHover
                src={ceta_02}
                alt="Nothing Happens"
                style={{ height: '247px', marginTop: '17px' }}
                onClick={() => setPopup('image2')}
                icon="🔍"
                label="View Image"
              />
            </div>

            {/* Right — text content */}
            <div className="w-[55%] flex justify-center items-center bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-[51px] py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[16px] font-medium">
                Sun protection begins with pore-tection, this spec OOH ad uses wordplay to create a distinctive product message. The circular shadows across the face echo the appearance of pores, bringing the idea to life visually
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-content m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>

        <div className="flex items-center justify-between mt-[48px] w-full">
          <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Hershey’s</span></div>
          <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">OOH Spec ADS</span></div>
        </div>

        <div className="relative mt-[31px]">
          <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

          <div className="flex gap-[40px] w-full">

            {/* Left — images */}
            <div className="w-[45%]">
              <ImageWithHover
                src={hers_01}
                alt="Nothing Happens"
                style={{ height: '247px', marginTop: '17px' }}
                onClick={() => setPopup('image3')}
                icon="🔍"
                label="View Image"
              />
              <ImageWithHover
                src={hers_02}
                alt="Nothing Happens"
                style={{ height: '247px', marginTop: '17px' }}
                onClick={() => setPopup('image4')}
                icon="🔍"
                label="View Image"
              />
            </div>

            {/* Right — text content */}
            <div className="w-[55%] flex justify-center items-center bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-[51px] py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[16px] font-medium">
                Built around the idea that single people are often overlooked during Valentine's Day, this spec OOH ad uses witty copy to put them at the center of the celebration. The playful wordplay creates a light-hearted message that celebrates independence without turning it into a pity narrative.
              </div>
            </div>

          </div>

          <div className="flex justify-between mt-[64px] cursor-pointer">
            <img src={arrow_left} alt="Arrow Left" className="" />
            <img src={arrow_right} alt="Arrow Right" className="" />
          </div>
        </div>

      </div>

      {/* Single popup overlay for all images */}
      <div
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
          {popup && (
            <img
              src={{ image1: ceta_01, image2: ceta_02, image3: hers_01, image4: hers_02 }[popup]}
              alt="Popup"
              style={{ maxWidth: '80vw', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Cetaphil
