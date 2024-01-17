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
                    I'm a {myAge} year old student from Finland. I'm studying
                    Software Engineering and Project Management at Turku
                    University of Applied Sciences at third year.
                </p>
                <p>
                    I have a passion for problem solving, brainstorming new
                    ideas and approaches, and learning new things. Programming
                    for me is a way to be creative and to solve problems. School
                    hasn't thought me as much as I would like, so I have been
                    learning a lot on my own with a help of ChatGpt, YouTube,
                    other online material, and Full Stack open -online course
                    (highly recommend). I think that LLM's are the way to help
                    you to learn, but there is also a risk of not actually
                    learning by just copy-pasting, but you would't get far with
                    that approach.
                </p>
                <p>
                    I usually like to focus on one thing at a time, and I really
                    like project-kind of work style. Im interested of many
                    things, but right now I would like to be part of a larger
                    project with other more skilled project members.
                </p>
                <p>
                    I have listed some of my most familiar technologies below. I
                    have also done some with machine learning models like YOLO,
                    TensorFlow and Keras. And would like to go deeper into them
                    via some interesting and usefull projects.
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
