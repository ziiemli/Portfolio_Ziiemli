import React from "react"

const CarouselDev = ({dataProjects, data}) => {

    // const pictures = dataProjects
    const rightArrow = process.env.PUBLIC_URL + "/assets/Right_Arrow.svg"
    const leftArrow = process.env.PUBLIC_URL + "/assets/Left_Arrow.svg"

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
            //delete space of nameProject
            const urlName = nextName.split(" ").join("_")
            //delete accents
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Web_Development_and_Design/projects/" + urlNameNoAccents
        }
        //else return to first project
        else {
            const indexFirstArray = dataProjects[0]
            const indexFirstArrayName = indexFirstArray && indexFirstArray.nameProject
            //delete space of nameProject
            const urlNameFirstArray = indexFirstArrayName.split(" ").join("_")
            //delete accents
            const urlNameFirstArrayNoAccents = urlNameFirstArray.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Web_Development_and_Design/projects/" + urlNameFirstArrayNoAccents
        }
    }

    const prevProject = () => {
        //next Index of Array
        const indexPrevArray = dataProjects[indexActualProject - 1 ]
        console.log(indexPrevArray);
        // find the number of actual array
        const numberOfArray = indexPrevArray && dataProjects.indexOf(indexPrevArray)
        //if length of table data > actual number of array = next page
        if (dataProjects.length > numberOfArray) {
            //find name of next Project
            const prevName = indexPrevArray && indexPrevArray.nameProject
            //delete space of nameProject
            const urlName = prevName.split(" ").join("_")
            //delete accents
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Web_Development_and_Design/projects/" + urlNameNoAccents
        }
        // //else return to first project
        else {
            const indexLastArray = dataProjects[dataProjects.length - 1]
            const indexLastArrayName = indexLastArray && indexLastArray.nameProject
            //delete space of nameProject
            const urlNameLastArray = indexLastArrayName.split(" ").join("_")
            //delete accents
            const urlNameLastArrayNoAccents = urlNameLastArray.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Web_Development_and_Design/projects/" + urlNameLastArrayNoAccents
        }
    }

    const arrowBack = process.env.PUBLIC_URL + "/assets/ArrowBack.svg"
    const projectNumber = indexActualProject && indexActualProject === 0 ? 1 : indexActualProject+1
    const currentProjectIndicate = dataProjects && projectNumber && ` 0${projectNumber} / 0${dataProjects.length} `

    return (
        <section className="carouselDev">
            <img className="carouselDev__leftArrow" src={leftArrow} alt="Flèche en direction de la gauche" onClick={prevProject} />
            <img className="carouselDev__rightArrow" src={rightArrow} alt="Flèche en direction de la droite" onClick={nextProject} />
            <div>
                <h1 className="carouselDev__title">{data && data.nameProject}</h1>
                <img className="carouselDev__slide" src={data && data.thumbnail} alt={"image Thumbnail of "} />
                <img className="thumbnailDesktopBackground" src={data && data.thumbnailBackground} alt={"image Background of "} />
                <div className="carouselDev__back">
                    <a href="/Web_Development_and_Design">
                        <img src={arrowBack && arrowBack} alt="left arrow"/>
                        <p>Projects</p>
                    </a>
                    <p>{currentProjectIndicate}</p>
                </div>
            </div>
        </section>
    )
}

export default CarouselDev
