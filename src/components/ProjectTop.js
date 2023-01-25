import React from "react"

const ProjectTop = ({data}) => {
    const image = data && process.env.PUBLIC_URL + data.imageMobile
    const logo = data && process.env.PUBLIC_URL + data.logo
    return (
        <section className="projectTop">
            <div className="projectTop__img">
                <img className="projectTop__img__logo" src={logo} alt="" />
                <img className="projectTop__img__background" src={image} alt="" />
            </div>
            <div className="projectTop__infos">
                <p className="projectTop__infos__description">{data && data.description}</p>
                <a className="projectTop__infos__link" href={data && data.link}>
                    LINK
                </a>
                <div className="projectTop__infos__group">
                    <h2 className="projectTop__infos__group__title">Date</h2>
                    <p>{data && data.date}</p>
                </div>
                <div className="projectTop__infos__group">
                    <h2 className="projectTop__infos__group__title">Techs</h2>
                    <p>{data && data.techs}</p>
                </div>
                <div className="projectTop__infos__group">
                    <h2 className="projectTop__infos__group__title">Roles</h2>
                    <p>{data && data.roles}</p>
                </div>
            </div>
            <div className="projectTop__line"></div>
        </section>
    )
}

export default ProjectTop
