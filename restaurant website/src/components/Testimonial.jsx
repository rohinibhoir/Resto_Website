import React from 'react';
import Slider from 'react-slick';
import PLImage from '../assets/PL.png'; // make sure your image path is correct

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const testimonialData = [
  {
    id: 1,
    name: "Rohini",
    text: "Nice Food",
    img: PLImage
  },
  {
    id: 2,
    name: "Rohini",
    text: "Nice Food",
    img: PLImage
  },
  {
    id: 3,
    name: "Rohini",
    text: "Nice Food",
    img: PLImage
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className='py-10'>
      <div className='container mx-auto px-4'>

        {/* Header Section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#f59e0b] to-[#ff9c01]'>
            Testimonial
          </p>
          <h1 className='text-3xl font-bold'>Testimonial</h1>
          <p className='text-base text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt
            explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?
          </p>
        </div>

        {/* Testimonial Section */}
        <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
          <Slider {...settings}>
            {
              testimonialData.map(({ id, name, text, img }) => (
                <div key={id} className='my-6'>
                  <div className='relative flex flex-col justify-center items-center gap-4 text-center shadow-lg p-8 mx-4 rounded-xl bg-[#fff7e6] dark:bg-[#fff7e6] transition-all duration-500'>

                    <img 
                      src={img} 
                      alt={name} 
                      className='rounded-full w-24 h-24 object-cover' 
                    />

                    <p className='text-gray-800 text-sm'>{text}</p>
                    <h1 className='text-xl font-bold text-gray-900'>{name}</h1>

                    {/* Quote Icon */}
                    <p className='text-gray-300 text-9xl font-serif absolute top-0 right-4'>
                      “
                    </p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
