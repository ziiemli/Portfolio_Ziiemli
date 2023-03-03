import React from "react"
import CarouselDev from "./CarouselDev"

const ProjectTop = ({data, dataProjects}) => {
    const image = data && process.env.PUBLIC_URL + data.imageMobile
    const logo = data && process.env.PUBLIC_URL + data.logo
    console.log(data)

    return (
        <section className="projectTop">
            {/* logo */}
            <div className="projectTop__img">
                <img className="projectTop__img__logo" src={logo} alt="" />
                <img className="projectTop__img__background" src={image} alt="" />
            </div>
            <CarouselDev dataProjects={dataProjects} data={data && data}/>
            {/* infos */}
            <div className="projectTop__infos">
                <p className="projectTop__infos__description">{data && data.description}</p>
                <a className="projectTop__infos__link" href={data && data.link} target="_blank" rel="noreferrer">
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
            {/* separation */}
            <div className="projectTop__line"></div>
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

export default ProjectTop
