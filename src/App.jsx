import { useState } from 'react'

import './App.css'
import NavBar from './components/ NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import Feedbacks from './components/Feedbacks/Feedbacks'
import CTA from './components/CTA/CTA'
import Princing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <main className='p-4'>
      <NavBar />
      <HeroSection />
      <About />
      <Feedbacks />
      <Princing />
        </main>
        <CTA />
        <Footer />
      </div>
  )
}

export default App
