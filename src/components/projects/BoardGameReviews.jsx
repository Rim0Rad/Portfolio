import MediaBar from "./MediaBar"

export default function BoardGameReviews ( {images, setGallery}) {

    return (
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
            <MediaBar images={images} setGallery={setGallery}/>
        </section>
    )
}