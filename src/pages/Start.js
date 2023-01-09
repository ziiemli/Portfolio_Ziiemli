import React from "react"
import {Link} from "react-router-dom"
import Photography from "../assets/img/start/Photography_Background.png"

const Start = () => {
    return (
        <div className="start">
            <div className="start__content">
                <h1 className="start__content__h1">ZIIEMLI</h1>
                <h2 className="start__content__h2">Zilin Moulin</h2>
                <ul>
                    <li>Artist</li>
                    <li>Visual Designer</li>
                    <li>Front-end Developer</li>
                </ul>
                <Link to={"home"}>
                    <h2 className="start__content__start">START</h2>
                </Link>
            </div>
            <div className="start__background">
                <img className="start_photography_background" src={Photography} alt="Photography of Zilin Moulin" />
            </div>
        </div>
    )
}

export default Start
