import ImageBar from './ImageBar.jsx'

export default function FeatherQuest ({FQ, setGallery} ) {

    return (
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
    )
}