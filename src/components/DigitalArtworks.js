import React from "react"
import Carousel from "./Carousel"
import DigitalArtwork from "./DigitalArtwork"

const DigitalArtworks = ({data}) => {
    const stairsAtNight = data[0]
    const purpleLandscape = data[1]
    const waterfall = data[2]
    const sea = data[3]
    const digitalConcepts = data[4].digitalConcepts
    
    return (
        <section>
            <DigitalArtwork data={stairsAtNight} />
            <DigitalArtwork data={purpleLandscape} />
            <DigitalArtwork data={waterfall} />
            <DigitalArtwork data={sea} />
            <Carousel data={digitalConcepts}/>
        </section>
    )
}

export default DigitalArtworks
