import { useState } from 'react'
import { rectContains } from '../utils/geometry.js'

export default function Gallery ( {gallery, setGallery} ) {


    const [ images, setImages ] = useState(gallery.images)
    const [ currentImgId , setCurrentImgId ] = useState(gallery.currentImage)

    function handleClick (e) {
        const gallery = document.getElementById("gallery")
        const r = gallery.getBoundingClientRect()
        if(!rectContains(r, {x: e.clientX, y: e.clientY})){
            setGallery(null)
        }
    }

    function prevImageClick () {
        let id = currentImgId - 1
        if( id < 0 ){
            id = images.length - 1
        }
        setCurrentImgId(id)
    }
    function nextImageClick () {
        let id = Number(currentImgId) + 1
        console.log(id)
        if( id > images.length - 1 ){
            id = 0
        }
        setCurrentImgId(id)
    }

    function handleMouseEnter () {
        const galleryContainer = document.getElementById("galleryContainer")
        galleryContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    function handleMouseLeave () {
        const galleryContainer = document.getElementById("galleryContainer")
        galleryContainer.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }

    return (
        <section id="galleryContainer" onClick={handleClick} onMouseLeave={handleMouseEnter} onMouseEnter={handleMouseLeave}>
            <section id="gallery" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button id="prevImage" className='buttonG' onClick={prevImageClick}>{"<"}</button>
                <section className='galleryImgContainer'>
                    <img id="galleryImg" src={images[currentImgId]}/>
                </section>
                <button id="nextImage" className='buttonG' onClick={nextImageClick}>{">"}</button>
            </section>
        </section>
    )
}