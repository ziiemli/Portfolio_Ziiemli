import React from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import ProjectDevContent from "../components/ProjectDevContent"
import ProjectTop from "../components/ProjectTop"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import ProjectsNext from "../components/ProjectsNext"
import TopOtherProject from "../components/TopOtherProject"

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
console.log(dataProject);
 //data Projects Dev > ProjectDevContent
 const dataProjectContent = data && data.devProject
    return (
        <div className="project" id="topProject">
        <Header />
        <main>
            <TopOtherProject data={dataProject}/>
        </main>
        {/* <main className="projectDevDesign">
            <ProjectTop data={dataProject}  dataProjects={dataProjects}/>
            <ProjectDevContent data={dataProjectContent}/>
        </main> */}
        <RedirectTopPage anchor="topProject" />
        <Footer />
        <ProjectsNext data={dataProject} dataProjects={dataProjects}/>
    </div>
    )
}

export default ProjectOtherPage
