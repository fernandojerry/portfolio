import React from 'react';
import { LinkedIn, GitHub } from '@mui/icons-material';
import HeroBg from '../Assets/Images/hero.png';
import './Pages.css';

function Home() {
  return (
    <section id="home" className="bg-dark py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          {/* Text Column */}
          <div className="text-white flex flex-col justify-center items-start mb-8 md:mb-0 md:mr-8 w-full md:w-1/2">
            <h1 className=" text-4xl md:text-5xl font-bold leading-tight mb-4">
              Front-End React <br /> <span className="text-primary"> Developer.</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hi, I'm <strong className="font-semibold">Jerry Nwadinobi</strong>. I specialize in building scalable, user-friendly frontend products that prioritize seamless user experiences.
            </p>
            <button className=" text-blue-600 border-2 border-blue-700  font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300">
              Let's Work Together
            </button>
            {/* Social Links 
            
                     <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/jerry-nwadinobi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <LinkedIn />
              </a>
              <a href="https://github.com/fernandojerry" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                <GitHub />
              </a>
            </div>
            
            */}
     
          </div>
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full hero-design">
              <img src={HeroBg} alt="Hero Background" className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
