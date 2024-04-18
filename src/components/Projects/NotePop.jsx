/* eslint-disable react/no-unescaped-entities */
import notePop from "../../assets/NotePop.png"

import "../styles/Projects.css"

const NotePop = () => {
    return (
        <div>
            <div className="projectContainer">
                <div className="projectName">
                    <h2>NotePop!</h2>
                    <h6>2023 –</h6>
                </div>
                <div className="projectText">
                    <h3>Chrome Extension</h3>
                    <p>
                        I've developed a unique Chrome Extension where you can
                        add notes with keywords. Once you search that keyword on
                        the web, you'll receive a notification with your note as
                        a reminder. It's a simple yet innovative idea that I
                        couldn't find anything similar to. This project has been
                        a fantastic way for me to enhance my skills in JS, CSS,
                        HTML, and software architecture planning.
                    </p>
                    <p>
                        Feel free to check it out on the{" "}
                        <a
                            href="https://chromewebstore.google.com/detail/notepop/lmafejapjjjbkjhdocgppgpkgfobecbp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chrome Web Store.
                        </a>
                    </p>
                    <p>
                        You can find the code on my{" "}
                        <a
                            href="https://github.com/EetuV1/NotePop-Chrome"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub.
                        </a>
                    </p>
                    <h3>Safari Extension (Under development)</h3>
                    <p>
                        I'm currently working on adapting this extension for
                        Safari. Safari extensions operate differently, and their
                        documentation isn't that great. Interestingly, you can't
                        send notifications directly. To overcome this, I decided
                        to inject the note directly into the search results
                        instead of using notifications. There are pros and cons
                        to this approach. I'm considering implementing this
                        feature into the Chrome version as well.
                    </p>
                </div>
                <div className="projectImg">
                    <img src={notePop} alt="NotePop" className="notePopImg" />
                </div>
            </div>
        </div>
    )
}

export default NotePop
