import React from 'react';

const About = () => {
  return (
    <section className="about-section bg-lightgray rounded-lg mx-auto max-w-4xl p-5 shadow-xl">
      <h1 className="text-center text-4xl mt-8 text-dark">About Us</h1>
      <h3 className="text-center text-xl text-gray-700 mt-4 mb-8 max-w-4xl mx-auto">
        Revolutionizing Education with AI-Powered Question Paper Generation
      </h3>
      <div className="about-info flex flex-wrap justify-center items-center text-justify text-black">
        <div className="about-img m-5 flex-1 max-w-[300px]">
          <img src="/src/assets/logo1.webp" alt="Logo" className="w-full max-w-[300px] rounded-lg shadow-lg" />
        </div>
        <div className="about-text flex-2 p-5 text-black">
          <p className="text-lg mb-5">
            Welcome to the future of education! Our *Question Paper Generator System* leverages cutting-edge AI technology to create personalized, curriculum-based question papers in minutes. Educators no longer need to spend hours designing tests, as our system streamlines the entire process, ensuring accuracy, efficiency, and variety.
          </p>
          <p className="text-lg mb-5">
            With an intuitive interface and robust algorithms, this system adapts to diverse learning levels, subject areas, and question formats. Whether it's for schools, colleges, or training institutes, we aim to redefine the traditional examination process with seamless automation and smarter tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
