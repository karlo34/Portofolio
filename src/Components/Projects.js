import React from 'react';
import "../css/Projects.css";


const Projects = () => {
    const projects = [
        {
            title: 'Healty Body Healty Mind',
            description: 'This is a project made in pairs for the EDIT competition where the main goals were objects and HTML editing through JavaScript.',
            technologies: ['JavaScript', 'CSS', 'HTML'],
            githubLink: 'https://github.com/karlo34/HBHM',
            date: '11. May 2023.',
        },
        {
            title: 'IRI zaklada',
            description: 'The project was created for a foundation whose purpose is to improve society through the development of capacity for research, development and innovation, as well as the stimulation of research and scientific activities and the application of socially useful innovations, as well as financing startup projects based on social innovations.',
            technologies: ['Elementor'],
            website: 'https://zaklada.iri.hr/',
            date: '28. April 2023.',
        },
        {
            title: 'In development',
            description: 'This project is still being worked on. This project is a web application made by a group of high school students with a project manager and founder of the Loop association (Marko Janjiš), made for associations in Split so that people can see which workshops are held, when and where, which would help the development of young people in Split.',
            technologies: ['React', 'CSS'],
            githubLink: 'https://github.com/project2',
            date: 'unknown',
        },

    ];


    const handleGitHubClick = (event) => {
        alert("This project is in making!");
        event.preventDefault();
    }


    return (
        <div className='projects' id='projects'>
            <h1 className="section-title">Projects</h1>
            <div className='ae'>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>Description: {project.description}</p>
                        <p className="technologies">Technologies used: {project.technologies.join(', ')}</p>
                        <div className="project-links zadnji">

                            {project.title !== "In development" && project.title !== "IRI zaklada" && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                            )}

                            {project.title === 'In development' && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={handleGitHubClick}>GitHub</a>
                            )}

                            {project.title === "IRI zaklada" && (
                                <a href={project.website} target="_blank" rel="noopener noreferrer">Online website</a>
                            )}
                        </div>
                        
                        <h3 className='date'>Date: {project.date}</h3>
                    </div>
                ))}
            </div>
        </div>
    );

};
export default Projects;
