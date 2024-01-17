import React from "react"

import NotePop from "./Projects/NotePop"
import DroneAI from "./Projects/DroneAI"

import "./styles/Projects.css"

const Projects = () => {
    return (
        <div className="allProjectsContainer">
            <h1>Latest Projects</h1>
            <NotePop />
            <DroneAI />
        </div>
    )
}

export default Projects
