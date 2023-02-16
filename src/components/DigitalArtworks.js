import React from "react"
import DigitalArtwork from "./DigitalArtwork"

const DigitalArtworks = ({data}) => {
    const stairsAtNight = data[0]
    const purpleLandscape = data[1]
    const waterfall = data[2]
    const sea = data[3]
    // const stairsAtNightImg = stairsAtNight && process.env.PUBLIC_URL + stairsAtNight.img
    // console.log(StairsAtNightImg);
    return (
        <section>
            <DigitalArtwork data={stairsAtNight} />
            <DigitalArtwork data={purpleLandscape} />
            <DigitalArtwork data={waterfall} />
            <DigitalArtwork data={sea} />
        </section>
    )
}

export default DigitalArtworks
