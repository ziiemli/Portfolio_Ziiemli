import React, {useState} from "react"

const Carousel = ({data, id}) => {
    const [current, setCurrent] = useState(0)
    const picturesLength = data && data.length
    const pictures = data
    const rightArrow = process.env.PUBLIC_URL + "assets/Right_Arrow.svg"
    const leftArrow = process.env.PUBLIC_URL + "assets/Left_Arrow.svg"

    const nextSlide = () => {
        setCurrent(current === picturesLength - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? picturesLength - 1 : current - 1)
    }

    if (!Array.isArray(pictures) || pictures.length <= 0) return null

    return (
        <section className="carousel" id={id}>
            {picturesLength > 1 && <img className="carousel__leftArrow" src={leftArrow} alt="Flèche en direction de la gauche" onClick={prevSlide} />}
            {picturesLength > 1 && <img className="carousel__rightArrow" src={rightArrow} alt="Flèche en direction de la droite" onClick={nextSlide} />}
            {pictures &&
                pictures.map((picture, index) => (
                    <div className={index === current ? "slide_active" : "slide"} key={index}>
                        {index === current && <img className="carousel__slide" src={picture.img} alt={"image " + picture.className} />}
                    </div>
                ))}
            <div className="carousel__description">
                <h2 className="digitalArtwork__title">{pictures[current].titleArtwork}</h2>
                <p>{pictures[current].description}</p>
                <h3>Date</h3>
                <p>{pictures[current].date}</p>
            </div>
        </section>
    )
}

export default Carousel
