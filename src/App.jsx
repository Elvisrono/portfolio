import { useEffect, useState } from 'react'
import Aos from "aos";
import './App.css'
import Navbar from './Navbar'
import Hero from './components/pages/Hero'

function App() {
  
  useEffect(() =>{
    Aos.init();
  }, [])
  return (
      <div>
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
  )
}

export default App
