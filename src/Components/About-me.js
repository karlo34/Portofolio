import "../css/About-me.css";
import MojaSlika from "../ja.webp";

const AboutMe = () => {
    return (
        <div className="Aboutme" id="Aboutme">
            <h1 id="naslov">About me</h1>
            <div id="o-meni">
                <img src={MojaSlika}/>
                <p>
                    Hello, <span>I'm Karlo Marasović, a 17-year-old web developer</span> currently studying at the School for Graphic Design and Sustainable Construction (second year). <span>I'm passionate about</span> creating visually appealing and user-friendly websites. I've been sharpening my skills in web development for the past two years, and I'm<span> excited to continue expanding my knowledge</span> in this field.

                    When I'm not coding, I love to go outside and play basketball. Basketball is not only a hobby but also a source of inspiration for <span>teamwork, discipline, and perseverance</span>, which I apply to my web development projects.

                    I believe in the power of the web to connect people and create meaningful experiences. I'm dedicated to crafting innovative and impactful digital solutions that leave a lasting impression.
                </p>

            </div>
        </div>
    );
};

export default AboutMe;