import React from 'react';
import "../css/Projects.css";


const Volunteering = () => {
    const Volunteerings = [
        {
            title: 'Festival tehnologije i poduzetnistva',
            description: '"Festival of technology and entrepreneurship" is a festival designed by Split Tech City, it lasted for two days and they gathered lecturers who talked about mental health during work to how to "come from a wardrobe carrier to a Google employee".',
            date: '14.-15. September 2022.'
            
        },
        {
            title: 'NEXT confernece',
            description: 'As a volunteer, together with two colleagues and Split Tech City, I myself organized a conference on IT, design, the influence of social media on people,... for high school students, which was attended by about 300 people, and we gathered some lecturers who do not live in in the same country where the conference was organized.',
            date: '25. March 2023.'
        },

    ];

    return (
        <div className='projects' id='volunteering'>
            <h1 className="section-title">Volunteering</h1>
            <div className='ae'>
                {Volunteerings.map((volunteering, index) => (
                    <div key={index} className="project">
                        <h3>{volunteering.title}</h3>
                        <p className='zadnji'>Description: {volunteering.description}</p>
                        <h3 className='date'>Date: {volunteering.date}</h3>
                    </div>
                ))}
            </div>
        </div>
    );

};
export default Volunteering;
