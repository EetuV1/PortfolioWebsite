import "./App.css"

import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import LastSection from "./components/LastSection"

function App() {
    return (
        <>
            <LandingPage />
            {/* Easy fix to hide spaceVideo overflow to the sides of AboutMe */}
            <div className="aboutMeBg"></div>
            <AboutMe />
            <Projects />
            <LastSection />
        </>
    )
}

export default App
