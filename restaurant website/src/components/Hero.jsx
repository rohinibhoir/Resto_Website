import React from 'react';
import bgImage from '../assets/website/img.png';
import Food1 from '../assets/website/b1.png'; 
import Food2 from '../assets/website/b2.png';
import Food3 from '../assets/website/b3.png';

const ImageList = [
  { id: 1, img: Food1 },
  { id: 2, img: Food2 },
  { id: 3, img: Food3 },
];

const changeImage = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(Food1);

  return (
    <>
      <div style={changeImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center '>
        <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* Text content */}
            <div 
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-black'>
              Welcome to the <span className="bg-gradient-to-r from-[#f59e0b] to-[#ff9c01] bg-clip-text text-transparent">Foodie</span> Zone
              </h1>

              <p className="text-sm text-black leading-relaxed sm:text-base md:text-lg space-y-2">
                <span className="block">At <span className="font-semibold text-yellow-500">
                Foodie Zone</span>, where every bite is a vibe! ✨ Crafted with heart, spiced 
                with soul. 🌶️🌍 From bold eats to sweet treats 🍰, we've got your cravings 
                covered. ❤️ Eat in
                </span>
                <span className="block mt-4">📍 Dine in • 🚗 Takeaway • 📦 Delivery</span>
              </p>

              <div>
                <button className='bg-gradient-to-r from-[#f59e0b] to-[#ff9c01] text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
                  Order Now
                </button>
              </div>
            </div>

            {/* Image section */}
            <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
              {/* Main image */}
              <div 
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-once="true"
              className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                <img src={imageId} alt="food" className='w-[300px] sm:w-[450px] mx-auto spin' />
              </div>

              {/* Image list */}
              <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    alt={`Food ${item.id}`}
                    className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                    onClick={() => setImageId(item.img)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
