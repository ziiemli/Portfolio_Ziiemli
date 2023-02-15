import React from "react"

const DigitalArtwork = ({data}) => {
    return (
        <article className={data.className + " digitalArtwork"}>
            <h2 className="digitalArtwork__title">{data.titleArtworks}</h2>
            <img src={data.img} alt={data.alt} />
            <div className="digitalArtwork__description">
                <p>{data.description}</p>
                <h3>Date</h3>
                <p>{data.date}</p>
            </div>
        </article>
    )
}

export default DigitalArtwork
