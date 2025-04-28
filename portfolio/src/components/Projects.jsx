import React from 'react'
import employeeMSImage from '../assets/image.png';
import bookMSImage from '../assets/download.png';
import project1Image from '../assets/Untitled.jpg';
import project2Image from '../assets/Untitled1.jpg';
import project3Image from '../assets/Untitled2.jpg';
import project4Image from '../assets/Untitled3.png';

const projects = [
    {
      id: 1,
      name: "Power Demand Forecasting",
      image: employeeMSImage,
      technologies: "Python , ML",
      github: "https://github.com/rohinibhoir/Power-demand-forcasting-using-ARIMA-and-SARIMA",
    },
    {
      id: 2,
      name: "Employee Churn Prediction",
      image: bookMSImage,
      technologies: "Python, ML",
      github: "https://github.com/rohinibhoir/DBMS",
    },
    {
      id: 3,
      name: "Steganography Using Image Encoding Using LSB Technique",
      image: project1Image,
      technologies: "Python, OpenCV",
      github: "https://github.com/rohinibhoir/DBMS",
    },
    {
      id: 4,
      name: "Expense Tracker",
      image: project2Image,
      technologies: "HTML , CSS , JS",
      github: "https://github.com/rohinibhoir/DBMS",
    },
    {
      id: 5,
      name: "Question Paper Generator",
      image: project3Image,
      technologies: "Python, Django",
      github: "https://github.com/rohinibhoir/DBMS",
    },
    {
      id: 6,
      name: "Dark & Light Mode",
      image: project4Image,
      technologies: "React, Tailwind CSS",
      github: "https://github.com/rohinibhoir/DBMS",
    },
];
  

const Projects = () => {
  return (
    <div className=' w-screen min-h-screen bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project =>(
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105'>
                        
                        <img src={project.image} alt={project.name} className='rounded-lg
                        mb-4 w-full h-48 object-cover'/>
                        
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>

                        <p className='text-gray-400 mb-4'>{project.technologies}</p>

                        <a href={project.github} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank'
                        rel='noopener noreferrer'>GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default Projects