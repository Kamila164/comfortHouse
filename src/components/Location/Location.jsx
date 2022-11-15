import React from "react";
import './location.css';
import LocationIcon from '../../assets/location.png';
import ContactIcon from '../../assets/telephone.png';
import mapL from '../../assets/mapL.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Location = () => {
    return(
        <div className="location">
            <div className="location-title">
                <h2 className='main-title'>Расположение</h2>
            <p className='border-title'></p>
            </div>
            <div className="location-container">
               <div className="location-left">
                <div className="location-desc">
                    <p>
                        ЖК Rich Home расположен на пересечении улиц Алматинская и Южная магистраль. 
                        Благодаря панорамным окнам с южной стороны открывается вид на белоснежные
                        горы, а с западной стороны можете наблюдать ботанический сад. 
                        Такое расположение позволяет круглый год наслаждаться прохладным свежим воздухом.
                    </p>
                </div>
                </div> 
                <div className="location-right">
                <div className="location-block">
                    <div className="location-address-icon">
                        <img className="location-icon" src={LocationIcon} alt="" />
                    </div>
                    <div className="location-address-text">
                        <h5>Адрес</h5>
                        <p>г.Бишкек, ул. Конур Осмон, 6/1</p>
                        <a href="https://2gis.kg/bishkek/geo/70030076367946295?m=74.648448%2C42.813156%2F16%2Fr%2F43.62" target="_blank">Посмотреть в 2GIS</a>
                    </div>
                </div>
                <div className="location-block">
                    <div className="location-address-icon">
                        <img className="location-icon" src={ContactIcon} alt="" />
                    </div>
                    <div className="location-address-text">
                        <h5>Контакты</h5>
                        <p>0770 76 77 76</p>
                        <p>0504 76 77 76</p>
                        <p>0553 76 77 76</p>
                    </div>
                </div>
            </div>
            </div>
            <ScrollAnimation animateIn="animate__slideInLeft">
            <div className="l-map">
                <img src={mapL} alt="" />
            </div>
            </ScrollAnimation>
        </div>
    )
};

export default Location;