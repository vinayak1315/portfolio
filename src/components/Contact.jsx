import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Images
import pin_right from '../assets/pin_right.svg'
import callIcon from '../assets/call.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/maill.svg'
import resumeIcon from '../assets/resume.svg'
import qoute from '../assets/qoute.svg'
const resumePdf = '/resume.pdf'

const ContactItem = ({ href, download, children, delay, label }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Tooltip */}
      <div style={{
        position: 'absolute',
        bottom: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#003049',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        padding: '5px 12px',
        borderRadius: '8px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.18s ease',
        letterSpacing: '0.02em',
      }}>
        {label}
      </div>
      <motion.a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.18, transition: { duration: 0.15, ease: 'easeOut' } }}
        whileTap={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ cursor: 'pointer', display: 'inline-block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </motion.a>
    </div>
  )
}

const Contact = () => {
  return (
    <>
      <div id="contact" className="m-auto mb-20 md:mb-[165px] px-4 md:px-0" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
        <motion.div
          className="w-full relative bg-[#95BBEA] border-[5px] border-[#003049] px-6 sm:px-[51px] py-12 sm:py-[96px]"
          style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: '20px' }}
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={pin_right} alt="" className="absolute top-2 right-2 w-8 md:w-auto md:top-[-25px] md:right-[-19px] z-10" />

          <motion.div
            style={{ fontFamily: "'Bestie Seventy', cursive" }}
            className="text-[28px] sm:text-[48px] font-medium flex flex-col items-center justify-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            So here's my number,
          </motion.div>

          <motion.div
            style={{ fontFamily: "'Bestie Seventy', cursive" }}
            className="text-[28px] sm:text-[48px] font-medium flex flex-col items-center justify-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            So call me maybe!
          </motion.div>

          <div className="flex justify-between mt-8 sm:mt-[48px] items-center">
            <ContactItem href="tel:+918328162250" delay={0.35} label="+91 83281 62250">
              <img src={callIcon} alt="Call" className="w-10 sm:w-auto" />
            </ContactItem>
            <ContactItem href="mailto:agarwalnetal07@gmail.com" delay={0.55} label="Want to email?">
              <img src={mailIcon} alt="Email" className="w-10 sm:w-auto" />
            </ContactItem>
            <ContactItem href="https://www.linkedin.com/in/netal-agarwal-1383a0250/" delay={0.45} label="Open LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 sm:w-auto" />
            </ContactItem>
            <ContactItem href={resumePdf} download="resume.pdf" delay={0.65} label="Download Resume">
              <img src={resumeIcon} alt="Resume" className="w-10 sm:w-auto" />
            </ContactItem>
          </div>
        </motion.div>

        <motion.div
          className="mt-[111px] flex justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={qoute} alt="Quote" />
        </motion.div>
      </div>
    </>
  )
}

export default Contact
