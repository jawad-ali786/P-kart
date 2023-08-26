import React, { useState } from 'react';
import Swiper from 'react-id-swiper';




import 'swiper/css/swiper.css';

const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  lazy: true,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1000,
  spaceBetween: 0,
  effect: 'slide',
  autoplay: true,
};





const Slider = () => {




  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.9;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img   src='https://res.cloudinary.com/df6uhxehr/image/upload/v1671027040/Slider/slider-7_lghvav.jpg' alt='image7' />
        </div>
        
      </div>
      <div className='hero-slide'>
       
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='https://res.cloudinary.com/df6uhxehr/image/upload/v1670788770/Slider/slider-1_tc0wfp.jpg' alt='image1'  />
        </div>
      </div>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='https://res.cloudinary.com/df6uhxehr/image/upload/v1670788770/Slider/slider-2_uqwylh.jpg' alt='image2' />
        </div>
      </div>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='https://res.cloudinary.com/df6uhxehr/image/upload/v1670788770/Slider/slider-3_wzzzah.jpg' alt='image3' />
        </div>
      </div>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='https://res.cloudinary.com/df6uhxehr/image/upload/v1670788770/Slider/slider-4_qibg7r.jpg' alt='image3' />
        </div>
      </div>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='https://res.cloudinary.com/df6uhxehr/image/upload/v1671026740/Slider/slider-5_sobb3x.jpg' alt='image3' />
        </div>
      </div>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img   src='https://res.cloudinary.com/df6uhxehr/image/upload/v1670788770/Slider/slider-6_rfit4n.jpg' alt='image3' />
        </div>
        
      </div>
    
      
    </Swiper>
  );
};

export default Slider;
