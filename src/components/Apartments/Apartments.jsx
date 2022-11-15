import React, { useState } from "react";
import './apartments.css';
import { apartments } from "../../apartmentsData";
import { useEffect } from "react";

const allCategory = [...new Set(apartments.map((item) => item.category)) ]
const Apartments = () => {

    const [list, setList] = useState(apartments)
    const [category, setCategory] = useState(allCategory)

    const filterCategories = (category) => {
        const newItems = apartments.filter((item) => item.category === category)
        setList(newItems)
    }

    useEffect(() => {
        filterCategories(category[0])
    }, [])

    return(
        <div className="apartments">
            <div className="apartments-container">
                <h2 className='main-title apartments-title'>Выберите планировку</h2>
                <div className="catButton">
                    {category.map((category) => (
                        <button className="primeryBtn" onClick={() => filterCategories
                            (category)}>
                                {category}
                            </button>
                    ))}
                </div>
            </div>
            <div className="apartments-content">
                {list.map((items) => (
                    <div className="apartments-box">
                        <img className="apartmentsImg" src={items.imgUrl} alt="" />
                        <h3 className="box-title">{items.title}</h3>
                        <div className="apartmentsBtn">
                            <a href="https://wa.me/996770767776?text=Меня%20интересует%20стоимость%20планировки..." target="_blank">
                                <button className="price">Узнать стоимость</button>
                            </a>
                            <a className="tour" href={items.urlTour} target="_blank">3D-тур</a>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Apartments;