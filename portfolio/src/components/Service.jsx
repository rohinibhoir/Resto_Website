import React, { useState } from 'react'

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    details: "We focus on creating modern and user-centric UI/UX designs, optimizing usability and aesthetics for a seamless user journey."
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    details: "Using React, Tailwind CSS, and modern JS frameworks to build dynamic, performant, and responsive interfaces."
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    details: "Expertise in Node.js, Express, REST APIs, and MongoDB/MySQL to manage data and ensure secure, scalable backends."
  },
  {
    id: 4,
    title: "Full Stack Development",
    description: "Combining both frontend and backend development skills.",
    details: "Bringing the best of both worlds by building complete web apps with seamless integration of frontend and backend."
  },
  {
    id: 5,
    title: "Data Science",
    description: "Harnessing data to uncover patterns, make predictions, and drive decisions.",
    details: "Using Python, Pandas, ML models, and visualization tools to analyze data and build smart insights for businesses."
  },
]

const Service = () => {
  const [selectedService, setSelectedService] = useState(null)

  const handleClose = () => setSelectedService(null)

  return (
    <div className='w-screen min-h-screen bg-black text-white py-20' id='services'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(service => (
            <div
              key={service.id}
              className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
            >
              <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                {service.id}
              </div>
              <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                {service.title}
              </h3>
              <p className='mt-2 text-gray-300'>{service.description}</p>
              <button
                onClick={() => setSelectedService(service)}
                className='mt-4 inline-block text-green-400 hover:text-blue-500'
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-in Panel */}
      {selectedService && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end'>
          <div className='w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-gray-900 p-6 rounded-l-xl shadow-xl transform translate-x-0 transition-transform duration-300'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                {selectedService.title}
              </h3>
              <button
                onClick={handleClose}
                className='text-red-400 text-xl font-bold hover:text-red-600'
              >
                ✖
              </button>
            </div>
            <p className='text-gray-300'>{selectedService.details}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Service
