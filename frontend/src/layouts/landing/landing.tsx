import { Link } from 'react-router-dom';
import './styles/landing.css'

export default function Landing() {
    return (
        <main>
            <section className='wrapper'>
                <div className="landing-section">
                    <h1>Building Digital Features</h1>
                    <br></br>
                    <img src='' alt='landing...smth'></img>
                    <h2>SOFTWARE DEVELOPER specialized in crafting high-performance, immersive web experiences using modern architecture.</h2>
                    <h2>Let's work together!</h2>
                    <Link to="/resume"><button>View my resume</button></Link>
                    <Link to="/contact"><button>Get in touch</button></Link>
                </div>
            </section>
        </main>
    );
}