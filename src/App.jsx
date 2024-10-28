import { useEffect, useState } from 'react'
import Aos from "aos";
import './App.css'
import Navbar from './Navbar'
import Hero from './components/pages/Hero'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  
  useEffect(() =>{
    Aos.init();
  }, [])
  return (
      <div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
  )
}

export default App
