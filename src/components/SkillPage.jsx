import Clogo from '../assets/C-logo.svg'
import JSlogo from '../assets/JS-logo.svg'
import CSSlogo from '../assets/CSS3-logo.svg'
import SQLlogo from '../assets/sql-logo.svg'
import HTMLlogo from '../assets/HTML5-logo.svg'
import Javalogo from '../assets/Java-logo.svg'
import JSONlogo from '../assets/json-logo.svg'
import PSQLlogo from '../assets/psql-logo.svg'
import Axioslogo from '../assets/axios-logo.svg'
import Reactlogo from '../assets/React-logo.svg'
import Pythonlogo from '../assets/python-logo.svg'
import Expresslogo from '../assets/express-logo.svg'
import ReactNativelogo from '../assets/react-native-logo.png'

export default function SkillPage () {

    return (
        <section id="skillsPage">
            <section className="pageTitleContainer">
                <p className="pageTitle">Skills</p>
            </section>
            <section className="pageContent">

                <section className="skillSection">
                    <h3>Programming Languages</h3>
                    <section className="skillContent">
                        <div className="techLogoContainer">
                            <img className='techLogo' src={JSlogo}/>
                            <p>JavaScript</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={Javalogo}/>
                            <p>Java</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={Pythonlogo}/>
                            <p>Python</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={Clogo}/>
                            <p>C</p>
                        </div>
                    </section>
                </section>
                <section className="skillSection">
                    <h3>Front-End</h3>
                    <section className="skillContent">
                        <div className="techLogoContainer">
                            <img className='techLogo' src={HTMLlogo}/>
                            <p>HTML</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={CSSlogo}/>
                            <p>CSS</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={Reactlogo}/>
                            <p>React</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={ReactNativelogo}/>
                            <p>React Native</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={Axioslogo}/>
                            <p>Axios</p>
                        </div>
                    </section>
                </section>
                <section className="skillSection">
                    <h3>Back-End</h3>
                    <section className="skillContent">
                        <div className="techLogoContainer">
                            <img className='techLogo' src={SQLlogo}/>
                            <p>SQL</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={PSQLlogo}/>
                            <p>PSQL</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={Expresslogo}/>
                            <p>Express</p>
                        </div>
                        <div className="techLogoContainer">
                            <img className='techLogo' src={JSONlogo}/>
                            <p>Json</p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}