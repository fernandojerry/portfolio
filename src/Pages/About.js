import React from 'react';
import HeroBg from '../Assets/Images/hero.png';

function About() {
  return (
    <section id="about" className="bg-gray-100 py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full">
              <img 
                src={HeroBg} 
                alt="About Image" 
                className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8">
            <h6 className="text-blue-600 text-lg uppercase font-bold mb-2 animate-fade-in">
              About Me
            </h6>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4 animate-fade-in delay-1">
              I am a dedicated frontend developer based in Enugu, Nigeria, with years of experience and a track record of building scalable front-end projects with great user experience. I am passionate about learning and development, with a desire to tackle complex problems by applying my skills to find ways to maximize user efficiency. I am adept at both independent and collaborative projects, with an emphasis on landing page and website development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
