import './styles/header.css'

export default function Header() {
    return (
        <header className="main-header">
            <img src="images/profile-pic.jpg" alt="logo"></img>
            <nav>
                <ul>
                    <li><a>about</a></li>
                    <li><a>portofolio</a></li>
                    <li><a>contact</a></li>
                    <li><a>
                        <img src="images/profile-pic1.jpg" alt="linkedin"></img>
                    </a></li>
                    <li><a>
                        <img src="images/profile-pic1.jpg" alt="fb"></img>
                    </a></li>
                    <li><a>
                        <img src="images/profile-pic1.jpg" alt="insta"></img>
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}
