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
import scene7 from '../assets/Maybelline_7.png'
import scene8 from '../assets/Maybelline_8.png'
import scene9 from '../assets/Maybelline_9.png'
import scene10 from '../assets/Maybelline_10.png'
import scene11 from '../assets/Maybelline_11.png'
const scenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11]

const Maybelling = ({ onPrev, onNext }) => {
  return (
    <div className="flex flex-col items-center justify-content m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium">Happy Moments, Happy Tears</div>
      <div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[16px] font-medium">
        This spec ad explores a real emotional moment where makeup is often put to the test. Built around the insight that tears shouldn't ruin life's biggest moments, the idea positions Maybelline's smudge-proof kajal as a product that stays intact through every emotion.
      </div>

      <div className="flex items-center justify-between mt-[48px] w-full">
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Maybelline</span></div>
        <div className="text-[20px] font-medium">Duration: <span className="font-[26px] font-bold ml-[8px]">35-45secs</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Spec Ads</span></div>
      </div>


      <div className="relative mt-[31px]">
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />
        {/* 50 / 50 layout */}
        <div className="flex gap-[40px] w-full">

          {/* Left — image grid (2 columns) */}
          <div className="w-[45%]">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {scenes.map((src, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', color: '#003049' }}>Scene {i + 1}</span>
                  <img
                    src={src}
                    alt={`Scene ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '169px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — text content */}
          <div className="w-[55%] bg-[#95BBEA] relative border-[5px] border-[#003049] px-[51px] py-[34px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
            <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[32px] mb-[20px] font-bold text-[#003049]">Script</div>

            <p className='text-[20px] font-medium text-[#003049] leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
              Close-up of the couple holding hands across a table, hinting at a romantic date.<br />
              The man gets down on one knee and proposes. The woman freezes in disbelief as people around them watch.<br />
              Overwhelmed with joy, she starts crying happy tears while saying, “Yes!”<br />
              The couple hug tightly as the emotional moment sinks in.<br />
              A nearby photographer secretly captures the candid moment while they're embracing.<br />
              Later, the woman excitedly checks the pictures on the camera screen. Her smile disappears. Her kajal has smudged, leaving dark tear streaks running down her cheeks in every photo.<br />
              Furious, she slams the camera onto the table with a loud “SLAM!”<br />
              She sits down on a chair, visibly upset and disappointed, while her partner stands nearby looking confused and concerned.<br />
              Product shot: Maybelline Colossal Kajal.<br />
              SUPER: “Introducing Maybelline Tearproof Colossal Kajal.”<br />
              End frame<br />
              Final card<br />
              MAYBELLINE NEW YORK<br />
              Happy tears stay happy.<br />
              Tearproof.
            </p>
          </div>

        </div>

        <div className="flex justify-between mt-[64px] cursor-pointer">
          <img src={arrow_left} alt="Arrow Left" onClick={onPrev} />
          <img src={arrow_right} alt="Arrow Right" onClick={onNext} />
        </div>
      </div>
    </div>
  )
}

export default Maybelling