import { useEffect, useState } from "react"



export default function ImageBar ( { images, setGallery } ) {

    // image click listeners to opne galerry
    useEffect(() => {
        const imagesHtml = document.getElementsByClassName(images.name)
        for( let i = 0; i < imagesHtml.length; i++){
            imagesHtml[i].addEventListener("click", (e) => {
                setGallery({...images, currentImage: e.target.id})
            })
        }
    },[])

    // mouse movement scroll
    useEffect( () => {
        const imageBarContainer = document.getElementById("imageBarContainer" + images.name)
        const imageElements = imageBarContainer.firstChild.childNodes
        imageBarContainer.addEventListener("mousemove", ( e ) => {
            const barLength = imageElements.length * imageElements[0].width
            const ratio = (barLength - (window.innerWidth - vw(22))) / (window.innerWidth - vw(22))
            const left = (-e.pageX + vw(10)) * ratio + "px";
            imageBarContainer.firstChild.style.left = left;
        })
    }, [])

    function handleLoad (e) {
        e.target.style.height = "30vh"
        const image = document.getElementById("0")
    }

    function hanldeMouseEnter ( e ) {
        e.target.style.height = "32vh"
    }
    function handleMouseLeave ( e ) {
        e.target.style.height = "30vh"
    }

    function loadImages () {
        return images.images.map( (image, index) => {
            const style = { height: "0vh"}
            return <img id={index}
                style={style}
                className={"imageBarImg " +  images.name}
                key={index} 
                src={image}
                onLoad={handleLoad}
                onMouseEnter={hanldeMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        })

    }

    return (
        <section id={"imageBarContainer" + images.name} className="imageBarContainer">
            <section className="imageBar">
                {loadImages()}
            </section>
        </section>
    )
}

function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}