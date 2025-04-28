import React from 'react'
import AboutImage from '../assets/hero-image.jpg'

const About = () => {
  return (
    <div className=' w-screen min-h-screen bg-black text-white py-20'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt=""
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                  <p className='text-lg mb-8'>
                    A Passionate Computer Engineering with skills in Data Science as 
                well as React.Looking forward to creating userfriendly yet secure web 
                applications with data insights for helping businesses grow and 
                improve user experience .
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>HTML,CSS & JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500
                      h-2.5 rounded-full transform transition-transform duration-300
                      hover:scale-105 w-10/12'>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>React Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500
                      h-2.5 rounded-full transform transition-transform duration-300
                      hover:scale-105 w-9/12'>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>SQL</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500
                      h-2.5 rounded-full transform transition-transform duration-300
                      hover:scale-105 w-10/12'>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>Spring Boot</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500
                      h-2.5 rounded-full transform transition-transform duration-300
                      hover:scale-105 w-8/12'>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>Java</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500
                      h-2.5 rounded-full transform transition-transform duration-300
                      hover:scale-105 w-10/12'>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <label htmlFor='htmlandcss' className='w-2/12'>Python</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500
                      h-2.5 rounded-full transform transition-transform duration-300
                      hover:scale-105 w-10/12'>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                      0+
                    </h3>
                    <p>Years Experience</p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                      10+
                    </h3>
                    <p>Projects Completed</p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                      0+
                    </h3>
                    <p>Happy Clients</p>
                  </div>

                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About