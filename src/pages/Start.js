import React from "react"
import { Helmet } from "react-helmet"
import {Link} from "react-router-dom"

const Start = () => {
    return (
        <main className="start">
            <Helmet>
                <title>Ziiemli - Start</title>
                <meta name="description" content="Zilin Moulin, alias Ziiemli is a freelancer artist, visual designer and front-end web developer based in Lyon." />
                <link rel="canonical" href="/" />
            </Helmet>
            <div className="start__logo">
                <img src={`${process.env.PUBLIC_URL}/assets/Logo.svg`} alt="Logo of Ziiemli" />
            </div>
            <div className="start__content">
                <h1 className="start__content__h1">ZIIEMLI</h1>
                <h2 className="start__content__h2">Zilin Moulin</h2>
                <ul>
                    <li>Artist</li>
                    <li>Visual Designer</li>
                    <li>Front-end Developer</li>
                </ul>
            </div>
            <div className="start__button">
                <div className="start__button__line start__line1"></div>
                <Link to={"home"}>
                    <h2 className="start__button__start">START</h2>
                </Link>
                <div className="start__button__line"></div>
            </div>
            <div className="start__background">
                <img className="start_photography_background" src={process.env.PUBLIC_URL + "assets/img/start/Photography_Background.png"} alt="Photography of Zilin Moulin, alias Ziiemli" />
            </div>
            <div className="start__line"></div>
            <div className="start__line2"></div>
        </main>
    )
}

export default Start
