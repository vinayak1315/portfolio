import React from 'react'

// Images
import pin_left from '../assets/pin_left.svg'
import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import scene1 from '../assets/Maybelline_1.png'
import scene2 from '../assets/Maybelline_2.png'
import scene3 from '../assets/Maybelline_3.png'
import scene4 from '../assets/Maybelline_4.png'
import scene5 from '../assets/Maybelline_5.png'
import scene6 from '../assets/Maybelline_6.png'

const scenes = [scene1, scene2, scene3, scene4, scene5, scene6]

const scriptScenes = [
  'Close-up of the couple holding hands across a table, hinting at a romantic date.',
  'The man gets down on one knee and proposes. The woman freezes in disbelief as people around them watch.',
  'Overwhelmed with joy, she starts crying happy tears while saying, "Yes!"',
  'The couple hug tightly as the emotional moment sinks in.',
  'A nearby photographer secretly captures the candid moment while they\'re embracing.',
  'Later, the woman excitedly checks the pictures on the camera screen.',
]

const Maybelline = () => {
  return (
    <div className="flex flex-col items-center justify-content m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[24px] font-medium">Maybe She's Born With It.</div>
      <div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[18px] font-medium">A speculative ad capturing one of life's most unforgettable moments. The creative thought was to frame raw, unscripted emotion through the lens of the Maybelline brand — beauty that shines through even the most tearful, joyful moments of life.</div>

      <div className="flex items-center justify-between mt-[48px] w-full">
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Maybelline</span></div>
        <div className="text-[20px] font-medium">Duration: <span className="font-[26px] font-bold ml-[8px]">35-45secs</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Spec Ads</span></div>
      </div>

      <div className="bg-[#95BBEA] relative border-[5px] border-[#003049] mt-[22px] w-full px-[40px] py-[32px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: '20px' }}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-30px]" />
        <img src={pin_left} alt="Pin Left" className="absolute top-[-25px] left-[-30px]" />

        <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[36px] mb-[24px] pt-[80px]">Script</div>

        {/* 50 / 50 layout */}
        <div className="flex gap-[40px] w-full">

          {/* Left — image grid (2 columns, 3 rows) */}
          <div className="w-[50%]">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {scenes.map((src, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', color: '#003049' }}>Scene {i + 1}</span>
                  <img
                    src={src}
                    alt={`Scene ${i + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      border: '2px solid rgba(0,48,73,0.2)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — script content */}
          <div className="w-[50%] flex flex-col gap-[16px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {scriptScenes.map((text, i) => (
              <p key={i} className="text-[16px] font-medium text-[#003049] leading-relaxed">{text}</p>
            ))}
          </div>

        </div>

        <div className="flex justify-between mt-[64px] cursor-pointer">
          <img src={arrow_left} alt="Arrow Left" className="" />
          <img src={arrow_right} alt="Arrow Right" className="" />
        </div>
      </div>

    </div>
  )
}

export default Maybelline
