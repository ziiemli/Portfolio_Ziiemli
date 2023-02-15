import React from 'react';
import DigitalArtwork from './DigitalArtwork';

const DigitalArtworks = ({data}) => {
    const stairsAtNight = data[0]
    // const stairsAtNightImg = stairsAtNight && process.env.PUBLIC_URL + stairsAtNight.img
    // console.log(StairsAtNightImg);
    return (
        <DigitalArtwork data={stairsAtNight}/>
    );
};

export default DigitalArtworks;