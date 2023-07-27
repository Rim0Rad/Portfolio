

export default function EmailForm () {

     /* Handle email form submision TODO: send email */
     function handleSubmit ( e ) {
        e.preventDefault()
        setTimeout(() => {
            setEmailSent(false)
        }, 1000)
        setIsEmailForm(false)
        setEmailSent(true)
    }


    return (
        <section id="emailFormContainer">
            <form id="emailForm" onSubmit={handleSubmit} >
                <label htmlFor='senderEmail'> Your Email </label> 
                <input id="senderEmail" type="email" />
                <label htmlFor='subject'> Subject</label> 
                <input id="subject" type="text" max={100}/>
                <label htmlFor='emailText'> The Message</label> 
                <textarea id="emaiText" rows={20} cols={100}/>
                <button id="sendEmailBT" type="submit" disabled={false}>Under Construction</button>
            </form>
        </section>
    )
}