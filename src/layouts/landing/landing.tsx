import './styles/landing.css'

export default function Landing() {
    return (
        <section className='profile-section'>
            <div>
                <img src='images/profile-pic.jpg1' alt='profile-pic'></img>
                <h1>Andrei Ciprian Barbuta</h1>
                <br></br>
                <h2>SOFTWARE DEVELOPER</h2>
                <span><img className='icon' src='images/icons/location.svg' alt='location'></img>Bucharest, Romania</span>
            </div>
        </section>
    );
}