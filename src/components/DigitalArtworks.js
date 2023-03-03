import React from "react"
import Carousel from "./Carousel"
import DigitalArtwork from "./DigitalArtwork"

const DigitalArtworks = ({data}) => {
    const stairsAtNight = data[0]
    const purpleLandscape = data[1]
    const waterfall = data[2]
    const sea = data[3]
    const digitalConcepts = data[4].digitalConcepts
    const sfTower = data[5]
    const chibi = data[6]
    const fragmentOfTime = data[7]
    const handsOfDarkness = data[8]
    const digitalPortraits = data[9].digitalPortraits

    return (
        <section className="digitalArtworks">
            <DigitalArtwork data={stairsAtNight} />
            <DigitalArtwork data={purpleLandscape} />

            <DigitalArtwork data={waterfall} />
            <DigitalArtwork data={sea} />

            <Carousel data={digitalConcepts} id="digitalConcepts" classDescription="descriptionConcepts"/>

            <DigitalArtwork data={sfTower} />
            <DigitalArtwork data={chibi} />

            <DigitalArtwork data={fragmentOfTime} />
            <DigitalArtwork data={handsOfDarkness} />

            <Carousel data={digitalPortraits} id="digitalPortraits" classDescription="descriptionPortraits"/>
        </section>
    )
}

export default DigitalArtworks
