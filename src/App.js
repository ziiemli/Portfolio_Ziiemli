import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Start from "./pages/Start"
import Home from "./pages/Home"
import WebDevDesign from "./pages/WebDevDesign"
import Error from "./pages/Error"
import ProjectDevDesign from "./pages/ProjectDevDesign"
import DigitalArt from "./pages/DigitalArt"
import TraditionalArt from "./pages/TraditionalArt"
import Others from "./pages/Others"
import About from "./pages/About"
import ProjectOther from "./components/ProjectOther"
import ProjectOtherPage from "./pages/ProjectOtherPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/*" element={<Home />} />
                <Route path="/Web_Development_and_Design" element={<WebDevDesign />} />
                <Route path="/Web_Development_and_Design/projects/*" element={<ProjectDevDesign />} />
                <Route path="/Digital_Art" element={<DigitalArt />} />
                <Route path="/Traditional_Art" element={<TraditionalArt />} />
                <Route path="/Others" element={<Others />} />
                <Route path="/Others/projects/*" element={<ProjectOtherPage />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
