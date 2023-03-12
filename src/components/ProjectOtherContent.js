import React from "react"
import ScreenOtherProject from "./ScreenOtherProject"

const ProjectOtherContent = ({data}) => {
    //recover url
    const querystring = window.location.pathname.split("/Others/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    //find good data of project
    const dataContent = data && data.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f']/g, "") === name)
    
    const LeRecueilDeLetrange = querystring === "Le_Recueil_de_letrange"
    const LeTresorDeKhnoumkhoufou = querystring === "Le_tresor_de_Khnoumkhoufou"

    const visualsOfGame = dataContent && dataContent.visualsOfGame
    const conceptArt = dataContent && dataContent.conceptArt
    const uiUx = dataContent && dataContent.uiUx

    const boardGame = dataContent && dataContent.boardGame

    return (
        <section className="screensOtherContent">
            {LeRecueilDeLetrange && (
                <div>
                    <ScreenOtherProject title="Visuals Of Game" screens={visualsOfGame} id="visualsOfGame" />
                    <ScreenOtherProject title="Concept Art" screens={conceptArt} id="conceptArt" />
                    <ScreenOtherProject title="UI & UX" screens={uiUx} id="uiUx" />
                </div>
            )}
            {LeTresorDeKhnoumkhoufou && (
                <div>
                    <ScreenOtherProject title="Board game" screens={boardGame} id="boardGame" />
                </div>
            )}
        </section>
    )
}

export default ProjectOtherContent
