import React, {useState} from 'react';
import './scrollArrow.css'
import scrollArrow from '../../assets/scrollArrow.png';

const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 700){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  
    return (
        <div className='arrow-container'>
            <img 
                src={scrollArrow} 
                alt="" 
                className="scrollTop"
                onClick={scrollTop}
                style={{height: 40, display: showScroll ? 'flex' : 'none'}}
                />
        </div>
          
    );
  }
  
  export default ScrollArrow;