import React from 'react';
import './about.css';
import SkyScrapper from '../../assets/skyscrapper.png';
import AboutImg from '../../assets/about-img.jpg';
import BluePrint from '../../assets/blueprint.png';
import Ceiling from '../../assets/ceiling.png';
import Utilities from '../../assets/utilities.png';
import Windows from '../../assets/windows.png';
import Nature from '../../assets/nature.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const About = () => {
    return(
        <div className='about'>
            <div className="about-title">
                    <h2 className='main-title'>Rich Home</h2>
                    <p className='border-title'></p>
                </div>
                <div className="about-container">
                     <div className="left-a">
                <div className="about-desc">
                    <p>
                       <span className='upper'>Rich Home </span> - это жилой комплекс бизнес-класса
                       расположенный в тихом и экологически чистом 
                       районе города для ценителей настоящего 
                       комфорта.
                    </p>
                </div>
                <div className="about-list">
                    <div className="about-block">
                        <img src={SkyScrapper} alt="" className="about-icon" />
                        <h5 className='about-list-title'>12 этажей</h5>
                    </div>
                    <div className="about-block">
                        <img src={BluePrint} alt="" className="about-icon" />
                        <h5 className='about-list-title'>99 квартир</h5>
                    </div>
                    <div className="about-block">
                        <img src={Ceiling} alt="" className="about-icon" />
                        <h5 className='about-list-title'>высота потолков 3,3 метра</h5>
                    </div>
                    <div className="about-block">
                        <img src={Utilities} alt="" className="about-icon" />
                        <h5 className='about-list-title'>газификация, центральное водоснабжение</h5>
                    </div>
                    <div className="about-block">
                        <img src={Windows} alt="" className="about-icon" />
                        <h5 className='about-list-title'>5 камерные панорамные окна</h5>
                    </div>
                    <div className="about-block">
                        <img src={Nature} alt="" className="about-icon" />
                        <h5 className='about-list-title'>вид на горы и на ботанический сад</h5>
                    </div>
                </div>
            </div>
            <div className="right-a">
                <ScrollAnimation animateIn='animate__slideInRight'>
                <img src={AboutImg} alt="" className="about-img" />
                </ScrollAnimation>
            </div>
                </div>
           
            
        </div>
    )
};

export default About;