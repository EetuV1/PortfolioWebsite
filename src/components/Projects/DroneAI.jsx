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
                        For autonomous ships and vessels, the vision is
                        important. When you have a heavy ship or vessel, you
                        need to make turns and slow down your speed well in
                        advance. If you would have a camera system 50 to 100
                        meters above the ship, you would have a vision much
                        further away. The idea is to have a drone flying above
                        the ship, and it would detect all kind of things like
                        boats, ships, and sea marks (there probadly wouldn't be
                        many other things at sea). It would then send the
                        information to the ship, and the ship would then make
                        the necessary adjustments.
                    </p>
                    <p>
                        This was a project for a course called Innovation
                        Project. There were 30 other projects. Our team had 8
                        members. My assigned role was to train the model. We won
                        the best technical solution award.
                    </p>
                    <h3>Object Detection</h3>
                    <p>
                        Because the drone would detect at bird view, there isn't
                        that much if any availabele pre-labeled data. We got
                        some labeled data and unlabeled videos. Because the
                        previous data was labeled with MatLab, we were told to
                        use it as well. It was some of the hardest things in the
                        project to convert the MatLab files to a format to be
                        used in training. There are much better options for
                        labeling.
                    </p>
                    <p>
                        We decided to use YOLOv8, to train the model. It was
                        suprissingly simple and user-friendly to use. The
                        problem that was known at the beging was too narrow
                        training data compared to all the changing real-life
                        variables, like:
                    </p>
                    <ul>
                        <li>Angle of the object</li>
                        <li>Distance to the object</li>
                        <li>Wide scale of different looking objects</li>
                        <li>Wheater conditions</li>
                    </ul>
                    <p>
                        The model was able to detect some objects, but didn't do
                        well with other that were far different from the ones
                        included in the training data.
                    </p>
                    <p>
                        And yes, this is supervised machine learning, but let's
                        call it AI, like everyone else does in the AI hype.
                    </p>

                    <h3>Simulation</h3>
                    <p>
                        One of our group members had some previuos experience
                        with building a Blender simulation. With that we could
                        generate different kind of wheather conditions, that
                        effects how the model can detect objects. There fore we
                        could have more versatile training data. Unfortunately,
                        we didn't had time to train the model with the simulated
                        data.
                    </p>

                    <h3>Distance Calculations</h3>
                    <p>
                        The distance prediction to the detected object can be
                        calculated when the program knows the height of the
                        drone, and the angle of the camera. After that it's
                        pretty simple trigonometry with some twists.
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
