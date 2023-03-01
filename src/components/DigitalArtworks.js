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
    const digitalPortraits = data[8].digitalPortraits
    
    return (
        <section>
            <DigitalArtwork data={stairsAtNight} />
            <DigitalArtwork data={purpleLandscape} />
            <DigitalArtwork data={waterfall} />
            <DigitalArtwork data={sea} />
            <Carousel data={digitalConcepts}/>
            <DigitalArtwork data={sfTower} />
            <DigitalArtwork data={chibi} />
            <DigitalArtwork data={fragmentOfTime} />
            <Carousel data={digitalPortraits}/>
        </section>
    )
}

export default DigitalArtworks
