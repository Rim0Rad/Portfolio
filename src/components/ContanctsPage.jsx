import linkedLogo from '../assets/linkedin-icon.svg'
import githubLogo from '../assets/github-icon.svg'
import mailIcon from '../assets/mail-icon.svg'

import { useState } from 'react'

import { Link } from 'react-router-dom'
import EmailForm from './EmailForm'


let emailCheckbox;

export default function ContacsPage () {

    const [ isEmailForm, setIsEmailForm ] = useState(false)
    const [ emailSent, setEmailSent ] = useState(false)
        
    function hanldePageLoad () {
        console.log("page Loaded")
        emailCheckbox = document.getElementById("emailCheckBox")
    }

    function pageClikcListener ( e ) {
        const rect = document.getElementById("emailForm").getBoundingClientRect()
        if(e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right){
            window.removeEventListener("click", pageClikcListener)
            
            setIsEmailForm(false)
        }        
    }

    /* Handle transition to different pages and opening of email form */ 
    function handleChange ( e ) {
        window.addEventListener( "pagehide", (event) => {     
            e.target.checked = false
        })

        e.target.disabled = true;
        setTimeout(() => {
            if(e.target.id === "linkedInCheckBox"){
                document.querySelector('#linkedInBubble').classList.remove('linkedInBubbleAnimation')
                window.location.href = "https://www.linkedin.com/in/rimas-radziunas/"
            }else if (e.target.id === "githubCheckBox"){
                document.querySelector('#githubBubble').classList.remove('githubBubbleAnimation')
                window.location.href = "https://github.com/Rim0Rad"
            }
            else if (e.target.id === "emailCheckBox"){
                document.querySelector('#emailBubble').classList.remove('emailBubbleAnimation')
                emailCheckbox.checked = false
                
                setIsEmailForm(true)
                window.addEventListener("click", pageClikcListener)
            }
            e.target.disabled = false;
        }, 1500)
    }

   
    
    
    return (
        <section id="contacsPage" onLoad={hanldePageLoad} onReset={hanldePageLoad} >
                <section className="pageTitleContainer"> 
                    <p className="pageTitle">Contacts</p>
                </section>
            <section className="pageContent">
                <input type="checkbox" id="linkedInCheckBox" className="glow" onClick={handleChange}></input>
                <label htmlFor="linkedInCheckBox">
                    <section  id="linkedInBubble" className="bubbleContainer linkedInBubbleAnimation">
                        <section className="contactBubble">
                            <img id="linkedInLogo" className='logo' src={linkedLogo}/>
                        </section>
                    </section>
                </label>
                <input type="checkbox" id="githubCheckBox"  onClick={handleChange}></input>
                <label htmlFor="githubCheckBox">
                    <section id="githubBubble" className="bubbleContainer githubBubbleAnimation">
                        <section className="contactBubble">
                            <section id="githubLogoBackground">
                                <img id="githubLogo" className='logo' src={githubLogo}/>
                            </section>
                        </section>
                    </section>
                </label>
                <input type="checkbox" id="emailCheckBox"  onClick={handleChange}></input>
                <label htmlFor="emailCheckBox">
                    <section id="emailBubble" className="bubbleContainer  emailBubbleAnimation">
                        <section  className="contactBubble" >
                            <img id="linkedInLogo" className='logo' src={mailIcon}/>
                        </section>
                    </section>
                </label>


                {isEmailForm && <EmailForm/>}
                { emailSent && 
                    <section id="emailSentMessage">
                        <p id="emailSentConfirmationText">Email Sent</p>
                    </section>
                }
            </section>
        </section>
    )
}