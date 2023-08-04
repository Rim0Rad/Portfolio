import { FQ, Flock, BG } from '../assets/assetsImporter.js'
import SlideShow from './SlideShow.jsx'
import ImageBar from './ImageBar.jsx'
import { useEffect, useState } from 'react'
import Gallery from './Gallery.jsx'

export default function ProjectsPage () {


    // Set up  background image movemnet with the mouse
    // useEffect( () => {
    //     const cardContainers = document.getElementsByClassName("cardContainer")
        
    //     for(let i = 0; i < cardContainers.length; i++){
    //         const imageBar = cardContainers[i].firstChild
    //         const images = imageBar.childNodes
    //         cardContainers[i].addEventListener("mousemove", ( e ) => {
    //             const barLength = images.length * images[0].width
    //             const ratio = (barLength - window.innerWidth) / window.innerWidth
    //             const left = -e.pageX  * ratio + "px";
    //             cardContainers[i].firstChild.style.left = left;
    //         })
    //     }
    // }, [])

    const [ gallery, setGallery ] = useState(null)

    useEffect( () => {
        const cardContainers = document.getElementsByClassName("cardContainer")
        
        for(let i = 0; i < cardContainers.length; i++){
            const imageBarContainer = cardContainers[i].childNodes[1]
            const images = imageBarContainer.firstChild.childNodes
            imageBarContainer.addEventListener("mousemove", ( e ) => {
                const barLength = images.length * images[0].width
                const ratio = (barLength - (window.innerWidth - vw(20))) / (window.innerWidth - vw(21))
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
                <section className='cardContainer'>
                    <section className="projectCard">                
                        <div className='projectDetails'>
                            <h2 className="projectCardTitle">Feather Quest</h2>
                            <h3>Mobile</h3>
                            <h4>Tech Stack:</h4>
                            <p> React Native, Expo Go, Firebase, Google Maps/Vision  </p>
                            <h4>Description:</h4>
                            <p>
                            This is a birdwatching app for mobile devices developed as a group project during Northcoders software development boot-camp.
                            The application allows user to report bird sightings, find sightings near you on the map, look at other people sightings and identify birds using Google Vision.
                            </p>
                            <h4><a href="https://github.com/Rim0Rad/FeatherQuest" alt="link to GitHub">GitHub Link</a></h4>
                        </div>
                    </section>
                    <ImageBar images={{FQ}} setGallery={setGallery}/>
                </section>

                <section className='cardContainer'>
                    <section className="projectCard">
                        <div className='projectDetails'>
                            <h2 className="projectCardTitle">Boardgame Reviews</h2>
                            <h3>Web</h3>
                            <h4>Tech Stack:</h4>
                            <p> JavaSctip, React, HTML, CSS, Axios, SQL, PostgreSQL, JSON, Express, Jest, Supertest </p>
                            <h4>Description:</h4>
                            <p>
                            Me firts webpage! Developed at Northcoders boot-camp as a two week individual project.
                            A week of Back-End development and another of Front-End. The applications was build from scratch with a guiding hand of a Trello board created by Northcoders.
                            Boardgame review page allows the users to create an account and post reviews on boardgames.
                            User can also view other people reviews and interact with them by leaving a comment or upvoting the review.
                            </p>
                            <h4><a href='https://nc-boardgame-reviews.netlify.app/home'>Go to Page</a> (Hosted on slow server, give it time to load)</h4>
                            <h4><a href="https://github.com/Rim0Rad/NC-GAMES" alt="link to GitHub">GitHub - Front-End</a></h4>
                            <h4><a href="https://github.com/Rim0Rad/Project_BE_Games" alt="link to GitHub">GitHub - Back-End</a></h4>
                        </div>
                    </section>
                    <ImageBar images={{BG}} setGallery={setGallery}/>
                </section>

                <section className='cardContainer'>
                    <section className="projectCard">
                        <div className='projectDetails'>
                            <h2 className="projectCardTitle"> Flocking Algorithm</h2>
                            <h3> Desktop Application</h3>
                            <h4>Tech Stack:</h4>
                            <p> Java </p>
                            <h4>Description:</h4>
                            <p>
                            With this project I have implemented an algorithm to simulate emergent
                            behaviour of flocking animals, base on work of Craig Reynolds in 1986.
                            Each individual agent complies with 3 simple rules: Alignment, Cohesion and Separation.
                            Alignment forces the agent to steer towards the average group direction,
                            cohesion – to steer it towards the centre of a local group and separation – to steer away.
                            Varying levels of these 3 forces allow for interesting behaviours to emerge
                            that simulate flocking behaviour. I further improved the application with ability
                            to control colour, speed and size of agents, and ability to simulate multiple separate flocks
                            creating beautiful simulations.
                            </p>
                            <h4><a href="https://github.com/Rim0Rad/FlockSimulation" alt="link to GitHub">GitHub Link</a></h4>
                        </div>
                    </section>
                    <ImageBar images={{Flock}} setGallery={setGallery}/>
                </section>
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