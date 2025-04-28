import React, { useEffect, useState } from 'react';
import darkPng from '../assets/website/d-m-b.png'; 
import lightPng from '../assets/website/light-mode-button.png'; 

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative w-14 h-14">
      {/* Dark Mode Icon */}
      <img
        src={darkPng}
        alt=""
        onClick={changeTheme}
        className={`w-12  cursor-pointer absolute top-5 right-0 transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Light Mode Icon */}
      <img
        src={lightPng}
        alt=""
        onClick={changeTheme}
        className={`w-12 cursor-pointer absolute top-5 right-0 transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default DarkMode;
