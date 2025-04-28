import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import "aos/dist/aos.css";
import AOS from "aos";
import Contact from './components/Contact';
import About from './components/About';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <>
    <div>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Banner />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default App 


