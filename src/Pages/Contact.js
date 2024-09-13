import React from 'react'
import ContactForm from '../Components/ContactForm';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey} from '@mui/material/colors';
import { Container } from 'react-bootstrap';



function Contact() {
  return (
    <div id="contact" className=' bg-gray-900'>
      <Container className='pt-10 pb-4'>
        <h2 className="mb-5 text-center text-2xl text-white">Contact Us</h2>
        <div className="grid grid-cols-1 gap-5 text-white lg:grid-cols-2 mx-auto">
          <div>
          <div className='flex flex-col md:flex-row gap-2 items-start  justify-between'>
           <div className="flex gap-3 items-start justify-start">
           <div className='w-12 h-12  rounded-sm flex justify-center bg-blue-600 items-center'><EmailIcon style={{color: grey[100], fontSize: 'medium'}} /></div>
            <div>
              <h3 className=' text-start font-bold text-base '>Send Email</h3>
              <p className='font-semibold text-sm text-start '>jerrynwadinobi@gmail.com</p>

            </div>
           </div>
           <div className="flex gap-2 items-start justify-start">
           <div className='w-12 h-12 bg-blue-600 rounded-sm flex justify-center items-center'><PhoneIcon style={{color: grey[100], fontSize: 'medium'}} /></div>
            <div>
              <h3 className=' text-start font-bold text-base'>call</h3>
              <p className='font-semibold text-sm text-start'>+2347039456008</p>
              
            </div>
           </div>
            
          </div>
          <ContactForm />
          </div>
          
          <div className=''>
          <div className='flex gap-3 items-start lg:justify-center mb-12'>
            <div className='w-12 bg-blue-600 h-12 bg-primary-300 rounded-sm flex justify-center items-center'><LocationOnIcon style={{color: grey[100], fontSize: 'medium'}} /></div>
            <div>
              <h3 className='text-start font-bold text-base '>Map</h3>
              <p className='font-semibold text-base text-start '>Enugu, Nigeria</p>
            </div>
          </div>
            <div className="w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253736.51112071058!2d7.348147017872404!3d6.441153462411022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3cf887d1a25%3A0x9e342e82908e0c3d!2sEnugu%2C%20Nigeria!5e0!3m2!1sen!2sch!4v1726147088923!5m2!1sen!2sch"       width="600"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}

export default Contact
