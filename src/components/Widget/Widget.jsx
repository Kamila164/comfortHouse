import React from 'react';
import './widget.css';
import callWidget from '../../assets/callwidget.png'
import WhatsappWidget from '../../assets/whatsappWidget.png'

const Widget = () => {
    return(
        <div className="widget">
            <ul className="multibutton-list">
                <li className="multibutton-item">
                    <a href="tel:+996504767776" className="multibutton-title">Позвонить нам</a>
                    <a href="tel:+996504767776" className="multibutton-icon">
                        <img src={callWidget} alt="" />
                    </a>
                </li>
                <li className="multibutton-item">
                    <a href="https://wa.me/996770767776" className="multibutton-title">Отправить сообщение</a>
                    <a href="https://wa.me/996770767776" className="multibutton-icon">
                       <img src={WhatsappWidget} alt="" /> 
                    </a>
                </li>
            </ul>
            <div className="multibutton-button">
                <img src={callWidget} alt="" />
            </div>
        </div>
    )
}

export default Widget;