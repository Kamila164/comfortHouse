import React, { Component } from "react";
import Slider from "react-slick";
import './clients.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clients } from "../../clientsData";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Clients extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="clients">
        <ScrollAnimation animateIn="animate__slideInLeft">
        <h2 className='main-title'>Наши клиенты</h2>
        <p className='border-title'></p>
        </ScrollAnimation>
        <Slider {...settings}>
          {clients.map((items) => 
              <div className="clients-items">
                  <div className="client-item">
                      <img className="clients-img" src={items.image} alt="" />
                  </div>
              </div>
          )}
        </Slider>
      </div>
    );
  }
}