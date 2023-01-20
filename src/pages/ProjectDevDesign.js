import React from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import ProjectTop from "../components/ProjectTop"

const ProjectDevDesign = () => {
    //recover url
    const querystring = window.location.pathname.split("/Web_Development_and_Design/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    //data
    const {data, error} = Fetch()
    if (error) console.log(error)
    const dataProjects = data.dev
    const dataProject = dataProjects && dataProjects.find(async (el) => el.nameProject === name)

    return (
        <div className="project">
            <Header />
            <main className="projectDevDesign">
                <ProjectTop data={dataProject} />
            </main>
        </div>
    )
}

export default ProjectDevDesign
