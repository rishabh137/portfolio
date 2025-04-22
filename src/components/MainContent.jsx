import { useState } from "react"
import user from "./images/user.png"
import work1 from "./images/talkwave.png"
import work2 from "./images/recipeverse.png"
import work3 from "./images/mover.png"
import work4 from "./images/car rental.png"
import resume from "./images/Rishabh_Raj.pdf"
import Footer from "./Footer"

const MainContent = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabname) => {
        setActiveTab(tabname)
    }

    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={user} alt="user-image" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About Me</h1>
                            <p className="me">Hi! I'm Rishabh Raj, a passionate full-stack developer with a degree in Bachelor of Engineering in Computer Science from Sant Longowal Institute of Engineering and Technology. I specialize in building dynamic and responsive web applications using  Angular, React.js, Node.js, Express.js, MongoDB, Java. I have a strong foundation in both frontend and backend development, and I enjoy tackling new challenges and learning continuously. I look forward to contributing my skills and enthusiasm to a dynamic development team and working on innovative projects.</p>

                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === "skills" ? 'active-link' : ""}`} onClick={() => opentab('skills')}>Skills</p>
                                <p className={`tab-links ${activeTab === "experience" ? 'active-link' : ""}`} onClick={() => opentab('experience')}>Experience</p>
                                <p className={`tab-links ${activeTab === "education" ? 'active-link' : ""}`} onClick={() => opentab('education')}>Education</p>
                            </div>
                            <div className={`tab-contents ${activeTab === "skills" ? 'active-tab' : ""}`} id="skills">
                                <ul>
                                    <li><span>Programming Languages</span><br />Java, C++, Javascript</li>
                                    <li><span>Frontend Technologies</span><br />Angular, React.js, Tailwind CSS, Material UI, Daisy UI</li>
                                    <li><span>Backend Technologies</span><br />Node.js, Express.js, REST APIs</li>
                                    <li><span>Database</span><br />PostgreSQL, MongoDB</li>
                                    <li><span>Tools & Platforms</span><br />Git, GitHub</li>
                                </ul>
                            </div>

                            <div className={`tab-contents ${activeTab === "experience" ? 'active-tab' : ""}`} id="experience">
                                <ul>
                                    <li style={{ marginBottom: "-10px" }}><span style={{ fontSize: "20px" }}>Clerisy Solutions Private Limited</span> <span style={{ marginLeft: "21rem", color: "#ababab" }}>April 2025 - Present</span></li>
                                    <li><span style={{ fontSize: "18px" }}>Full-Stack Developer</span> <span style={{ marginLeft: "32.7rem", color: "#ababab" }}>Mohali, India</span></li>
                                    <li style={{ listStyle: "circle" }}>Developed and integrated a game search feature to enhance user navigation and interaction on a US-based client casino website.</li>
                                    <li style={{ listStyle: "circle" }}>Implemented dynamic footer content, fetching real-time data from the client's server to ensure relevant and updated information is displayed to users.</li>
                                    <li style={{ listStyle: "circle" }}>Built a game widget that enables users to play games in a resizable window with real-time data on free spins and remaining coins.</li>
                                    <li style={{ listStyle: "circle" }}>Utilized Socket.IO (sock.js and stomp.js) to ensure seamless real-time communication, delivering up-to-date game information and improving user experience.</li>
                                </ul>
                            </div>

                            <div className={`tab-contents ${activeTab === "education" ? 'active-tab' : ""}`} id="education">
                                <ul>
                                    <li><span>August 2022 - 2025</span><br />Bachelor of Engineering from Sant Longowal Institute of Engineering and Technology</li>
                                    <li><span>August 2019 - 2022</span><br />Diploma from Sant Longowal Institute of Engineering and Technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services">
                <div className="container">
                    <h1 className="sub-title">My Services</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h2>Full Stack Development</h2>
                            <p style={{ fontSize: "16px" }}>Passionate full stack developer skilled in Javascript, dedicated to crafting robust and user-centric web applications. Excited about leveraging cutting-edge technologies to create seamless digital experiences. Committed to delivering scalable solutions that exceed client expectations. Ready to bring innovation and efficiency to your web projects.</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-crop-simple"></i>
                            <h2>Java Service Developer</h2>
                            <p style={{ fontSize: "16px" }}>Specializing in building robust and scalable Java services with a strong emphasis on object-oriented programming. Passionate about utilizing Java's powerful OOP principles to design modular and maintainable systems. Committed to delivering high-quality services that enhance system performance and support business goals.</p>
                        </div>

                        {/* <div>
                            <i className="fa-solid fa-crop-simple"></i>
                            <h2>Aspiring Python Developer</h2>
                            <p style={{ fontSize: "16px" }}>Aspiring developer with a focus on Python, delivering customized solutions that optimize processes and drive efficiency. Passionate about leveraging technology to enhance user experiences. Dedicated to contributing innovative solutions to your projects.</p>
                        </div> */}
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src={work1} alt="project" />
                            <div className="layer">
                                <h3>Talkwave</h3>
                                <p>A social media web app that enable users to share their thoughts, interact, and connect with others.</p>
                                <a href="https://talk-wave.onrender.com" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src={work4} alt="project" />
                            <div className="layer">
                                <h3>Car Rental Systme</h3>
                                <p>Java Object Oriented project in which user can rent and return car while managing availability and calculating prie dynamically.</p>
                                <a href="https://github.com/rishabh137/car-rental" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src={work2} alt="project" />
                            <div className="layer">
                                <h3>Recipeverse</h3>
                                <p>A recipe sharing web app that allow users to share their food recipes, which other users can view and cook.</p>
                                <a href="https://github.com/rishabh137/recipeverse" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src={work3} alt="project" />
                            <div className="layer">
                                <h3>File Destination Mover</h3>
                                <p>Python script to automatically organize downloaded files into designated directories based on file extensions.</p>
                                <a href="https://github.com/rishabh137/file-destination-mover" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact me</h1>
                            <p><i className="fas fa-paper-plane"></i> rishabhraj13951@gmail.com</p>
                            <p><i className="fas fa-phone-square-alt"></i> +91-7488261069</p>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/rishabh_9462/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/rishabhi/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="https://github.com/rishabh137/" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                            <a href={resume} download="Rishabh_Raj" className="btn btn2">Download CV</a>
                        </div>

                        <div className="contact-right">
                            <form>
                                <input type="text" name="Name" placeholder="Your Name" required />
                                <input type="email" name="Email" placeholder="Your Email" required />
                                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn btn2">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainContent;
