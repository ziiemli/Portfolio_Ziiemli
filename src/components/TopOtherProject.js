import React from "react"

const TopOtherProject = ({data}) => {
    const image = data && process.env.PUBLIC_URL + data.imageMobile
    const imageDesktop = data && process.env.PUBLIC_URL + data.backgroundDesktop

    return (
        <section className="topOtherProject">
            {/* img */}
            <div className="topOtherProject__img">
                <h1>{data && data.nameProject}</h1>
                <picture className="topOtherProject__img">
                    <source media="(min-width: 996px)" srcSet={imageDesktop} />
                    <img className="topOtherProject__img__background" src={image} alt="" />
                </picture>
            </div>
            {/* infos */}
            <div className="topOtherProject__infos">
                <p className="topOtherProject__infos__description">{data && data.description}</p>
                <div className="topOtherProject__infos__group">
                    <h2 className="topOtherProject__infos__group__title">Date</h2>
                    <p>{data && data.date}</p>
                </div>
                <div className="topOtherProject__infos__group">
                    <h2 className="topOtherProject__infos__group__title">Techs</h2>
                    <p>{data && data.techs}</p>
                </div>
                <div className="topOtherProject__infos__group">
                    <h2 className="topOtherProject__infos__group__title">Roles</h2>
                    <p>{data && data.roles}</p>
                </div>
            </div>
            {/* separation */}
            <div className="topOtherProject__line"></div>
            <div className="backgroundLinesProjects linesProjectDev">
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
            </div>
        </section>
    )
}

export default TopOtherProject
