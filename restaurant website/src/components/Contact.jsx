import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Show notification
    setShowNotification(true)

    // Clear input fields
    setName('')
    setEmail('')
    setMessage('')

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  return (
    <div className='w-screen min-h-screen bg-white text-black py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>

        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Let's Talk
            </h3>

            <p className='mb-6'>
              I'm open to discussing full-stack development, web development, Python development projects or partnership opportunities.
            </p>

            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:youremail@example.com" className='hover:underline'>
                rohinibhoir54@gmail.com
              </a>
            </div>

            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+91 7709399340</span>
            </div>

            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Pune</span>
            </div>
          </div>

          <div className='flex-1 w-full relative'>
            
            {showNotification && (
              <div className='absolute -top-14 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50'>
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block mb-2'>Your Name</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full p-2 rounded bg-gray-100 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='block mb-2'>Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full p-2 rounded bg-gray-100 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='block mb-2'>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full p-2 rounded bg-gray-100 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows='5'
                  placeholder='Enter Your Message'
                  required
                />
              </div>

              <button
                type='submit'
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
