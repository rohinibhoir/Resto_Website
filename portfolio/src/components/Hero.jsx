import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../assets/Photo.jpeg'

export const Hero = () => {
  return (
    <div className='w-screen min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6'>
      
      <img 
        src={HeroImage} 
        alt="Rohini Bhoir" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />

      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500'>
          Rohini Bhoir
        </span>{" "}
        Full-Stack Developer, Web Developer, Python Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications using React and Python,
        focusing on performance, scalability, and user experience.
      </p>

      <div className='mt-8 space-x-4'>
        <Link to="/contact">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            hidden md:inline transform transition-transform duration-300 hover:scale-105
            px-4 py-2 rounded-full'>
            Connect With Me
          </button>
        </Link>

        <a
          href="/Rohini__Bhoir.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white 
            hidden md:inline transform transition-transform duration-300 hover:scale-105
            px-4 py-2 rounded-full'>
            Resume
          </button>
        </a>

      </div>
    </div>
  )
}

export default Hero
