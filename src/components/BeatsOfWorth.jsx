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
import loreal from '../assets/loreal.png'
import loreal_01 from '../assets/loreal_01.png'
import loreal_02 from '../assets/loreal_02.png'

const LOREAL_VIDEO_URL = 'https://www.youtube.com/embed/mHAEqEagyYM'

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

const BeatsOfWorth = ({ onPrev, onNext }) => {
  const [popup, setPopup] = useState(null) // 'image1' | 'image2' | 'video'

  const close = () => setPopup(null)

  return (
    <div className="flex flex-col items-center justify-content m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <motion.div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium" {...fadeUp(0)}>Beats Of Worth</motion.div>
      <motion.div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[16px] font-medium" {...fadeUp(0.1)}>
        For 50 years, "I'm Worth It" moved millions - until repetition turned it into noise. This campaign asked what happens when the most powerful words in advertising stop being heard, and found an answer that let women feel their worth again.
      </motion.div>

      <motion.div className="flex items-center justify-between mt-[48px] w-full" {...fadeUp(0.18)}>
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Loreal Paris</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Campaign</span></div>
      </motion.div>

      <motion.div className="relative mt-[31px]" {...fadeUp(0.28)}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

        <div className="flex gap-[40px] w-full">

          {/* Left — images */}
          <div className="w-[45%]">
            <ImageWithHover
              src={loreal}
              alt="Nothing Happens"
              style={{ height: '247px', marginTop: '17px' }}
              onClick={() => setPopup('image1')}
              icon="🔍"
              label="View Image"
            />
            <div className="w-full flex justify-between mt-[34px] gap-[26px]">
              <ImageWithHover
                src={loreal_01}
                alt="Nothing Happens"
                style={{ width: '50%', height: '117px' }}
                onClick={() => setPopup('image2')}
                icon="🔍"
                label="View Image"
              />
              <ImageWithHover
                src={loreal_02}
                alt="loreal_video"
                style={{ width: '50%', height: '117px' }}
                onClick={() => setPopup('video')}
                icon="▶"
                label="Play Video"
              />
            </div>
          </div>

          {/* Right — text content */}
          <div className="w-[55%] bg-[#95BBEA] relative border-[5px] text-[16px] border-[#003049] px-[51px] py-[52px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">The Brief</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              Reignite the original power of L'Oréal Paris' iconic "I'm Worth It" platform by addressing a contemporary issue women face today. The challenge was not to create a new message, but to make a 50-year-old statement of self-worth feel relevant, radical, and impactful again.
            </p>
            <br />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">Challenge</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              The initial research focused on the challenges women face and identifying an issue that L'Oréal could champion. However, most insights felt familiar, and many of the conversations around women's empowerment had already been addressed by brands in similar ways.
              Returning to the brief revealed that The idea of self-worth hadn't lost relevance-its words had lost impact through repetition.
            </p>
            <br />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-extrabold text-[#003049]">Big Idea</div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-medium">
              Instead of finding new words, the idea was to remove words altogether.
              a language that communicates without an alphabet and can be translated across multiple forms of expression.
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
          {(popup === 'image1' || popup === 'image2') && (
            <div style={{ width: '75vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={popup === 'image1' ? loreal : loreal_01}
                alt="Popup"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          )}

          {/* Video popup */}
          {popup === 'video' && (
            <div style={{ width: '920px', maxWidth: '85vw', background: '#000', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {LOREAL_VIDEO_URL ? (
                <iframe
                  src={LOREAL_VIDEO_URL}
                  title="Loreal Video"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <span style={{ color: '#666', fontSize: '14px' }}>Video URL not set</span>
              )}
            </div>
          )}
        </div>
      </div>, document.body)}
    </div>
  )
}

export default BeatsOfWorth
