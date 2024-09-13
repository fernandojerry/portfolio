import React from 'react';
import about from '../Assets/Images/about.jpeg';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="bg-gray-100 py-5 px-3">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full">
              <img 
                src={about} 
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
            <p className="text-gray-700 text-base leading-relaxed mb-4 animate-fade-in delay-1">
             I am Jerry Nwadinobi, a passionate frontend developer based in Enugu, Nigeria, with a proven track record of delivering scalable and visually engaging web solutions. With several years of experience, I specialize in creating seamless user experiences and responsive designs that drive both functionality and aesthetics. <br /><br />My focus is on building intuitive, user-centric websites that solve real-world problems. I thrive on tackling complex challenges, continuously learning new technologies, and optimizing processes to improve performance and efficiency. Whether working independently or as part of a team, I bring a collaborative mindset and a commitment to delivering high-quality results. <br /><br />I am particularly skilled in building responsive landing pages, interactive web applications, and ensuring cross-browser compatibility. With a passion for web development, I aim to leverage my expertise to help businesses create impactful online presences that engage and convert users.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
