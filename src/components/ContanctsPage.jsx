import linkedLogo from '../assets/linkedin-icon.svg'
import githubLogo from '../assets/github-icon.svg'
import mailIcon from '../assets/mail-icon.svg'

import { useState } from 'react'

import { Link } from 'react-router-dom'
import EmailForm from './EmailForm'


let emailCheckbox;
let linkedInCheckBox;
let githubCheckBox;

export default function ContacsPage () {

    const [ isEmailForm, setIsEmailForm ] = useState(false)
        
    function hanldePageLoad () {
        emailCheckbox = document.getElementById("emailCheckBox")
        linkedInCheckBox = document.getElementById("linkedInCheckBox")
        githubCheckBox = document.getElementById("githubCheckBox")
    }

    function pageClikcListener ( e ) {
        const emailForm = document.getElementById("emailForm")
        if(emailForm){
            const rect = emailForm.getBoundingClientRect()
            if(e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right){
                window.removeEventListener("click", pageClikcListener)
                setIsEmailForm(false)
            }  
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
                linkedInCheckBox.checked = false
                // window.open("https://www.linkedin.com/in/rimas-radziunas/")
            }else if (e.target.id === "githubCheckBox"){
                document.querySelector('#githubBubble').classList.remove('githubBubbleAnimation')
                githubCheckBox.checked = false
                // window.open("https://github.com/Rim0Rad")
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
        <section className='page' onLoad={hanldePageLoad} onReset={hanldePageLoad} >
            
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
                            <img id="githubLogo" className='logo' src={githubLogo}/>
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
                {isEmailForm && <EmailForm setIsEmailForm={setIsEmailForm}/>}
            </section>
        </section>
    )
}