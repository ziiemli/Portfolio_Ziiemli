import React from "react"
import Gallery from "react-photo-gallery"

const GalleryPhotos = ({photos}) => {
    const images = photos && photos

    return (
        <div className="gallery">
            {images &&
                images.map((image, index) => (
                    <div className="gallery__img" key={index}>
                        <img src={image.src} alt={image.description} />
                        <div className="gallery__img__infos">
                            <h3>{image.serie}</h3>
                            <p>{image.description}</p>
                            <div className="gallery__img__infos__date">
                                <strong>DATE</strong>
                                <p>{image.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default GalleryPhotos
