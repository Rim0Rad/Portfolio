import { FQ, Flock, BG } from '../assets/assetsImporter.js'
import SlideShow from './SlideShow.jsx'
import ImageBar from './projects/ImageBar.jsx'
import { useEffect, useState } from 'react'
import Gallery from './Gallery.jsx'
import FeatherQuest from './projects/FeatherQuest.jsx'
import BoardGameReviews from './projects/BoardGameReviews.jsx'
import FlockingAlgorithm from './projects/FlockingAlgorithm.jsx'

export default function ProjectsPage () {

    const [ gallery, setGallery ] = useState(null)

    useEffect( () => {
        const imageBarContainers = document.getElementsByClassName("imageBarContainer")
        for(let i = 0; i < imageBarContainers.length; i++){
            const imageBarContainer = imageBarContainers[i]
            const images = imageBarContainer.firstChild.childNodes
            imageBarContainer.addEventListener("mousemove", ( e ) => {
                console.log("move")
                const barLength = images.length * images[0].width
                const ratio = (barLength - (window.innerWidth - vw(20))) / (window.innerWidth - vw(22))
                const left = (-e.pageX + vw(10)) * ratio + "px";
                imageBarContainer.firstChild.style.left = left;
            })
        }
    }, [])


    return (
        <section id="projectPage">
            <section className="pageTitleContainer">
                <p className="pageTitle">My Projects</p>
            </section>
            <section className='pageContent'>
                { gallery && <Gallery gallery={gallery} setGallery={setGallery}/>}

                <FeatherQuest images={FQ} setGallery={setGallery}/>
                <FlockingAlgorithm images={Flock} setGallery={setGallery}/>
                <BoardGameReviews images={BG} setGallery={setGallery}/>
                
            </section>
        </section>
    )
}

function vh( percent ) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}