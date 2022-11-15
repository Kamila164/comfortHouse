import React, { useState } from "react";
import SliderContent from "./SliderContent";
import imageSlider from '../../dataCarousel';
import Arrows from "./Arrows";
import Dots from "./Dots";
import './slider.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const len = imageSlider.length - 1;

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <div className="slider">
            <ScrollAnimation animateIn="animate__slideInLeft">
            <div className="slider-title">
            <h2 className='main-title'>Галерея</h2>
            <p className='border-title'></p>
            </div>
            </ScrollAnimation>
            <div className="slider-container">
                <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
                <Arrows 
                    prevSlide={() =>
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    }
                />
                <Dots 
                    activeIndex={activeIndex} 
                    imageSlider={imageSlider} 
                    onClick={activeIndex => setActiveIndex(activeIndex)}
                />
            </div>
            
        </div>
    )
};

export default Slider;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import './slider.css';
// import imageSlider from '../../dataCarousel';

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div className="slider">
//         <div className="slider-title">
//              <h2 className='main-title'>Галерея</h2>
//              <p className='border-title'></p>
//              </div>
//         <Slider {...settings}>
//         {imageSlider.map((slide, index) => 
//               <div className="slider-container">
//                   <img src={slide.urls} alt="" className="slide-image" />
//               </div>
//             )}
//         </Slider>
//       </div>
//     );
//   }
// }