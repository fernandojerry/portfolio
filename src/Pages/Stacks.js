import React from 'react';
import Stack from '../Components/Stack';
import html from '../Assets/Images/icons8-html-50.png';
import react from '../Assets/Images/icons8-react-50.png';
import css from '../Assets/Images/icons8-css-50.png';
import bootstrap from '../Assets/Images/icons8-bootstrap-50.png';
import js from '../Assets/Images/icons8-js-50.png';
import firebase from '../Assets/Images/icons8-firebase-50.png';

const Stacks = () => {
  return (
    <section id="stack" className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
        <p className="text-lg mb-12">
          A collection of technologies I use to build fast, scalable, and
          responsive applications.
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-6">
          <div className="flex flex-col items-center">
            <Stack image={html} name="HTML" />

          </div>
          <div className="flex flex-col items-center">
            <Stack image={css} name="CSS" />
          </div>
          <div className="flex flex-col items-center">
            <Stack image={js} name="JavaScript" />
            
          </div>
          <div className="flex flex-col items-center">
            <Stack image={react} name="React" />
  
          </div>
          <div className="flex flex-col items-center">
            <Stack image={bootstrap} name="Bootstrap" />
          
          </div>
          <div className="flex flex-col items-center">
            <Stack image={firebase} name="Firebase" />
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
