import { useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function NavButton ( { title, path, id}) {
    const navigate = useNavigate();
    

    const [ showGlow, setShowGlow ] = useState(false)

    const handleClick = () =>{
        navigate(path)
    }

    const handleMouseEnter = () => {
        setShowGlow(true)
    }
    const handleMouseLeave = () => {
        setShowGlow(false)
    }

    return (
        <section>
            {showGlow && <section id={id + "Glow"}className="navButtonGlow"></section>}
            <button id={id} 
                onClick={handleClick} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                {title}
                
            </button>
        </section>
    )
}