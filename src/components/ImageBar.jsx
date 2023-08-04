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

    return (
        <section id="imageBarContainer">
            <section id="imageBar">
                {images[Object.keys(images)[0]].map( (image, index) => {
                    return <img id={index} className={"imageBarImg " +  Object.keys(images)[0]} key={index} src={image}/>
                })}
            </section>
        </section>
    )
}