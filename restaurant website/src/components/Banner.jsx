import React from 'react';
import Food1 from '../assets/website/b1.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className='min-h-[550px]'>
      <div>
        <div
          data-aos="slide-up"
          data-aos-duration="300"
          className='container'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Image Section */}
            <div>
              <img
                src={Food1}
                alt="Delicious Food"
                className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'
              />
            </div>

            {/* Text-content Section */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
              <h1 className='text-3xl sm:text-4xl font-bold'>Lorem, ipsum.</h1>
              <p className='text-sm text-gray-500 tracking-wide leading-5'>
                Enjoy the best meals from your favorite restaurants, delivered right to your door.
              </p>

              <div className='flex gap-6'>
                <div>
                  <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400' />
                </div>
                <div>
                  <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400' />
                </div>
                <div>
                  <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400' />
                </div>
              </div>

              <div>
                <button className='bg-gradient-to-r from-[#f59e0b] to-[#ff9c01] text-white px-6 py-3 rounded-full hover:scale-105 duration-200'>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
