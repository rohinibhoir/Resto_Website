import React from 'react'
import Logo from '../assets/PL.png'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-white text-black shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
            <img src={Logo} alt="Foodie Zone" className="w-10 h-10 object-contain" />
            Foodie
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Menu */}
            <ul className="hidden sm:flex gap-4">
              <li>
                <Link to="/" className="inline-block py-4 px-4 hover:text-[#f59e0b]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-4 px-4 hover:text-[#f59e0b]">About</Link>
              </li>
              <li>
                <Link to="/services" className="inline-block py-4 px-4 hover:text-[#f59e0b]">Services</Link>
              </li>
              <li>
                <Link to="/testimonial" className="inline-block py-4 px-4 hover:text-[#f59e0b]">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-4 px-4 hover:text-[#f59e0b]">Contact</Link>
              </li>
            </ul>

            {/* Order Button */}
            <button className="bg-gradient-to-r from-[#f59e0b] to-[#ff9c01] text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
              Order
              <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
