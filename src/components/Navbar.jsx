import { Link } from "react-scroll"
import { useState } from "react"
import Home from "./Home"

const Navbar = () => {
    const [menu, setMenu] = useState()

    return (
        <div id="header">
            <div className="container">
                <nav>
                    <h1 className="logo"><span>R</span>ishabh.</h1>
                    <ul id="sidemenu" style={{ right: menu }}>
                        <li>
                            <Link to="/" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} duration={500}>Services</Link>
                        </li>
                        <li>
                            <Link to="portfolio" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                        <i className="fas fa-times" onClick={() => setMenu(-200)}></i>
                    </ul>
                    <i className="fas fa-bars" onClick={() => setMenu(0)}></i>
                </nav>

                <Home />
            </div>
        </div>
    )
}

export default Navbar