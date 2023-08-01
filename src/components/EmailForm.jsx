import { useState } from 'react'
import NavButton from './NavButton'

export default function EmailForm ( { setIsEmailForm } ) {

    const [ emailSent, setEmailSent ] = useState(false)
    const [ feedback, setFeedback ] = useState("")

    function handleChange( e ) {
        setFeedback( e.target.value)
    }

    function handleSubmit( e ) {
        e.preventDefault()
        const templateId = "template_73kn5ap"
        sendFeedback(templateId, 
            {
                from_email: e.target[0].value,
                from_name: e.target[1].value, 
                subject: e.target[2].value,
                message: e.target[3].value
            })
    }

    function sendFeedback( templateId, variables ) {
        window.emailjs.send(
            'service_y3pbwhb',
            templateId,
            variables
            ).then( res => {
                setEmailSent(true)
                setTimeout(() => {
                    setEmailSent(false)
                    setIsEmailForm(false)    
            }, 2000)
        }).catch( err => {
            console.error("Failed to send email: ", err)
        })
    }

    console.log(emailSent)
    return (
        
        <section id="emailFormContainer">
             {emailSent?  
                    <section id="emailSentMessage">
                        <p id="emailSentConfirmationText">Email Sent</p>
                    </section> :
                    <form id="emailForm" className="test-mailing" onSubmit={handleSubmit}>
                        <input id="senderEmail" type="email"  max={100} placeholder='Email'/>
                        <input id="senderName" type="text"  max={100} placeholder='Name'/>
                        <input id="subject" type="text" max={100} placeholder='Subject'/>
                        <textarea
                            id="emailText"
                            name="test-mailing"
                            onChange={handleChange}
                            placeholder="The Message"
                            required
                            value={feedback}
                            style={{ width: '100%', height: '150px' }}
                            />
                        <NavButton id="submitbt" title={'Submit'} type={'submit'}/>
                    </form>
}              
        </section>
    )
}