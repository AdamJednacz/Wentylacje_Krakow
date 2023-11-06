import React, {useRef, useState} from 'react';
import question from "../assets/pngwing.com (11).png"
import emailjs from '@emailjs/browser';
const Form = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_emoq7as', 'template_qmmwebm', form.current, 'a5RyIbETp88pDI5YT')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section className="Form" id="form">
            <div className="container">
                <div className="form_text">
                    <img src={question} alt={question}/>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Masz pytania ?</h1>
                <div className="form_item">
                    <label htmlFor="email">Adres e-mail:</label>
                    <input
                        name="user_email"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="form_item">
                    <label htmlFor="message">Wiadomość:</label>
                    <textarea
                        name="message"
                        className="message"
                        type="text"
                        id="message"
                    />
                </div>
                    <button className="form_btn" type="submit">Wyślij</button>
                </form>
            </div>
        </section>
    );
}


export default Form;