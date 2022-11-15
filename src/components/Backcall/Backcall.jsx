import React, { useRef } from "react";
import './backcall.css';
import emailjs from '@emailjs/browser';

const Backcall = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3eqpvob', 'template_xkzy4ov', form.current, 'wMBouqp9EMGfsDvk0')
          .then((result) => {
              alert("Сообщение отправлено");
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="backcall">
            <h2 className="backcall-title">Перезвоним</h2>
            <p className="backcall-title">в течении 15 минут</p>
            <div className="backcall-form">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="text" name="user-name" placeholder="Имя" autocomplete="off" required/>
                    <input type="tel" name="user-phone" placeholder="Телефон" pattern="[0-9]{10,13}" autocomplete="off" required/>
                    <div className="btn-req">
                        <button>Оставить заявку</button>
                    </div>
                </form>
                
            </div>
            
        </div>
    )
};

export default Backcall;