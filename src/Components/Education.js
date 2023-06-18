import "../css/Education.css";
import Skola from "../skola.jpg";
import Html_slika from "../html-slika.png";
import css_slika from "../css-slika.png";
import JavaScript_slika from "../JavaScript-slika.png";
import React_slika from "../React.png";

const Education = () => {
    return (
        <div className="Education" id="Education">
            <h1 id="naslov-education">Education</h1>
            <div id="my-education">
                <div id="education-slike">
                    <div>
                    <img id="skola" src={Skola}></img>
                    <ul id="list">
                        <li><img className="language" src={Html_slika}></img></li>
                        <li><img className="language" src={css_slika}></img></li>
                        <li><img className="language" src={JavaScript_slika}></img></li>
                        <li><img className="language" src={React_slika}></img></li>
                    </ul>
                    </div>
                </div>
                <p>
                    I am currently a second-year student at the School for Graphic Design and Sustainable Construction. Throughout my studies, I have gained proficiency in various programming languages such as <span>CSS, HTML, JavaScript and React</span>. In addition to my school curriculum, I have also completed a <span>React course outside of school</span> and further enhanced my skills through a <span>JavaScript course on Udemy</span>. I am dedicated to continuous learning and staying up-to-date with emerging technologies, as I believe that staying current in this rapidly evolving field is essential for delivering innovative and cutting-edge solutions.

                </p>
            </div>
        </div>
    );
};

export default Education;