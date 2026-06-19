import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Nothing from './components/Nothing'
import Maybelline from './components/Maybelline'
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
      {/* <Contact /> */}
    </>
  )
}
