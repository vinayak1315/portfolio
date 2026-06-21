import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import scene1 from '../assets/Maybelline_1.png'
import scene2 from '../assets/Maybelline_2.png'
import scene3 from '../assets/Maybelline_3.png'
import scene4 from '../assets/Maybelline_4.png'
import scene5 from '../assets/Maybelline_5.png'
import scene6 from '../assets/Maybelline_6.png'
import scene7 from '../assets/Maybelline_7.png'
import scene8 from '../assets/Maybelline_8.png'
import scene9 from '../assets/Maybelline_9.png'
import scene10 from '../assets/Maybelline_10.png'
import scene11 from '../assets/Maybelline_11.png'
const scenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11]

const Maybelling = ({ onPrev, onNext }) => {
  return (
    <div className="flex flex-col items-center m-auto mb-20 md:mb-[165px] px-4 md:px-0" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <motion.div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[28px] md:text-[48px] font-medium" {...fadeUp(0)}>Happy Moments, Happy Tears</motion.div>
      <motion.div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-3 md:mt-[72px] text-[16px] font-medium" {...fadeUp(0.1)}>
        This spec ad explores a real emotional moment where makeup is often put to the test. Built around the insight that tears shouldn't ruin life's biggest moments, the idea positions Maybelline's smudge-proof kajal as a product that stays intact through every emotion.
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 md:mt-[48px] w-full gap-1 sm:gap-0" {...fadeUp(0.18)}>
        <div className="text-[14px] sm:text-[20px] font-medium">Client: <span className="font-bold ml-[8px]">Maybelline</span></div>
        <div className="text-[14px] sm:text-[20px] font-medium">Duration: <span className="font-bold ml-[8px]">35-45secs</span></div>
        <div className="text-[14px] sm:text-[20px] font-medium">Category: <span className="font-bold ml-[8px]">Spec Ads</span></div>
      </motion.div>

      <motion.div className="relative mt-3 md:mt-[31px] w-full" {...fadeUp(0.28)}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-[40px] w-full">

          <div className="w-full md:w-[45%]">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {scenes.map((src, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', color: '#003049' }}>Scene {i + 1}</span>
                  <img src={src} alt={`Scene ${i + 1}`} style={{ width: '100%', height: '169px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Script box — pin lives here */}
          <div className="w-full md:w-[55%] bg-[#95BBEA] relative border-[5px] border-[#003049] px-6 md:px-[51px] py-6 md:py-[34px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
            <img src={pin_right} alt="" className="absolute top-2 right-2 w-8 md:w-auto md:top-[-25px] md:right-[-19px] z-10" />
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[22px] md:text-[32px] mb-[20px] font-bold text-[#003049]">Script</div>
            <p className='text-[15px] md:text-[20px] font-medium text-[#003049] leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
              Close-up of the couple holding hands across a table, hinting at a romantic date.<br />
              The man gets down on one knee and proposes. The woman freezes in disbelief as people around them watch.<br />
              Overwhelmed with joy, she starts crying happy tears while saying, "Yes!"<br />
              The couple hug tightly as the emotional moment sinks in.<br />
              A nearby photographer secretly captures the candid moment while they're embracing.<br />
              Later, the woman excitedly checks the pictures on the camera screen. Her smile disappears. Her kajal has smudged, leaving dark tear streaks running down her cheeks in every photo.<br />
              Furious, she slams the camera onto the table with a loud "SLAM!"<br />
              She sits down on a chair, visibly upset and disappointed, while her partner stands nearby looking confused and concerned.<br />
              Product shot: Maybelline Colossal Kajal.<br />
              SUPER: "Introducing Maybelline Tearproof Colossal Kajal."<br />
              End frame<br />
              Final card<br />
              MAYBELLINE NEW YORK<br />
              Happy tears stay happy.<br />
              Tearproof.
            </p>
          </div>

        </div>

        <div className="flex justify-between mt-8 md:mt-[64px] cursor-pointer">
          <img src={arrow_left} alt="Arrow Left" onClick={onPrev} />
          <img src={arrow_right} alt="Arrow Right" onClick={onNext} />
        </div>
      </motion.div>
    </div>
  )
}

export default Maybelling
