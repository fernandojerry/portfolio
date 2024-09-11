import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "./Slider-theme.css";
import PortfolioCard from './PortfolioCard'







function SimpleSlider({teams}) {
  const settings = {
    dots: false,
    autoplaySpeed: 6000,
    autoplay: true,
    infinite: true,
    speed: 700,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  };
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
  );
}

export default SimpleSlider;