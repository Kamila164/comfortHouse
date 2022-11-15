import React from 'react';

const SliderContent = ({ activeIndex, imageSlider }) => {
    return(
        <section className="sliders">
            {imageSlider.map((slide, index) => 
              <div 
                key={index} 
                className={index === activeIndex ? "slides active" : "inactive"}
              >
                  <img src={slide.urls} alt="" className="slide-image" />
              </div>
            )}
            
        </section>
    )
};

export default SliderContent;