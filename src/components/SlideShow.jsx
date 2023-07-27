import React, { useEffect, useRef, useState } from 'react';


export default function SlideShow ( { images }) {
   
    const slideShow = useRef(images)
    const nextImg = useRef(1)
    const [ currImg, setCurrImg ] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            updateImage( slideShow )
        },1)
    },[currImg])

    function updateImage (  ) {
        setTimeout(() => {
            let newImg = (currImg + 1) % (slideShow.current.length - 1);
            nextImg.current = (newImg + 1) % ( slideShow.current.length - 1 )
            restartAnimation()
            setCurrImg(newImg)
                        
        }, 3000);
    }
    
    return (
        <div className="projectCardImgContainer" >
            <img id="backgroundImg" src={slideShow.current[nextImg.current]}></img>
            <img id="projectImage" src={slideShow.current[currImg]} className="fade"/>
        </div>
    )
}

function restartAnimation() {
    
    let images = document.getElementsByClassName("fade")
    
    for(let i = 0; i < images.length; i++){
        images[i].style.animationName = "none"
    }
    
    requestAnimationFrame(() => {
        setTimeout(()=> {
            for(let i = 0; i < images.length; i++){
                images[i].style.animationName = "fadeAnimation"
            }
        }, 0)
    })
}
