import React from 'react'

// Images
import pin_left from '../assets/pin_left.svg'
import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'

const Nothing = () => {
  return (
    <div className="flex flex-col items-center justify-content m-auto" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[18px] font-medium">Nothing Happend Act Cool.</div>
      <div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[18px] font-medium">A speculative ad built around a phrase people use every day. The creative thought was to reinterpret that phrase through the lens of the Nothing brand, creating a message that feels both familiar and surprising. Taking embarrassment to a whole new level.</div>

      <div className="flex items-center justify-between mt-[48px] w-full">
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">Nothing</span></div>
        <div className="text-[20px] font-medium">Duration: <span className="font-[26px] font-bold ml-[8px]">8-10secs</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Spec Ads</span></div>
      </div>

      <div className="bg-[#95BBEA] relative border-[5px] border-[#003049] mt-[22px] w-full px-[40px] py-[32px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-30px]" />
        <img src={pin_left} alt="Pin Left" className="absolute top-[-25px] left-[-30px]" />

        <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[36px] mb-[24px] pt-[80px]">Script</div>

        {/* 50 / 50 layout */}
        <div className="flex gap-[40px] w-full">

          {/* Left — image grid (3 columns) */}
          <div className="w-[50%]">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {/* 8 small dummy images */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    background: 'rgba(0,48,73,0.15)',
                    borderRadius: '8px',
                    border: '2px solid rgba(0,48,73,0.2)',
                  }}
                />
              ))}
              {/* 4th row — 1 image spanning 2 columns */}
              <div
                style={{
                  gridColumn: 'span 2',
                  aspectRatio: '2 / 1',
                  background: 'rgba(0,48,73,0.15)',
                  borderRadius: '8px',
                  border: '2px solid rgba(0,48,73,0.2)',
                }}
              />
            </div>
          </div>

          {/* Right — text content */}
          <div className="w-[50%] flex flex-col gap-[16px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p className='text-[16px] font-medium text-[#003049] leading-relaxed'>
              Scene opens with a woman wearing Nothing Headphones. While she is walking down the street., she notices someone in the distance enthusiastically waving in her direction. She pauses, slightly confused. After a brief hesitation, she awkwardly raises her hand and waves back with a polite smile.<br /><br />
              The stranger keeps waving. Her smile fades into uncertainty as she realizes something isn't adding up.<br /><br />
              She turns around and discovers the stranger was actually greeting someone standing behind her. Her eyes widen in embarrassment.<br /><br />
              Without reacting, she casually puts on her Nothing Headphones, pretending nothing happened.<br /><br />
              She walks off with complete confidence, acting as if the awkward moment never occurred. Final Black Frame. SUPER: “Nothing happend¹ act cool.”
            </p>
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

export default Nothing