import React from 'react';
import PLImage from '../assets/PL.png'; 
import { FaInstagram, FaLocationArrow, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 '>
        <div className='max-w-[1200px] mx-auto'>
          <div className='grid md:grid-cols-3 py-5'>
            
            {/* Left Section */}
            <div className='py-8 px-4'>
              <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                <img src={PLImage} alt="Logo" className='max-w-[50px]' />
                FOODIE
              </h1>

              <p className='mt-4 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis obcaecati dolorum sunt alias laudantium iusto necessitatibus, ab ullam animi perferendis ipsam sint illo molestias ad quidem quaerat itaque! Dignissimos?
              </p>

              <div className='flex items-center gap-3 mt-5'>
                <FaLocationArrow />
                <p>Pimpri , Pune</p>
              </div>

              <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>

              {/* Social Handles */}
              <div className='flex items-center gap-4 mt-6'>
                <a href="#">
                  <FaInstagram className='text-2xl hover:text-pink-600' />
                </a>
                <a href="#">
                  <FaFacebook className='text-2xl hover:text-blue-600' />
                </a>
                <a href="#">
                  <FaLinkedin className='text-2xl hover:text-blue-800' />
                </a>
              </div>
            </div>

            {/* Right Section - Important Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className='py-8 px-4'>
                  <h2 className='text-xl font-bold text-justify sm:text-left mb-3'>
                    Important Links
                  </h2>
                  <ul className='flex flex-col gap-3 text-gray-700'>
                    <li className='hover:text-blue-500 cursor-pointer'>Home</li>
                    <li className='hover:text-blue-500 cursor-pointer'>About</li>
                    <li className='hover:text-blue-500 cursor-pointer'>Services</li>
                    <li className='hover:text-blue-500 cursor-pointer'>Login</li>
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Bottom */}
          <div className='text-center py-6 border-t-2 border-gray-300/50 text-gray-600 text-sm'>
            © 2025 All rights reserved || Made with ❤️ by Dilshad
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer;
