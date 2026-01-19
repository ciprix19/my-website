import { Link } from 'react-router-dom';
import './styles/header.css'
import { useLayoutEffect, useRef, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef<HTMLUListElement>(null);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='main-header'>
            <div className='nav-wrapper wrapper'>
                <Link to='/'><img src='images/linkedin-64x64.jpg' alt='logo'></img></Link>
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className='primary-navigation'>
                    <ul ref={ref} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to='/about' onClick={() => setIsMenuOpen(false)}>about</Link></li>
                        <li><Link to='/resume' onClick={() => setIsMenuOpen(false)}>resume</Link></li>
                        {/* <li><Link to='/guitar' onClick={() => setIsMenuOpen(false)}>guitar</Link></li> */}
                        <li><Link to='/contact' onClick={() => setIsMenuOpen(false)}>contact</Link></li>
                        <li>
                            <ul className='socials'>
                                <li>
                                    <a href='https://www.linkedin.com/in/ciprix19/' target='_blank'>
                                        <img src='images/insta-32x32.png' alt='linkedin'></img>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/ciprix19' target='_blank'>
                                        <img src='images/insta-32x32.png' alt='github'></img>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/cipri_.b/' target='_blank'>
                                        <img src='images/insta-32x32.png' alt='insta'></img>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.facebook.com/cipri.barbuta/' target='_blank'>
                                        <img src='images/insta-32x32.png' alt='fb'></img>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
