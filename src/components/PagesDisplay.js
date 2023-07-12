import React, { useEffect, useState } from 'react';

export default function PagesDisplay(props){
    const [startIndex, setStartIndex] = useState(0)
    const pages= props.pages
    let pageIcons = []

    useEffect(()=> {
        setStartIndex(props.currentIndex)
    })

    for(let i = 0; i < pages; i++){
        console.log(i)
        pageIcons.push( <div style={{backgroundColor: startIndex === i ? 'purple': 'transparent'}} className={`page-icon index${i}`}></div>)
    }

    return (
        <div className='pages-display-container'>
            {pageIcons.map((page, i) => {
                return (
                    page
                )
            })}
        </div>
    )
}