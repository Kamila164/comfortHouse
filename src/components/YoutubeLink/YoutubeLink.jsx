import React from 'react';
import './youtubelink.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const YoutubeLink = () => {
        return (
            <div className="youtube-link">
                <hr />
                <div className="yt-content">
                    <div className="yt-title">
                        <ScrollAnimation animateIn='animate__slideInDown'>
                        <h2 className='main-title'>Видео презентация</h2>
                        <p className='border-title yt-border'></p>
                        </ScrollAnimation>
                    </div>
                    <iframe 
                      className='youtube-video' 
                      height="600" 
                      src="https://www.youtube.com/embed/_xBU16uHkCw" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>
                </div>
                
                <hr />
            </div>
        )
      }

export default YoutubeLink;