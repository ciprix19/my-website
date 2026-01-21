import type { MouseEvent } from 'react';
import './styles/contact.css'

export default function Contact() {

    function handleSubmitButton(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    return (
        //todo socials div
        <section id='contact'>
            <h1>Contact</h1>
            <div className='two-column wrapper'>
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
                <div className='socials-div'>
                    <h2>{`Check my socials as well :)`}</h2>
                    <div className='two-column-layout'>
                        <div>
                            <img className='icon' src='images/icons/linkedin.svg' alt='linkedin'></img>
                            <img className='icon' src='images/icons/github.svg' alt='github'></img>
                        </div>
                        <div>
                            <img className='icon' src='images/icons/insta.svg' alt='insta'></img>
                            <img className='icon' src='images/icons/facebook.svg' alt='facebook'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}