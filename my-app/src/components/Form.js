import React, {useState} from 'react';
import question from "../assets/pngwing.com (11).png"
const Form = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleWiadomoscChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Wiadomość wysłana")
        console.log('Adres e-mail:', email);
        console.log('Wiadomość:', message);
    }

    return (
        <section className="Form" id="form">

            <div className="container">

                <div className="form_text">

                    <img src={question} alt={question}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Masz pytania ?</h1>
                <div className="form_item">
                    <label htmlFor="email">Adres e-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form_item">
                    <label htmlFor="message">Wiadomość:</label>
                    <textarea
                        className="message"
                        type="text"
                        id="message"
                        value={message}
                        onChange={handleWiadomoscChange}
                    />

                </div>
                    <button className="form_btn" type="submit">Wyślij</button>
                </form>
            </div>
        </section>
    );
}


export default Form;