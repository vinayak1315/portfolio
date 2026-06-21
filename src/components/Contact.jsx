import React, { useState } from 'react'

// Images
import pin_right from '../assets/pin_right.svg'
import callIcon from '../assets/call.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/maill.svg'
import resumeIcon from '../assets/resume.svg'
import qoute from '../assets/qoute.svg'
import resumePdf from '../assets/resume.pdf'

const hoverStyle = {
  cursor: 'pointer',
  transition: 'transform 0.25s ease',
}

const ContactItem = ({ href, download, children }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : '_blank'}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...hoverStyle,
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        display: 'inline-block',
      }}
    >
      {children}
    </a>
  )
}

const Contact = () => {
  return (
    <>
      <div className="m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
        <div className="w-full relative bg-[#95BBEA] border-[5px] border-[#003049] px-[51px] py-[96px]" style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: '20px' }}>
          <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />
          <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium flex flex-col items-center justify-content">So here's my number,</div>
          <div style={{ fontFamily: "'Bestie Seventy', cursive" }} className="text-[48px] font-medium flex flex-col items-center justify-content">So call me maybe!</div>

          <div className="flex gap-[32px] mt-[48px]">
            <ContactItem href="tel:+918328162250">
              <img src={callIcon} alt="Call" />
            </ContactItem>

            <ContactItem href="https://www.linkedin.com/in/netal-agarwal-1383a0250/">
              <img src={linkedinIcon} alt="LinkedIn" />
            </ContactItem>

            <ContactItem href="mailto:agarwalnetal07@gmail.com">
              <img src={mailIcon} alt="Email" />
            </ContactItem>

            <ContactItem href={resumePdf} download="resume.pdf">
              <img src={resumeIcon} alt="Resume" />
            </ContactItem>
          </div>
        </div>

        <div className="mt-[111px] flex justify-end">
          <img src={qoute} alt="Quote" />
        </div>
      </div>
    </>
  )
}

export default Contact
