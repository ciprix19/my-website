import { Link } from 'react-router-dom';
import './styles/header.css'

export default function Header() {
    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <Link to='/'><img src="images/linkedin-64x64.jpg" alt="linkedin"></img></Link>
                    </li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/resume'>resume</Link></li>
                    <li><Link to='/guitar'>guitar</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                    <li>
                        <a href='https://www.linkedin.com/in/ciprix19/' target='_blank'>
                            <img src="images/insta-32x32.png" alt="linkedin"></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/ciprix19' target='_blank'>
                            <img src="images/insta-32x32.png" alt="github"></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/cipri_.b/' target='_blank'>
                            <img src="images/insta-32x32.png" alt="insta"></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/cipri.barbuta/' target='_blank'>
                            <img src="images/insta-32x32.png" alt="fb"></img>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
