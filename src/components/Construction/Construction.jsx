import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './construction.css';
import { instagramContent } from "../../instagramData";
import Like from '../../assets/heart.png';
import Chat from '../../assets/chat.png';
import Send from '../../assets/send.png';
import Bookmark from '../../assets/save.png';
import Inst from '../../assets/inst.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Clients extends Component{
    render() {
        const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
                breakpoint: 620,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            
          ]
        };
        return (
            <div className="construction">
              <ScrollAnimation animateIn="animate__slideInLeft">
                <h2 className='main-title'>Ход сроительства</h2>
                <p className='border-title'></p>
              </ScrollAnimation>
            <Slider {...settings}>
            {instagramContent.map((items) => (
                <div className="inst-boxes">
                    <div className="inst-box">
                        <a href={items.link} target="_blank">
                        <div className="inst-box-title">
                            <img src={items.avatar} alt="" className="inst-avatar" />
                            <span>{items.username}</span>
                            <button className="inst-btn">{items.txtBtn}</button>
                        </div>
                        <div className="inst-content">
                            <img src={items.imgUrl} className="inst-photo" alt="" />
                        </div>
                        
                        <span className="inst-more">{items.txtMore}</span>
                        <p className="border"></p>
                        <div className="inst-icons">
                            <div className="inst-icon-left">
                               <img src={Like} alt="" className="inst-icon icon-like" />
                               <img src={Chat} className=" inst-icon icon-chat" alt="" />
                               <img src={Send} className="inst-icon icon-send" alt="" />
                            </div>
                            <div className="inst-icon-right">
                            <img src={Bookmark} className="inst-icon" alt="" />
                            </div>
                        </div>
                        <p className="border"></p>
                        <div className="inst-comment">
                            <div className="comment-left">
                                <span>{items.txtComment}</span>
                            </div>
                            <div className="comment-right">
                                <img src={Inst} className="inst-icon" alt="" />
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                ))}
            </Slider>
          </div>
        );
      }
    }