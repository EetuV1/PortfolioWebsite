/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"

import spaceVideo from "../assets/spaceVideo.mp4"
import theHandsomeGuy from "../assets/theHandsomeGuy2.jpeg"
import github from "../assets/github.png"
import mail from "../assets/mail.png"

import "./styles/LandingPage.css"

const LandingPage = () => {
    const [scale, setScale] = useState(0)

    // The zoom-in animation when loaded
    useEffect(() => {
        setTimeout(() => {
            setScale(1)
        }, 1000)
    }, [])

    // The zoom-out animatin when scrolled down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScale(60)
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
                    <p id="hiIm">Hi, I'm</p>
                    <h1 id="eetuValkamo">Eetu Valkamo</h1>
                    <p id="softwareDeveloper">Software Developer</p>

                    <a href="mailto:eetu.valkamo@gmail.com">
                        <img src={mail} alt="Mail" id="mail" />
                    </a>
                    <a
                        href="https://github.com/EetuV1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} alt="Github" id="github" />
                    </a>
                </div>
                <div id="theHandsomeGuy">
                    <img src={theHandsomeGuy} alt="The Handsome Guy" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
