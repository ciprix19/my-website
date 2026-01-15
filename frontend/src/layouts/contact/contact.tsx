import { useState } from 'react';
import './styles/contact.css'

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (
        <main>
            <div className='div1'>
                <h1>TEST</h1>
                <ul className={`mylist ${isOpen ? 'active' : ''}`}>
                    <li>asd</li>
                    <li>asd</li>
                    <li>asd</li>
                </ul>
                <button onClick={() => setIsOpen(!isOpen)}>Click me!</button>
            </div>

            <div className='div1'>
                <h1>TEST</h1>
                <ul className={`mylist ${isOpen2 ? 'active' : ''}`}>
                    <li>asd</li>
                    <li>asd</li>
                    <li>asd</li>
                </ul>
                <button onClick={() => setIsOpen2(!isOpen2)}>Click me!</button>
            </div>

            <div className='div1'>
                <h1>TEST</h1>
                <ul className={`mylist ${isOpen3 ? 'active' : ''}`}>
                    <li>asd</li>
                    <li>asd</li>
                    <li>asd</li>
                </ul>
                <button onClick={() => setIsOpen3(!isOpen3)}>Click me!</button>
            </div>
        </main>
    );
}