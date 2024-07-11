import profile from "./images/profile.png"
import resume from "./images/Rishabh_Raj.pdf"

const Home = () => {
    return (
        <>
            <div className="header-text">
                <div>
                    <p>Full stack Developer</p>
                    <h1>Hi, I'm <span>Rishabh</span> <br /> Raj From India</h1>
                    <a href={resume} className="btn btn2" style={{ fontSize: "18px" }} download="Rishabh_Raj">Download CV</a>
                </div>
                <img src={profile} alt="Profile" />
            </div>
        </>
    )
}

export default Home