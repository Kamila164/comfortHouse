import React from 'react';
import LeftArrow from '../../assets/left.png';
import RightArrow from '../../assets/next.png';

const Arrows = ({ prevSlide, nextSlide }) => {
    return(
        <div className="arrow">
            <span className="prev" onClick={prevSlide}><img className='prev-icon' src={LeftArrow} alt="" /></span>
            <span className="next" onClick={nextSlide}><img className='next-icon' src={RightArrow} alt="" /></span>
        </div>
    )
};

export default Arrows;