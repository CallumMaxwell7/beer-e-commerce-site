import React from "react";
import './style.css'

const Contact = () => {
   const {formStatus,setFormStatus} = React.useState('Send')
   const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting....')
    const {name,email,message} = e.target.elements
    let conForm = {
        name: name.value,
        email: email.value,
        message: message.value,
    }
    console.log(conForm)
   }
    return(
        <div>
            <div className="header">
            <h1>Beer App</h1>
            </div>
            <div className="pageName">
             <h2>Contact Page</h2>
            </div>
            <div className="intro">
             <p>Welcome to the contact page. Below is a contact form for you to fill in and contact the company should you have any problems:</p>
            </div>
            <div className="contact-form">
                <h2 className="mb-3">Contact Form</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name 
                        </label>
                        <input className="form-control" type="text" id="name" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email 
                        </label>
                        <input className="form-control" type="email" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message 
                        </label>
                        <textarea className="form-control" id="message" required/>

                    </div>
                   <button className="submit">Submit {formStatus}</button>
                </form>
            </div>
          </div>
    )
}
export default Contact