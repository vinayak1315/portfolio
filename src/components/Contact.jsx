import React from 'react'
import { motion } from 'framer-motion'

// Images
import pin_right from '../assets/pin_right.svg'
import callIcon from '../assets/call.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/maill.svg'
import resumeIcon from '../assets/resume.svg'
import qoute from '../assets/qoute.svg'
import resumePdf from '../assets/resume.pdf'

const ContactItem = ({ href, download, children, delay }) => {
  return (
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
    >
      {children}
    </motion.a>
  )
}

const Contact = () => {
  return (
    <>
      <div id="contact" className="m-auto mb-[165px]" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '1100px' }}>
        <motion.div
          className="w-full relative bg-[#95BBEA] border-[5px] border-[#003049] px-[51px] py-[96px]"
          style={{ boxShadow: '5px 7px 7.2px 0 rgba(0, 0, 0, 0.79)', borderRadius: '20px' }}
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={pin_right} alt="Pin Right" className="absolute top-[-25px] right-[-19px] z-10" />

          <motion.div
            style={{ fontFamily: "'Bestie Seventy', cursive" }}
            className="text-[48px] font-medium flex flex-col items-center justify-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            So here's my number,
          </motion.div>

          <motion.div
            style={{ fontFamily: "'Bestie Seventy', cursive" }}
            className="text-[48px] font-medium flex flex-col items-center justify-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            So call me maybe!
          </motion.div>

          <div className="flex gap-[32px] mt-[48px]">
            <ContactItem href="tel:+918328162250" delay={0.35}>
              <img src={callIcon} alt="Call" />
            </ContactItem>
            <ContactItem href="mailto:agarwalnetal07@gmail.com" delay={0.55}>
              <img src={mailIcon} alt="Email" />
            </ContactItem>
            <ContactItem href="https://www.linkedin.com/in/netal-agarwal-1383a0250/" delay={0.45}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </ContactItem>
            <ContactItem href={resumePdf} download="resume.pdf" delay={0.65}>
              <img src={resumeIcon} alt="Resume" />
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
