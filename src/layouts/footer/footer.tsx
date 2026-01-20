import { Link } from 'react-router-dom';
import './styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <Link to='/'>© 2026 ciprianbarbuta@gmail.com</Link>
            <nav>
                <ul>
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
        </footer>
    );
}
