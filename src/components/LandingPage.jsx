import React, { useEffect, useState } from "react"

import spaceVideo from "../assets/spaceVideo.mp4"
import theHandsomeGuy from "../assets/theHandsomeGuy2.jpeg"
import github from "../assets/github.png"
import mail from "../assets/mail.png"

import "./styles/LandingPage.css"

const LandingPage = () => {
    const [scrollY, setScrollY] = useState(0)
    const [scale, setScale] = useState(0)

    // The zoom-in animation when loaded
    useEffect(() => {
        setTimeout(() => {
            setScale(1)
        }, 100)
    }, [])

    // The zoom-out animatin when scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
            if (window.scrollY > 100) {
                setScale(30)
            } else if (window.scrollY < 100) {
                setScale(1)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="landingPageContainer">
            <video
                src={spaceVideo}
                autoPlay
                loop
                muted
                className="spaceVideo"
            />
            <div
                id="animatedDiv"
                className="elementBox"
                style={{ transform: `scale(${scale})` }}
            >
                <div className="textContainer">
                    <p>Hi, I'm</p>
                    <h1>Eetu Valkamo</h1>
                    <p>Software Developer</p>
                    {/* <p>Software Engineering and Project Manager Student</p> */}
                    <a href="mailto:eetu.valkamo@gmail.com">
                        <img src={mail} alt="Mail" className="mail" />
                    </a>
                    <a href="https://github.com/EetuV1" target="_blank">
                        <img src={github} alt="Github" className="github" />
                    </a>
                </div>
                <div className="theHandsomeGuy">
                    <img src={theHandsomeGuy} alt="The Handsome Guy" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
