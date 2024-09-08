import React, {useRef, useState} from 'react';
import question from "./assets/question.png";
import emailjs from '@emailjs/browser';
import like from "./assets/like.png";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Sprawdzenie, czy checkbox jest zaznaczony
        const isChecked = e.target.agreement.checked;

        if (!isChecked) {
            alert("Musisz zaakceptować przetwarzanie danych osobowych.");
            return;
        }

        emailjs.sendForm('service_vxuujbm', 'template_fa5inpn', form.current, 'a-oKgUVxUxk9T4IUJ')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                e.target.reset();
                setSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="Form" id="form">
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className="form_h1">Masz pytania ?</h1>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Imię"
                        required
                    />
                    <input
                        name="surname"
                        type="text"
                        id="surname"
                        placeholder="Nazwisko"
                        required
                    />
                    <input
                        name="phone"
                        type="tel"
                        id="phone"
                        placeholder="Numer telefonu"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        className="message"
                        id="message"
                        placeholder="Wiadomość"
                        rows="6"
                        required
                    />
                    <div className="checkbox_container">
                        <input name="agreement" type="checkbox" className="checkbox" required={true}/>
                        <p className="checkbox_p">Oświadczam, że zapoznałem się z regulaminem, w pełni rozumiem jego
                            treść i akceptuję
                            wszystkie
                            zawarte w nim warunki. Zgadzam się również na przetwarzanie moich danych osobowych zgodnie z
                            obowiązującymi przepisami.</p>
                    </div>
                    <button className="form_btn" type="submit">Wyślij</button>
                    {submitted && <p className="submitted">Twoja wiadomość została wysłana</p>}

                </form>

                <LazyLoadImage width={like.width} height={like.height} className="question_img" src={question}
                               alt={question}/>

            </div>
        </section>
    );
}

export default Form;
