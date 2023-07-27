import profile_pic from '../assets/profile-pic-main.jpg';
import Aurora from './Aurora.jsx'

export default function HomePage (){


    return (
        <section id="homepage">
            {/* <Aurora/> */}
            <section className="pageTitleContainer">
                <p id="welcomeText" className="pageTitle">Welcome</p>
            </section>
            <section className='pageContent'>
                <section id="container"> 
                    <section id='mainProfilePicContainer'>
                        <img id='mainProfilePic' src={profile_pic} alt="Profile picture"/>
                    </section>
                </section>
                <section id="welcomeMessageTextContainer">
                    <p>Hello, My name is <b>Rimas Radziunas</b></p>
                    <p>and welcome to my</p>
                    <h2>Portfolio</h2>
                </section>
            </section>
        </section>
    )
}