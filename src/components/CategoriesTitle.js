import React from "react"

const CategoriesTitle = ({image, imageDesktop, title, paragraphe}) => {
    return (
        <section className="categoriesTitle" id="test">
            <picture className="categoriesTitle__img">
                <source media="(min-width: 996px)" srcSet={imageDesktop} />
                <img src={image} alt={title} />
            </picture>
            <div className="categoriesTitle__informations">
                <h1 className="categoriesTitle__informations__title">{title}</h1>
                <p className="categoriesTitle__informations__paragraphe">{paragraphe}</p>
            </div>
            <div className="categoriesTitle__line"></div>
        </section>
    )
}

export default CategoriesTitle
