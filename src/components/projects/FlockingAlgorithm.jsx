import MediaBar from "./MediaBar"

export default function FlockingAlgorithm ( { images, setGallery }) {

    return (
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
                    <MediaBar images={images} setGallery={setGallery}/>
                </section>
    )
}