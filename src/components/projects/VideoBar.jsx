


// TODO: upload videos to youtube and embed them, will save load web load times

export default function VideoBar ({videoURL}) {

    return (
        <section className="videoBarContainer">
            <section className="videoBar">
                <iframe id="videoFrame"  src={videoURL} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>
        </section>
    )
}