import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Nothing from './components/Nothing'
import Maybelline from './components/Maybelline'
import BeatsOfWorth from './components/BeatsOfWorth'
import Cetaphil from './components/Cetaphil'
import Ekin from './components/Ekin'
import KodavaTrip from './components/KodavaTrip'
import Contact from './components/Contact'

import './App.css'

const slides = [Nothing, Maybelline, BeatsOfWorth, Cetaphil, Ekin, KodavaTrip]

export default function App() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [direction, setDirection] = useState(1)
  const pendingIndex = useRef(null)
  const carouselRef = useRef(null)

  const navigate = (dir) => {
    if (!visible) return
    setDirection(dir)
    pendingIndex.current = (index + dir + slides.length) % slides.length
    setVisible(false)
  }

  const goToSlide = (i) => {
    if (!visible) return
    setDirection(i > index ? 1 : -1)
    pendingIndex.current = i
    setVisible(false)
    setTimeout(() => {
      carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => {
        setIndex(pendingIndex.current)
        setVisible(true)
      }, 280)
      return () => clearTimeout(t)
    }
  }, [visible])

  const ActiveSlide = slides[index]

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work onProjectClick={goToSlide} />
      <div ref={carouselRef} style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0)'
          : `translateX(${direction * 40}px)`,
        transition: visible
          ? 'opacity 0.35s ease, transform 0.35s ease'
          : 'opacity 0.25s ease, transform 0.25s ease',
      }}>
        <ActiveSlide onPrev={() => navigate(-1)} onNext={() => navigate(1)} />
      </div>
      <Contact />
    </>
  )
}
