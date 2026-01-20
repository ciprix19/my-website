import type { MouseEvent } from 'react';
import './styles/contact.css'

export default function Contact() {

    function handleSubmitButton(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    return (
        //todo socials div
        <main className="center-main">
            {/* <section className='two-column-layout wrapper'> */}
            <section className='two-column wrapper'>
                <div className='contact-div'>
                    <h1>Contact</h1>
                    <form className='contact-form'>
                        <div className='field'>
                            <label>Enter your email:</label>
                            <input type='text'></input>
                        </div>
                        <div className='field'>
                            <label>Tell me your thoughts :D</label>
                            <textarea></textarea>
                        </div>
                        <button onClick={e => handleSubmitButton(e)}>Submit</button>
                    </form>
                </div>
                <img src='sd' alt='contact-img'></img>
            </section>
        </main>
    );
}