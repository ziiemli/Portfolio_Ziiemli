import React from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import ProjectsNext from "../components/ProjectsNext"
import TopOtherProject from "../components/TopOtherProject"
import ProjectOtherContent from "../components/ProjectOtherContent"

const ProjectOtherPage = () => {
 //recover url
 const querystring = window.location.pathname.split("/Others/projects/").join("")
 //recover name
 const name = querystring.split("_").join(" ")
 console.log(name);

 //data
 const {data, error} = Fetch()
 if (error) console.log(error)

 //data Dev
 const dataProjects = data && data.others
 //find data of good project > Project Top
 const dataProject = dataProjects && dataProjects.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f']/g, "") === name)
 //data Projects Dev > ProjectDevContent
 const dataProjectContent = data && data.othersProjects
    return (
        <div className="project" id="topProject">
        <Header fixed="positionFixed"/>
        <main>
            <TopOtherProject data={dataProject} dataProjects={dataProjects}/>
            <ProjectOtherContent data={dataProjectContent}/>
        </main>
        <RedirectTopPage anchor="topProject" />
        <Footer />
        <ProjectsNext data={dataProject} dataProjects={dataProjects} category="Others"/>
    </div>
    )
}

export default ProjectOtherPage
