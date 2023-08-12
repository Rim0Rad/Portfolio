import { useEffect, useState } from "react"



export default function ImageBar ( { images, setGallery } ) {

    useEffect(() => {
        const imagesHtml = document.getElementsByClassName(Object.keys(images)[0])
        for( let i = 0; i < imagesHtml.length; i++){
            imagesHtml[i].addEventListener("click", (e) => {
                setGallery({images:images[Object.keys(images)[0]], currentImage: e.target.id, id: Object.keys(images)[0]})
            })
        }
    },[])

    function handleLoad (e) {
        e.target.style.height = "30vh"
        
        const image = document.getElementById("0")
        console.log(image.style)
    }
    function hanldeMouseEnter ( e ) {
        e.target.style.height = "32vh"
    }
    function handleMouseLeave ( e ) {
        e.target.style.height = "30vh"
    }

    function loadImages () {
        return images[Object.keys(images)[0]].map( (image, index) => {
            
            const style = { height: "0vh"}
            const imageElement =  <img id={index}
            style={style}
            className={"imageBarImg " +  Object.keys(images)[0]}
            key={index} 
            src={image}
            onLoad={handleLoad}
            onMouseEnter={hanldeMouseEnter}
            onMouseLeave={handleMouseLeave}
            />
            
            return imageElement
        })

    }

    return (
        <section id="imageBarContainer">
            <section id="imageBar">
                {loadImages()}
            </section>
        </section>
    )
}