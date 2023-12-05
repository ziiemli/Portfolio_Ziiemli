import React from "react"
import ScreenOtherProject from "./ScreenOtherProject"
import Carousel2 from "./Carousel2"
// import Carousel from "./Carousel"

const ProjectOtherContent = ({data}) => {
    //recover url
    const querystring = window.location.pathname.split("/Others/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    //find good data of project
    const dataContent = data && data.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f']/g, "") === name)

    const LeRecueilDeLetrange = querystring === "Le_Recueil_de_letrange"
    const LeTresorDeKhnoumkhoufou = querystring === "Le_tresor_de_Khnoumkhoufou"
    const Sirius = querystring === "Sirius"
    const Bleu = querystring === "Bleu"
    const Lyon = querystring === "Lyon"
    const AlienZone = querystring === "AlienZone"

    const visualsOfGame = dataContent && dataContent.visualsOfGame

    const conceptArt = dataContent && dataContent.conceptArt
    const uiUx = dataContent && dataContent.uiUx

    const boxBoardGame = dataContent && dataContent.boxBoardGame
    const boardGame = dataContent && dataContent.boardGame
    const momieCharacter = dataContent && dataContent.momieCharacter
    const adventurerCharacters = dataContent && dataContent.adventurerCharacters
    const momieCards = dataContent && dataContent.momieCards
    const adventurerCards = dataContent && dataContent.adventurerCards

    const bleuExperiments = dataContent && dataContent.experiments

    const dayNight = dataContent && dataContent.dayNight
    const D = dataContent && dataContent.D
    // const LineBuilding = dataContent && dataContent.lineBuilding

    return (
        <section className="screensOtherContent">
            {LeRecueilDeLetrange && (
                <div>
                    <ScreenOtherProject title="VISUALS OF GAME" screens={visualsOfGame} id="visualsOfGame" />
                    <ScreenOtherProject title="CONCEPT ART" screens={conceptArt} id="conceptArt" />
                    <ScreenOtherProject title="UI & UX" screens={uiUx} id="uiUx" />
                </div>
            )}
            {LeTresorDeKhnoumkhoufou && (
                <div>
                    <ScreenOtherProject title="BOARD GAME BOX" screens={boxBoardGame} id="boxBoardGame" />
                    <ScreenOtherProject title="BOARD GAME" screens={boardGame} id="boardGame" />
                    <ScreenOtherProject title="MOMIE CHARACTER" screens={momieCharacter} id="momieCharacter" />
                    <ScreenOtherProject title="ADVENTURER CHARACTERS" screens={adventurerCharacters} id="adventurerCharacters" />
                    <ScreenOtherProject title="MOMIE GAME CARDS" screens={momieCards} id="momieCards" />
                    <ScreenOtherProject title="ADVENTURER GAME CARDS" screens={adventurerCards} id="adventurerCards" />
                </div>
            )}
            {Sirius && (
                <div>
                    <ScreenOtherProject title="VISUALS OF GAME" screens={visualsOfGame} id="sirius" />
                    <ScreenOtherProject title="CONCEPT ART" screens={conceptArt} id="sirius" />
                </div>
            )}
            {Lyon && <h3 className="contentAvailable">Content will be available soon</h3>}
            {Bleu && (
                <div>
                    <ScreenOtherProject title="BLUE EXPERIMENTS" screens={bleuExperiments} id="bleuExperiments" />
                </div>
            )}
            {AlienZone && (
                <div>
                    <ScreenOtherProject title="DAYLIGHT AND NIGHT" screens={dayNight} id="dayNight" />
                    <Carousel2 title="CONCEPT ART" screens={conceptArt}/>
                    <ScreenOtherProject title="3D" screens={D} id="3D" />
                </div>
            )}
        </section>
    )
}

export default ProjectOtherContent
