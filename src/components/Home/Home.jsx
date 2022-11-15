import React from 'react';
import Header from '../Header/Header';
import './home.css';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import mainImage from '../../assets/mainImage.png';
import { Link } from 'react-scroll';



const Home = () => {
    return(
        <div className="home">
            <Header />
            <div className="main-info">
                <div className="left">
                    <div className="title-text">
                         <div>
                             <h1 className='text-style'>Квартиры</h1>
                         </div>
                         <div>
                             <h1>Бизнес-класса</h1>
                        </div>
                        <div className="description">
                            <p>Мы строим дома только на красной книге, добиваясь 
                               высокого качества и соблюдая сроки</p>
                        </div>
                     </div>
                     {/* Social Button */}
                        <div className="social-button">
                            <a className='home-link' href="https://www.instagram.com/comfort_house.kg/" target="_blank">
                                <img className='btn' src={Instagram} alt="" />
                            </a>
                            <a className='home-link' href="https://www.facebook.com/people/Comfort-House/100083363258108/" target="_blank">
                                <img className='btn' src={Facebook} alt="" />
                            </a>
                            <p className="home-btn">
                                <Link
                                    to='apartments'
                                    span={true}
                                    smooth={true}
                                    >Планировки
                                </Link>
                                </p>
                        </div>
                </div>
                <div className="right">
                    <img src={mainImage} alt="" className="mainImage" />
                </div>
            </div>
        </div>
    )
};

export default Home;