import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { useState, useEffect } from 'react'
import React from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className='min-h-screen bg-neutral-100 dark:bg-neutral-950 relative'>
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className='fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10
          lg:h-10 flex justify-center items-center rounded-full bg-amber-500
          text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors'
        >
          <i className='bx bx-moon text-lg lg:text-xl'></i>
        </button>

        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={
            <>
              <Hero />
              <Footer />
            </>
          } />

          {/* About page */}
          <Route path="/about" element={
            <>
              <About />
              <Footer />
            </>
          } />

          {/* Services page */}
          <Route path="/services" element={
            <>
              <Services />
              <Footer />
            </>
          } />

          {/* Projects page */}
          <Route path="/projects" element={
            <>
              <Projects />
              <Footer />
            </>
          } />

          {/* Contact page */}
          <Route path="/contact" element={
            <>
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
