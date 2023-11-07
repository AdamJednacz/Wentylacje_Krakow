import React, { useRef, useState } from 'react';
import question from "../assets/pngwing.com (11).png";
import emailjs from '@emailjs/browser';
import like from "../assets/pngwing.com (12).png";

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.user_email.value;
        const message = e.target.message.value;

        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!message) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        if (email && message) {
            emailjs.sendForm('service_emoq7as', 'template_qmmwebm', form.current, 'a5RyIbETp88pDI5YT')
                .then((result) => {
                    console.log(result.text);
                    console.log("message sent");
                    e.target.reset();
                    setSubmitted(true);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <section className="Form" id="form">
            <div className="container">
                <div className="form_text">
                    {submitted ? (
                        <img className="like" src={like} alt={like} />
                    ) : (
                        <img src={question} alt={question} />
                    )}
                </div>
                {submitted ? (
                    <div className="thank_you">
                        <h1 className="thank_you_h1">Dziękujemy za wiadomość!</h1>
                        <p>Postaramy się odpowiedzieć jak najszybciej!</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        <h1>Masz pytania ?</h1>
                        <div className="form_item">
                            <label htmlFor="user_email">Adres e-mail:</label>
                            <input
                                name="user_email"
                                type="email"
                                id="user_email"
                            />
                            {emailError && <p className="error-message">Potrzebny jest Email!</p>}
                        </div>
                        <div className="form_item">
                            <label htmlFor="message">Wiadomość:</label>
                            <textarea
                                name="message"
                                className="message"
                                type="text"
                                id="message"
                            />
                            {messageError && <p className="error-message">Musisz napisać Wiadomość!</p>}
                        </div>
                        <button className="form_btn" type="submit">Wyślij</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Form;
