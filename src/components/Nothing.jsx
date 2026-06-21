import React from 'react'
import { motion } from 'framer-motion'

// Images
import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import scene1 from '../assets/nothing_scene_1.png'
import scene2 from '../assets/nothing_scene_2.png'
import scene3 from '../assets/nothing_scene_3.png'
import scene4 from '../assets/nothing_scene_4.png'
import scene5 from '../assets/nothing_scene_5.png'
import scene6 from '../assets/nothing_scene_6.png'
import scene7 from '../assets/nothing_scene_7.png'
import scene8 from '../assets/nothing_scene_8.png'
import nothing_happens from '../assets/nothing_happens.png'

const scenes = [scene1, scene2, scene3, scene4, scene6, scene7, scene5, scene8]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const Nothing = ({ onPrev, onNext }) => {
  return (
    <div className="m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>

      <motion.div
        style={{ fontFamily: "'Bestie Seventy', cursive" }}
        className="text-[48px] font-medium flex flex-col items-center justify-content"
        {...fadeUp(0)}
      >
        Nothing Happend Act Cool.
      </motion.div>

      <motion.div
        style={{ fontFamily: 'Poppins, sans-serif' }}
        className="mt-[72px] text-[16px] font-medium"
        {...fadeUp(0.1)}
      >
        A speculative ad built around a phrase people use every day. The creative thought was to reinterpret that phrase through the lens of the Nothing brand, creating a message that feels both familiar and surprising. Taking embarrassment to a whole new level.
      </motion.div>

      <motion.div className="flex items-center justify-between mt-[48px] w-full" {...fadeUp(0.18)}>
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Nothing</span></div>
        <div className="text-[20px] font-medium">Duration: <span className="font-[26px] font-bold ml-[8px]">8-10secs</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Spec Ads</span></div>
      </motion.div>

      <motion.div className="relative mt-[31px]" {...fadeUp(0.28)}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

        <div className="flex gap-[40px] w-full">
          <div className="w-[45%]">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {scenes.slice(0, 6).map((src, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', color: '#003049' }}>Scene {i + 1}</span>
                    <img src={src} alt={`Scene ${i + 1}`} style={{ width: '100%', height: '128px', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {scenes.slice(6).map((src, i) => (
                  <div key={i + 6} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', color: '#003049' }}>Scene {i + 7}</span>
                    <img src={src} alt={`Scene ${i + 7}`} style={{ width: '100%', height: '183px', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>

              <img src={nothing_happens} alt="Nothing Happens" style={{ width: '100%', height: 'auto', display: 'block' }} className="mt-[17px]" />
            </div>
          </div>

          <div className="w-[55%] bg-[#95BBEA] relative border-[5px] border-[#003049] px-[51px] py-[34px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: '20px' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[32px] mb-[20px] font-bold text-[#003049]">Script</div>
            <p className="text-[20px] font-medium text-[#003049] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Scene opens with a woman wearing Nothing Headphones<br />
              While she is walking down the street, she notices someone in the distance enthusiastically waving in her direction. She pauses, slightly confused.<br /><br />
              After a brief hesitation, she awkwardly raises her hand and waves back with a polite smile. Her smile fades into uncertainty as she realizes something isn't adding up.<br /><br />
              She turns around and discovers the stranger was actually greeting someone standing behind her. Her eyes widen in embarrassment.<br />
              Without reacting, she casually puts on her Nothing Headphones, pretending nothing happened.<br />
              She walks off with complete confidence, acting as if the awkward moment never occurred.<br /><br />
              Final Black Frame<br /><br />
              SUPER: <b>"Nothing happend act cool."</b>
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-[64px] cursor-pointer">
          <img src={arrow_left} alt="Arrow Left" onClick={onPrev} />
          <img src={arrow_right} alt="Arrow Right" onClick={onNext} />
        </div>
      </motion.div>
    </div>
  )
}

export default Nothing
