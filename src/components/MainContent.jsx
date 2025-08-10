import { useState } from "react"
import user from "./images/user.png"
import work1 from "./images/talkwave.png"
import work2 from "./images/recipeverse.png"
import work3 from "./images/mover.png"
import work4 from "./images/codex.png"
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
                                    <li><span>Technologies</span><br />Angular, React.js, Node.js, Loopback, Express.js, <br /> Socket.IO, TypeScript, REST APIs</li>
                                    <li><span>Database</span><br />PostgreSQL, MongoDB</li>
                                    <li><span>Tools & Platforms</span><br />Git, GitHub</li>
                                </ul>
                            </div>

                            <div className={`tab-contents ${activeTab === "experience" ? 'active-tab' : ""}`} id="experience">
                                <ul>
                                    <li style={{ marginBottom: "-10px" }}><span style={{ fontSize: "20px" }}>Clerisy Solutions Private Limited</span> <span style={{ marginLeft: "21rem", color: "#ababab" }}>April 2025 - Present</span></li>
                                    <li><span style={{ fontSize: "18px" }}>Full-Stack Developer</span> <span style={{ marginLeft: "32.7rem", color: "#ababab" }}>Mohali, India</span></li>
                                    <li style={{ listStyle: "circle" }}>Enhanced key modules for the International Booking Engine (IBE), property management system (PMS), and admin portal of a hospitality SaaS platform.</li>
                                    <li style={{ listStyle: "circle" }}>Built a centralized admin interface to disable, update, and delete IBE hotels from one location, reducing admin task time by 40% by replacing scattered workflows.</li>
                                    <li style={{ listStyle: "circle" }}>Worked on the hotel onboarding section in the admin portal to enable creation of a new hotel with its admin site, credentials, and default theme in a few steps, cutting setup time for Admin and Sales teams by 50%.</li>
                                </ul>
                            </div>

                            <div className={`tab-contents ${activeTab === "education" ? 'active-tab' : ""}`} id="education">
                                <ul>
                                    <li><span>July 2022 - 2025</span><br />Bachelor of Engineering from Sant Longowal Institute of Engineering and Technology</li>
                                    <li><span>July 2019 - 2022</span><br />Diploma from Sant Longowal Institute of Engineering and Technology</li>
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
                            <p style={{ fontSize: "16px" }}>As a Full Stack Developer, I have expertise in Java, C++, and Python. I specialize in building efficient and scalable applications using technologies like Angular, React.js, and Node.js, along with databases such as MySQL, PostgreSQL, and MongoDB, enabling effective data management. With strong attention to detail and a commitment to delivering high-quality solutions, I am committed to develop robust and user-friendly applications.</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-crop-simple"></i>
                            <h2>Automation</h2>
                            <p style={{ fontSize: "16px" }}>I develop automation scripts and bots using JavaScript, Selenium, and APIs to streamline repetitive tasks, extract and organize data, and integrate workflows - saving time and improving efficiency for businesses.</p>
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
                            <img src={work4} alt="project" />
                            <div className="layer">
                                <h3>codeX</h3>
                                <p>Built a real-time video conferencing platform with integrated collaborative code editor using React.js, Node.js, WebRTC, PeerJS, and Socket.IO for synchronized multi-user interactions.</p>
                                <a href="https://codex-play.onrender.com/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src={work1} alt="project" />
                            <div className="layer">
                                <h3>Talkwave</h3>
                                <p>A social media web app that enable users to share their thoughts, interact, and connect with others.</p>
                                <a href="https://talk-wave.onrender.com" target="_blank"><i className="fas fa-external-link-alt"></i></a>
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

                        {/* <div className="work">
                            <img src={work3} alt="project" />
                            <div className="layer">
                                <h3>File Destination Mover</h3>
                                <p>Python script to automatically organize downloaded files into designated directories based on file extensions.</p>
                                <a href="https://github.com/rishabh137/file-destination-mover" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div> */}
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
