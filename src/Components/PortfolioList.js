import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "./Slider-theme.css";
import PortfolioCard from './PortfolioCard'


const PortfolioList = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div >
    <Slider {...settings}>
      {
        data.map((item, index) => (
      <div key={index} className='px-2'>
        <PortfolioCard item={item} />
      </div>
    ))
      
      }
      
    </Slider>
  
  </div>
  )
}

export default PortfolioList
