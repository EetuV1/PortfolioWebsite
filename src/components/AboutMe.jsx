import React from "react"

import "./styles/AboutMe.css"

import JavaScript from "../assets/JavaScript.png"
import react from "../assets/react.png"
import Git from "../assets/Git.png"
import Python from "../assets/Python.png"
import css from "../assets/css.png"
import html from "../assets/html.png"

const images = [JavaScript, react, Python, css, html, Git]

const birthdate = new Date(2000, 7, 24) // August is represented by 7 (0-based index)
const today = new Date()
const ageInMilliseconds = today - birthdate
const ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
)

const AboutMe = () => {
    const myAge = ageInYears
    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <div className="aboutMeText">
                <p>
                    I'm a {myAge}-year-old Software Engineering and Project
                    Management student at Turku University of Applied Sciences
                    in Finland, currently in my third year. I'm passionate about
                    problem-solving, brainstorming innovative ideas, envisioning
                    the future, and personal development. Programming serves as
                    both a creative outlet and a means to tackle challenges.
                </p>
                <p>
                    Despite my academic journey, I've found independent learning
                    crucial. YouTube, Full Stack open online course (highly
                    recommend), and other free online resources have been
                    invaluable. Learning by doing resonates with me. I believe
                    in the power of LLMs to help you learn, but caution against
                    mindless copy-pasting.
                </p>
                <p>
                    I thrive in a focused, project-oriented work style and I'm
                    currently seeking involvement in a substantial project with
                    skilled collaborators, aiming to learn and grow.
                </p>
                <p>
                    I'm interested in many things, especially in tech, and I
                    have tried quite a few programming related things. I have
                    listed some of my most familiar tools below. I have also
                    worked with machine learning and would eagerly deepen my
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
