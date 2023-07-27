import { useEffect, useState } from "react";


const maxGlow = 85;
const minGlow = 55;
const directionChange = 0.4;
let oldGlow = 0;
let newGlow = Math.random() * maxGlow + minGlow;
let direction = 0.1;

export default function LightSpike ( { size, height } ) {

    const [position, setPosition ] = useState(0);
    
    function getNewGlow () {
        if(oldGlow !== 0){
           if( newGlow > maxGlow){
            direction = -directionChange;
           } else if(newGlow < minGlow){
            direction = directionChange;
           }
            newGlow += direction;
        }
        oldGlow = newGlow;

    };

    getNewGlow()
    

    const style = {
        width: size + "vw",
        height: height + "px",
        backgroundSize: size + "vw",
        backgroundImage: `radial-gradient(farthest-side, rgb(225, 210, 255), rgba(148, 85, 255, 0.2), rgb(0, 0, 0) ${newGlow}%)`,
        left: `${position}px`
    }

    

    useEffect( () => {
        setTimeout( () => setPosition(position+1), 50);
    })

    return (
        <section className="pageTopDecoration" style={style}>
        </section>
    )
}