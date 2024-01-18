import React from "react"

import model from "../../assets/model.png"
import simulation from "../../assets/simulation.png"

import "../styles/Projects.css"

const DroneAI = () => {
    return (
        <div>
            <div className="projectContainer">
                <div className="projectName">
                    <h2>AI Detecting Ships and Distances</h2>
                    <h6>12.09.2023 – 15.12.2023</h6>
                </div>
                <div className="projectText">
                    <p>
                        For autonomous ships and vessels, vision is crucial.
                        When dealing with a large ship or vessel, anticipating
                        turns and reducing speed well in advance is necessary.
                        Imagine having a camera system positioned 50 to 100
                        meters above the ship – this would provide a much
                        broader field of vision. The concept involves deploying
                        a drone flying above the ship to detect various elements
                        such as boats, ships, and sea marks (there probably
                        wouldn't be many other things at sea). The drone then
                        relays this information to the ship, enabling it to make
                        necessary adjustments.
                    </p>
                    <p>
                        This project was part of a course called Innovation
                        Project, where 30 other projects were presented. Our
                        team, consisting of 8 members, won the Best Technical
                        Solution award. My assigned role was handling the object
                        detection aspect along with another team member.
                    </p>
                    <h3>Object Detection</h3>
                    <p>
                        Since the drone operates from a bird's-eye view, there
                        was limited pre-labeled data available. We got some
                        previously labeled data and unlabeled videos. Because
                        the existing data was labeled with MatLab, we were told
                        to use it as well. Converting the Matlab files to a
                        format suitable for training posed one of the largest
                        challenges in the project.
                    </p>
                    <p>
                        We chose to use YOLOv8 to train the model, considering
                        it is one of the latest models. We were aware at the
                        beginning that our training data was too narrow compared
                        to real-life variables such as as object angles,
                        distances, diverse object appearances, and weather
                        conditions.
                    </p>

                    <p>
                        While the model detected some objects well, it struggled
                        with those significantly different from the training
                        data. It also experienced some overfitting issues due to
                        too many similiar images of the same object, and we
                        didn't have time to address this.
                    </p>
                    <p>
                        And yes, this is supervised machine learning, but let's
                        hop in the AI hype train and call it that.
                    </p>

                    <h3>Simulation</h3>
                    <p>
                        One group member had previuos experience in building a
                        Blender simulation. This allowed us to generate
                        different weather conditions and have more versatile
                        training data. Unfortunately, we didn't had time to
                        train the model with the simulated data. It would have
                        been interesting to see how it would have performed in
                        detecting real-life objects.
                    </p>

                    <h3>Distance Calculations</h3>
                    <p>
                        Predicting the distance to the detected object involves
                        the program knowing the height of the drone and the
                        angle of the camera. After that it's pretty simple
                        trigonometry with some twists.
                    </p>
                </div>
                <div className="projectImg">
                    <img src={model} alt="Model" className="model" />
                    <img
                        src={simulation}
                        alt="Simulation"
                        className="simulation"
                    />
                </div>
            </div>
        </div>
    )
}

export default DroneAI
