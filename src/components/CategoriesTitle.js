import React from "react"

const CategoriesTitle = ({image, title, paragraphe}) => {
    return (
        <section className="categoriesTitle">
            <img src={image} alt={title} />
            <div className="categoriesTitle__informations">
                <h1 className="categoriesTitle__informations__title">{title}</h1>
                <p className="categoriesTitle__informations__paragraphe">{paragraphe}</p>
            </div>
            <div className="categoriesTitle__line"></div>
        </section>
    )
}

export default CategoriesTitle
