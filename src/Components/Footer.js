import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faArrowUp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 id="find-me">Find me on</h3>
                    <div className="social-icons">
                        <a href="https://github.com/karlo34" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/karlo-marasovi%C4%87-612947264/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/marasovick1/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Contact me with:</h3>
                    <p id="contacts">
                        <span>If you have questions, contact me at:</span>
                        <br />
                        <span>Phone: +385 099 644 8804</span>
                        <br />
                        <span>Email: marasovick1@gmail.com</span>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Want to offer a job</h3>
                    <button className="footer-button">Hire me</button>
                </div>
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <ul id="navigation">
                        <li><a href="#Aboutme">About me</a></li>
                        <li><a href="#Education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#volunteering">Volunteering</a></li>
                        <li><a href="#Hire-me">Hire me</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <div id="to-top">
                        <a href="#header" rel="noopener noreferrer">
                        &#8593;
                        </a>
                    </div>
                    <h4>Back to top</h4>

                </div>
            </div>
            <div className="footer-bottom">
                <p>CopyRight&copy; 2023 Karlo Marasović 2023 Repete. All rights reserved.</p>
                <hr/>
            </div>
        </footer>
    );
}

export default Footer;