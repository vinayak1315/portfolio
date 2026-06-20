import React from 'react'

// Images
import pin_left from '../assets/pin_left.svg'
import pin_right from '../assets/pin_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import lorealImg from '../assets/loreal.png'

const Loreal = () => {
  return (
    <div className="flex flex-col items-center justify-content m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
      <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[24px] font-medium">Beats of Worth</div>
      <div style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-[72px] text-[18px] font-medium">For 50 years, "I'm Worth It" moved millions — until repetition turned it into noise. This campaign asked what happens when the most powerful words in advertising stop being heard, and found an answer that let women feel their worth again.</div>

      <div className="flex items-center justify-between mt-[48px] w-full">
        <div className="text-[20px] font-medium">Client: <span className="font-[26px] font-bold ml-[8px]">L'Oreal Paris</span></div>
        <div className="text-[20px] font-medium">Awards: <span className="font-[26px] font-bold ml-[8px]">D&AD New Blood</span></div>
        <div className="text-[20px] font-medium">Category: <span className="font-[26px] font-bold ml-[8px]">Campaign</span></div>
      </div>

      <div className="bg-[#95BBEA] relative border-[5px] border-[#003049] mt-[22px] w-full px-[40px] py-[32px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: "20px" }}>
        <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-30px]" />
        <img src={pin_left} alt="Pin Left" className="absolute top-[-25px] left-[-30px]" />

        <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[36px] mb-[24px] pt-[80px]">Campaign</div>

        <img
          src={lorealImg}
          alt="L'Oréal — Beats of Worth"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px',
            border: '2px solid rgba(0,48,73,0.2)',
          }}
        />

        <div className="flex justify-between mt-[64px] cursor-pointer">
          <img src={arrow_left} alt="Arrow Left" />
          <img src={arrow_right} alt="Arrow Right" />
        </div>
      </div>
    </div>
  )
}

export default Loreal
