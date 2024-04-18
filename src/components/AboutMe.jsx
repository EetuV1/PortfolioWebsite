import "./styles/AboutMe.css"

import JavaScript from "../assets/JavaScript.png"
import react from "../assets/react.png"
import Git from "../assets/Git.png"
import Python from "../assets/Python.png"
import css from "../assets/css.png"
import html from "../assets/html.png"

const images = [JavaScript, react, Python, css, html, Git]

const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <div className="aboutMeText">
                <p>
                    Passionate about problem-solving, brainstorming innovative
                    ideas, envisioning the future, and personal development.
                    Programming serves as both a creative outlet and a means to
                    solve problems.
                </p>
                <p>
                    Thriving in a project-oriented work style and currently
                    seeking involvement in a substantial project with skilled
                    collaborators, aiming to learn and grow.
                </p>
                <p>
                    Interested in many things, especially in tech, and have
                    tried quite a few programming-related things. Some of my
                    most familiar tools are listed below. I have also worked a
                    little bit with machine learning and would eagerly deepen my
                    understanding through practical and meaningful projects.
                </p>
            </div>
            <div className="iconContainer">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className="icons"
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutMe
