import React from "react"

const DigitalArtwork = ({data}) => {
    return (
        <article className={data.className + " digitalArtwork"}>
            <img src={data.img} alt={data.alt} />
            <div className="digitalArtwork__description">
                <h2 className="digitalArtwork__title">{data.titleArtwork}</h2>
                <p>{data.description}</p>
                <h3>Date</h3>
                <p>{data.date}</p>
            </div>
        </article>
    )
}

export default DigitalArtwork
