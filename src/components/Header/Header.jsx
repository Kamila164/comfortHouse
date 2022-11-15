import React, { useEffect, useState } from 'react';
import './header.css';
import Logo from '../../assets/Logo.png';
import Menu from '../../assets/menu.png';
import Close from '../../assets/close.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import { Link } from 'react-scroll';

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if(window.innerWidth > 720) {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return(
        <div className="header">
            <img className='logo' src={Logo} alt="" />
            <ul 
                className={isMobile ? "header-menu-mobile" : "header-menu"}
                onClick={() => setIsMobile(false)}
            >
                <li>
                    <Link
                        to='advantage'
                        span={true}
                        smooth={true}
                    >Преимущества</Link>
                </li>
                <li>
                    <Link
                        to='purchase'
                        span={true}
                        smooth={true}
                    >Способы оплаты</Link>
                </li>
                <li>
                    <Link
                        to='about'
                        span={true}
                        smooth={true}
                    >Объекты</Link>
                </li>
                <li>
                    <Link
                        to='construction'
                        span={true}
                        smooth={true}
                    >Ход строительства</Link>
                </li>
                <li>
                    <Link
                        to='apartments'
                        span={true}
                        smooth={true}
                    >Планировки</Link>
                </li>
                <li>
                    <Link
                        to='footer'
                        span={true}
                        smooth={true}
                    >Контакты</Link>
                </li>
                <li className="mobile-social">
                   <li>
                    <a className='mobile-link' href="https://www.instagram.com/comfort_house.kg/" target="_blank">
                        <img className='mobile-btn' src={Instagram} alt="" />
                    </a>
                </li>
                <li>
                    <a className='mobile-link' href="https://www.facebook.com/people/Comfort-House/100083363258108/" target="_blank">
                        <img className='mobile-btn' src={Facebook} alt="" />
                    </a>
                </li> 
                </li>
                
            </ul> 
            <span>0770 76 77 76</span>
            <div 
                className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                    <img className='menu-icon' src={Close} alt=""/>
                ) : (
                    <img className='menu-icon' src={Menu} alt='' />
                )}
            </div>
        </div>
    )
};

export default Header;