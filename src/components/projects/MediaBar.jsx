import ImageBar from "./ImageBar.jsx";
import VideoBar from "./VideoBar.jsx"
import { useState } from "react";

export default function MediaBar ( {images, videoURL, setGallery} ) {

    const [ showImageBar, setShowImageBar ] = useState(false)
    const [ showVideoBar, setShowVideoBar ] = useState(false)

    function handleImageBTClick (e) {
        if(showVideoBar){
            setShowVideoBar(false)
            setShowImageBar(true)
        }else if(showImageBar){
            setShowImageBar(false)
        }else{
            setShowImageBar(true)
        }
    }
    function handleVideoBTClick () {
        if(showImageBar){
            setShowImageBar(false)
            setShowVideoBar(true)
        }else if(showVideoBar){
            setShowVideoBar(false)
        }else{
            setShowVideoBar(true)
        }
    }


    return (
        <section className='mediaBar'>
                <button className="button" onClick={handleImageBTClick}>Galery</button>
                {videoURL && <button className="button" onClick={handleVideoBTClick}>Demo</button>}
                { showImageBar && 
                    <ImageBar images={images} setGallery={setGallery}/>
                }
                { showVideoBar &&
                    <VideoBar videoURL={videoURL}/>
                }
            </section>
    )
}