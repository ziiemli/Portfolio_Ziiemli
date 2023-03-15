import React from "react"

const TopOtherProject = ({data, dataProjects}) => {
    const image = data && process.env.PUBLIC_URL + data.imageMobile
    const imageDesktop = data && process.env.PUBLIC_URL + data.backgroundDesktop
    const arrowBack = process.env.PUBLIC_URL + "/assets/ArrowBack.svg"
    const arrowRight = process.env.PUBLIC_URL + "/assets/Next_Arrow.svg"

    //name of Actual Project
    const nameOfProject = data && data.nameProject
    //index of Actuel Project
    const indexActualProject = dataProjects && dataProjects.findIndex((project) => project.nameProject === nameOfProject)

    const nextProject = () => {
        //next Index of Array
        const indexNextArray = dataProjects[indexActualProject + 1]
        //find the number of actual array
        const numberOfArray = indexNextArray && dataProjects.indexOf(indexNextArray)
        //if length of table data > actual number of array = next page
        if (dataProjects.length > numberOfArray) {
            //find name of next Project
            const nextName = indexNextArray && indexNextArray.nameProject
            console.log(nextName)
            //delete space of nameProject
            const urlName = nextName.split(" ").join("_")
            //delete accents
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f']/g, "")
            //redirection to the next Project
            window.location.href = "/Others/projects/" + urlNameNoAccents
        }
        //else return to first project
        else {
            const indexFirstArray = dataProjects[0]
            const indexFirstArrayName = indexFirstArray && indexFirstArray.nameProject
            //delete space of nameProject
            const urlNameFirstArray = indexFirstArrayName.split(" ").join("_")
            //delete accents
            const urlNameFirstArrayNoAccents = urlNameFirstArray.normalize("NFD").replace(/[\u0300-\u036f']/g, "")
            //redirection to the next Project
            window.location.href = "/Others/projects/" + urlNameFirstArrayNoAccents
        }
    }

    return (
        <section className="topOtherProject">
            {/* img */}
            <div className="topOtherProject__img">
                <h1>{data && data.nameProject}</h1>
                <picture className="topOtherProject__img">
                    <source media="(min-width: 996px)" srcSet={imageDesktop} />
                    <img className="topOtherProject__img__background" src={image} alt="Background in relation to the project" />
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
                {/* projects next */}
                <div className="projectNextOther">
                    <a href="/Others">
                        <img src={arrowBack && arrowBack} alt="arrow to the left" />
                        <p>Projects</p>
                    </a>
                    <a href={nextProject} onClick={nextProject}>
                        <p>Next</p>
                        <img src={arrowRight} alt="arrow to the right" />
                    </a>
                </div>
            </div>
            {/* separation */}
            <div className="topOtherProject__line"></div>
            <div className="backgroundLinesProjects linesProjectDev linesOther">
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line  lastLineProjectDev"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
            </div>
        </section>
    )
}

export default TopOtherProject
