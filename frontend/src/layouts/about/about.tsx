import './styles/about.css'

function AboutSection() {
    return (
        <section>
            <div className='two-column-layout wrapper'>
                <div>
                    <h1>about</h1>
                    <br></br>
                    <h2>I'm a software developer based in Bucharest, Romania.</h2>
                    <br></br>
                    <p>I enjoy turning ideas into reality, solving complex problems, and constantly learning new technologies. When I'm not coding, you can usually find me playing guitar and exploring new video games.</p>
                </div>
                <img src='images/profile-pic.jpg1' alt='profile-pic'></img>
            </div>
        </section>
    );
}

function SkillsSection() {
    return (
        <section>
            <div className='two-column-layout wrapper'>
                <img src='images/profile-pic1.jpg' alt='skills-pic'></img>
                <div>
                    <h2>Area of expertise</h2>
                    <br></br>
                    <ul>
                        <li>Backend and Scripting</li>
                        <li>Frontend Technologies</li>
                        <li>Database Management</li>
                        <li>Cloud and API Platforms</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function RandomFacts() {
    return (
        <section>
            <div className='two-column-layout wrapper'>
                <div>
                    <h2>Random facts</h2>
                    <br></br>
                    <ul>
                        <li>Guitar nerd</li>
                        <li>I love to cook</li>
                        <li>Spending too much time in video games</li>
                        <li>Horror movies enthusiast</li>
                    </ul>
                </div>
                <img src='images/profile-pic1.jpg' alt='skills-pic'></img>
            </div>
        </section>
    );
}

export default function About() {
    return (
        <main className='about'>
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <RandomFacts></RandomFacts>
        </main>
    );
}
