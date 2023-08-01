import { useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function NavButton ( { title, path, id, type } ) {
    const navigate = useNavigate();


    const handleClick = () =>{
        if(path){
            navigate(path)
        }
    }

    function handleMouseEnter () {
        const button = document.getElementById(id)
        button.style.animationName = "lightstreak"
        
    }
    function handleMouseLeave () {
        const button = document.getElementById(id)
        button.style.animationName = "reverselightstreak"
        button.style.animationDuration = "0.8s"
    }

    return (
            <button id={id} 
                className="button"
                onClick={handleClick}
                type={type}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                >
                {title}
            </button>
    )
}