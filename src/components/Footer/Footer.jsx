import React from "react";
import './footer.css';
import Instagram from '../../assets/instagramFooter.png';
import Facebook from '../../assets/facebookFooter.png';
import { Link } from 'react-scroll';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-item">
                <ul className="item-list item-nav">
                    <li className="item-title">Навигация по сайту</li>
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
                </ul>
            </div>
            <div className="footer-item">
            <ul className="item-list">
                    <li className="item-title">Контакты</li>
                    <li>0770 76 77 76</li>
                    <li>0504 76 77 76</li>
                    <li>0553 76 77 76</li>
                    <li>г.Бишкек, 12 мкр. 75</li>
                </ul>
            </div>
            <div className="footer-item">
                <h5 className="item-title">Социальные сети</h5>
                <a href="https://www.instagram.com/comfort_house.kg/" target="_blank">
                    <img className="footer-icon" src={Instagram} alt="" />
                </a>
                <a href="https://www.facebook.com/people/Comfort-House/100083363258108/" target="_blank">
                    <img className="footer-icon" src={Facebook} alt="" />
                </a>
            </div>
        </div>
    )
};

export default Footer;