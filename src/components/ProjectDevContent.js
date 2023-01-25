import React from "react"
import Screen from "../components/Screen"

const ProjectDevContent = ({data}) => {
    console.log(data)
    //recover url
    const querystring = window.location.pathname.split("/Web_Development_and_Design/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    const dataContent = data && data.find((el) => el.nameProject === name)
    console.log(dataContent)
    return (
        <section className="projectDevContent">
            <Screen title={"HOME"} img={dataContent && dataContent.home} projectName={dataContent && dataContent.nameProject}/>
            <Screen title={"HOME"} img={dataContent && dataContent.home} projectName={dataContent && dataContent.nameProject}/>
            <Screen title={"HOME"} img={dataContent && dataContent.home} projectName={dataContent && dataContent.nameProject}/>
        </section>
    )
}

export default ProjectDevContent
