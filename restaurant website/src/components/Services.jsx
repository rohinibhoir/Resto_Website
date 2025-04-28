import React from 'react';
import Food1 from '../assets/website/b1.png'; 

const ServicesData = [
  {
    id: 1,
    img: Food1,
    name: "Biryani1",
    description: "Hello",
  },
  {
    id: 2,
    img: Food1,
    name: "Chiken Kari",
    description: "Hello",
  },
  {
    id: 3,
    img: Food1,
    name: "Cold Cofee",
    description: "Hello",
  },
];

const Services = () => {
  return (
    <>
      <div className='py-10'>
        <div className='container mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#f59e0b] to-[#ff9c01]'>
              Our Services
            </p>
            <h1 className='text-3xl font-bold'>Services</h1>
            <p className='text-x5 text-gray-400'>Lorem, ipsum.</p>
          </div>

          {/* Card Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  key={id}
                  className='max-w-[300px] group rounded-2xl bg-white 
                  dark:hover:bg-[#f59e0b] hover:text-white duration-300 shadow-xl'
                >
                  {/* Image */}
                  <div className='-mt-10 flex justify-center'>
                    <img
                      src={img}
                      alt=""
                      className='w-24 h-24 rounded-full object-cover shadow-md 
                      group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300'
                    />
                  </div>

                  {/* Text */}
                  <div className='px-4 pt-4 pb-6 text-center'>
                    <h1 className='text-lg font-semibold'>{name}</h1>
                    <p className='text-gray-500 group-hover:text-white transition-colors duration-300 text-sm'>
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
