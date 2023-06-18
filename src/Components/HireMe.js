import "../css/Hire-me.css";
import React, { useState } from 'react';

const AboutMe = () => {

    return (
        <div className="Hire-me" id="Hire-me">

            <h1>Want to hire me?</h1>
            <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

            <h3 id="fill-up">Fill out the form</h3>
            <form>
                <input className="unesi" type="text" placeholder="Name*" required></input>
                <input className="unesi" type="text" placeholder="Surname*" required></input>
                <br />
                <input className="unesi" type="email" placeholder="Email*" required></input>
                <br />
                <input className="unesi" type="text" placeholder="Subject*" required></input>
                <br />
                <textarea className="unesi" type="text" placeholder="Message*" id="message" required></textarea>
                <br />
                <button id="send" type="submit">Send request</button>

               
            </form>



        </div>
    );
};

export default AboutMe;