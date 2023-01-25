import React from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import ProjectDevContent from "../components/ProjectDevContent"
import ProjectTop from "../components/ProjectTop"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import ProjectsNext from "../components/ProjectsNext"

const ProjectDevDesign = () => {
    //recover url
    const querystring = window.location.pathname.split("/Web_Development_and_Design/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    //data
    const {data, error} = Fetch()
    if (error) console.log(error)
    const dataProjects = data.dev
    const dataProject = dataProjects && dataProjects.find((el) => el.nameProject === name)

    const dataProjectContent = data && data.devProject

    return (
        <div className="project" id="topProject">
            <Header />
            <main className="projectDevDesign">
                <ProjectTop data={dataProject} />
                <ProjectDevContent data={dataProjectContent}/>
            </main>
            <RedirectTopPage anchor="topProject" />
            <Footer />
            <ProjectsNext data={dataProject}/>
        </div>
    )
}

export default ProjectDevDesign
