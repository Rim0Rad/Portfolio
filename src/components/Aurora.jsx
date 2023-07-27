import { useEffect, useState } from "react";
import LightSpike from "./LightSpike.jsx"

export default function Aurora () {


    const maxWidth = 350;
    let currentWidth = 0;
    const maxHeight = 200;
    const maxSize = 5;
    const minSize = 2;
    
    
    const spikes = []
   
    function createSpikes (){
        let indexKey = 0;
        while(currentWidth < maxWidth){
            
            const height = 450// + (Math.random() * maxHeight)// -maxHeight;
            const size = (Math.random() * maxSize) + minSize ;

            spikes.push(<LightSpike key={indexKey} size={size} height={height}/>)
            currentWidth += size;
            
            indexKey++;
        }
    }
    const style = {
        width: "2100vw",
        position: "absolute",
        display: "flex",
        top: "-10vh",
        
        zIndex: "-1",
        animation: "sideMove 20.0s infinite linear"
        
    }

    createSpikes()

    return (
        <section style={style} className='pageDecorationContainer'>
            {spikes}
        </section>
    )
}