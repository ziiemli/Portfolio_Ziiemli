import React from "react"
import Screen from "../components/Screen"

const ProjectDevContent = ({data}) => {
    //recover url
    const querystring = window.location.pathname.split("/Web_Development_and_Design/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    //find good data of project
    const dataContent = data && data.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === name)
    console.log(dataContent && dataContent)
    return (
        <section className="projectDevContent">
            {/* HOME PAGE */}
            {dataContent && dataContent.home && <Screen title={"HOME"} img={dataContent.home} projectName={dataContent.nameProject} />}
            {/* ARTICLE PAGE */}
            {dataContent && dataContent.article && <Screen title={"ARTICLE"} img={dataContent.article} projectName={dataContent.nameProject} />}
            {/* ABOUT PAGE */}
            {dataContent && dataContent.about && <Screen title={"ABOUT"} img={dataContent.about} projectName={dataContent.nameProject} />}
            {/* CART PAGE (kanap) */}
            {dataContent && dataContent.cart && <Screen title={"CART"} img={dataContent.cart} projectName={dataContent.nameProject} />}
            {/* CONTACT PAGE (LaPanthere) */}
            {dataContent && dataContent.contact && <Screen title={"CONTACT"} img={dataContent.contact} projectName={dataContent.nameProject} />}
            {/* MENU PAGE (OhMyFood) */}
            {dataContent && dataContent.menu && <Screen title={"MENU"} img={dataContent.menu} projectName={dataContent.nameProject} />}
        </section>
    )
}

export default ProjectDevContent
