import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Nothing from './components/Nothing'
import Maybelline from './components/Maybelline'
import BeatsOfWorth from './components/BeatsOfWorth'
import Cetaphil from './components/Cetaphil'
import Ekin from './components/Ekin'
import KodavaTrip from './components/KodavaTrip'

import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Nothing />
      <Maybelline />
      <BeatsOfWorth />
      <Cetaphil />
      <Ekin />
      <KodavaTrip />
      {/* <Contact /> */}
    </>
  )
}
