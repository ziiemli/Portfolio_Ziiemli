import React from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import ProjectDevContent from "../components/ProjectDevContent"
import ProjectTop from "../components/ProjectTop"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import ProjectsNext from "../components/ProjectsNext"
import { Helmet } from "react-helmet"

const ProjectDevDesign = () => {

    //recover url
    const querystring = window.location.pathname.split("/Web_Development_and_Design/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")

    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    //data Dev
    const dataProjects = data.dev
    //find data of good project > Project Top
    const dataProject = dataProjects && dataProjects.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === name)

    //data Projects Dev > ProjectDevContent
    const dataProjectContent = data && data.devProject

    return (
        <div className="project" id="topProject">
            <Helmet>
                <title>{dataProject && "Ziiemli - " + dataProject.nameProject}</title>
                <meta name="description" content={dataProject && "Web development and design, " + dataProject.nameProject + " project. Front-end Development"} />
                <link rel="canonical" href={querystring && "/Web_Development_and_Design/projects/" + querystring} />
            </Helmet>
            <Header fixed="positionFixed"/>
            <main className="projectDevDesign">
                <ProjectTop data={dataProject}  dataProjects={dataProjects}/>
                <ProjectDevContent data={dataProjectContent}/>
            </main>
            <RedirectTopPage anchor="topProject" />
            <Footer />
            <ProjectsNext data={dataProject} dataProjects={dataProjects} category="Web_Development_and_Design"/>
        </div>
    )
}

export default ProjectDevDesign
