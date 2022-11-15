import React, { useState } from "react";
import './purchase.css';
import { purchase } from "../../purchaseData";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Purchase = () => {
    const [currentTab, setCurrentTab] = useState('2');
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return(
        <div className="purchase">
            <ScrollAnimation animateIn="animate__slideInLeft">
            <h2 className='main-title'>Условия покупки</h2>
            <p className='border-title'></p>
            </ScrollAnimation>
            <div className="btnPurchase">
                {purchase.map((item, i) => 
                    <button
                        key={i}
                        id={item.id}
                        disabled={currentTab === `${item.id}`}
                        onClick={(handleTabClick)}
                    >
                        {item.category}
                    </button>
                )}
            </div>
            <div className="purchaseContent">
                {purchase.map((item, i) =>
                    <div key={i} className="purchaseText">
                        {currentTab === `${item.id}` &&
                            <div>
                                <h4 className='purchaseTitle'>{item.title}</h4>
                                <p className="purchaseDesc">{item.content}</p>
                                <p className="descPluse">{item.desc}</p>
                                <p className="p-block">{item.descOne}</p>
                                <p className="p-block">{item.descTwo}</p>
                                <p className="p-block">{item.descThree}</p>
                            </div>
                        }
                    </div>
                )}
                {purchase.map((item, i) =>
                    <div key={i} className="purchaseImage">
                        {currentTab === `${item.id}` &&
                            <div>
                                <img className="p-image" src={item.image} alt="" />
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
};

export default Purchase;