import React, {useState} from "react"

const ProjectsNext = ({data, dataProjects}) => {
    
    //name of Actual Project
    const nameOfProject = data && data.nameProject
    //index of Actuel Project
    const indexActualProject = dataProjects && dataProjects.findIndex((project) => project.nameProject === nameOfProject)
  
    const nextProject = () => {
        //next Index of Array
        const indexNextArray = dataProjects[indexActualProject+1]
        //find name of next Project
        const nextName = indexNextArray && indexNextArray.nameProject
        //delete space of nameProject
        const urlName =  nextName.split(' ').join('_')
        //delete accents
        const urlNameNoAccents =  urlName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        //redirection to the next Project
        window.location.href = "/Web_Development_and_Design/projects/" + urlNameNoAccents;
    }

    return (
        <section className="projectsNext">
            <a href="/Web_Development_and_Design">PROJECTS</a>
            <button onClick={nextProject}>NEXT</button>
        </section>
    )
}

export default ProjectsNext
