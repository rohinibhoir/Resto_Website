import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className='bg-white dark:bg-black text-black dark:text-white px-8 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50 shadow transition-colors duration-300'>
      <div className='container py-3 flex justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Rohini</div>
        <div className='flex items-center space-x-6'>

          {/* Home */}
          <Link to="/" className='flex items-center gap-1 hover:text-gray-500 dark:hover:text-gray-300'>
            <Home size={18} />
            <span>Home</span>
          </Link>

          {/* About */}
          <Link to="/about" className='flex items-center gap-1 hover:text-gray-500 dark:hover:text-gray-300'>
            <User size={18} />
            <span>About Me</span>
          </Link>

          {/* Services */}
          <Link to="/services" className='flex items-center gap-1 hover:text-gray-500 dark:hover:text-gray-300'>
            <Briefcase size={18} />
            <span>Services</span>
          </Link>

          {/* Projects */}
          <Link to="/projects" className='flex items-center gap-1 hover:text-gray-500 dark:hover:text-gray-300'>
            <FolderOpen size={18} />
            <span>Projects</span>
          </Link>

          {/* Contact */}
          <Link to="/contact" className='flex items-center gap-1 hover:text-gray-500 dark:hover:text-gray-300'>
            <Mail size={18} />
            <span>Contact</span>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className='ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
