// src/Components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_API_KEY, // Replace with your EmailJS service ID
        process.env.REACT_APP_TEMPLATE_API_KEY, // Replace with your EmailJS template ID
      e.target,
      process.env.REACT_APP_USER_API_KEY, // Replace with your EmailJS user ID
    ).then((result) => {
      alert('Message Sent Successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <form onSubmit={handleSubmit} className=" mt-5 p-4 bg-white shadow-md rounded-lg space-y-4">
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        
      <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Name'
          className="mt-1  w-full bg-gray-100 px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Email'
          className="mt-1 w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
     
      <div>
        
        <input
          type="text"
          name="subject"
          placeholder='Subject'
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
    
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Message'
          className="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full inline-flex text-lg font-semibold justify-center py-4 px-4 border border-transparent shadow-sm  rounded-md text-white bg-blue-600 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
