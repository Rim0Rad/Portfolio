import { useEffect, useState } from "react"



export default function ImageBar ( { images, styles } ) {

    return (
        <section id="imageBar" style={styles}>
            {images.map( (image, index) => {
                return <img id={index} key={index} src={image}/>
            })}
        </section>
    )
}