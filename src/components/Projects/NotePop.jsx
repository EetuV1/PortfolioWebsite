import React from "react"

import notePop from "../../assets/notePop.png"

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
                        You can add a note with a keyword, and whenever you
                        search that keyword from the web you will receive a
                        notification with your note. Simple idea, which I like,
                        and couldn't find anything like it. Also a great project
                        to get better with JS, CSS, HTML, and planning a
                        software architecture.
                    </p>
                    <p>
                        You can check it out in the{" "}
                        <a
                            href="https://chromewebstore.google.com/detail/notepop/lmafejapjjjbkjhdocgppgpkgfobecbp"
                            target="_blank"
                        >
                            Chrome Web Store.
                        </a>
                    </p>
                    <h3>Safari Extension (Under development)</h3>
                    <p>
                        Safari extensions work fundamentally differently, and
                        their documentation isn't that great. You can't
                        apparently send notifications, so I had to come with
                        somethng else. I decided to inject the note straight to
                        the search results instead of notification. There are
                        some good and bad sides to this. Might implement this to
                        the Chrome version also though...
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
