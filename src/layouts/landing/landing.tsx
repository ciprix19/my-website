import { Link } from 'react-router-dom';
import './styles/landing.css'

export default function Landing() {
    return (
        <main className="landing-section center-main">
            <section className='two-column-layout wrapper'>
                <h1>Building Digital Features</h1>
                <div>
                    <h2>Software Developer specialized in crafting high-performance, immersive web experiences using modern architecture.</h2>
                    <br></br>
                    <h2>Let's work together!</h2>
                    <br></br>
                    <div className='div-buttons'>
                        <Link to="/resume"><button>View my resume</button></Link>
                        <Link to="/contact"><button>Get in touch</button></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}