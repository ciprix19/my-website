import { useEffect, useLayoutEffect, useState } from 'react';
import './styles/contact.css'
import ResizableDiv from '../resume/components/resizable-div';
import SectionTwoColumnImage from '../about/components/section-two-column-image';

export default function Contact() {
    return (
        <main className="center-main">
            <section className='two-column-layout wrapper'>
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
                    </form>
                </div>
                <img src='sd' alt='contact-img'></img>
            </section>
        </main>
    );
}