import React, { useEffect, useRef, useState } from 'react'; 
import PagesDisplay from './PagesDisplay';

export default function FormattedStory({story}){
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const [touchStart, setTouchStart] = useState(null);
    const [storyContainerStartPosition, setStoryContainerStartPosition]= useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const storyContainerRef = useRef(null);
    const paragraphs = story.split('\n\n');
    paragraphs.shift();
    const paragraphsLength = paragraphs.length;
    const containerWidth = screenWidth * paragraphsLength;
    const today = new Date();

    const handleTouchStart = (e) => {
        console.log(e)
        setTouchStart(e.changedTouches[0].clientX)
    }

    const handleTouchEnd = (e) => {
        const touchEndCLientX= e.changedTouches[0].clientX;
        const difference = touchStart - touchEndCLientX
        if(difference > 80){
            if(currentIndex === paragraphsLength - 1){
                return
            }
            else {
                setCurrentIndex(currentIndex + 1)
                setStoryContainerStartPosition(storyContainerStartPosition - screenWidth)
            }   

        }
        else if(difference < -80){
            if(currentIndex === 0){
                return 
            }
            else {
                setCurrentIndex(currentIndex - 1)
                setStoryContainerStartPosition(storyContainerStartPosition + screenWidth)
            }
        }
    }


    return (
        <div>
            <div className='story-container' ref={storyContainerRef} style={{transform:`translateX(${storyContainerStartPosition}px)`, width:`${containerWidth}px`}}>
                {paragraphs.map((paragraph, i) => {
                const headerClass = 'story-title'
                return (
                    <div key={i}  className={i===0 ? headerClass : null} onTouchStart={(e)=> handleTouchStart(e)} onTouchEnd={(e)=> handleTouchEnd(e)}>
                        <p>{paragraph}</p>
                        {i===0 ? <p style={{color:'gray', fontSize:'.9rem', padding:'1rem'}}> Created on: {today.toDateString()}</p> : null}
                    </div>
                )
            })}
            </div> 

            <div className='story-pages-display-container' style={{position: 'fixed', }}>
                <PagesDisplay pages={paragraphsLength} currentIndex={currentIndex}/>
            </div>
        </div>

    )
}