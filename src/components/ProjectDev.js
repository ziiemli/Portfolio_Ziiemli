import React from "react"
import {Link} from "react-router-dom"

const ProjectDev = ({data}) => {
    //name of project link with _
    const urlName = data.nameProject.split(" ").join("_")
    //url
    const url = `projects/${urlName}`
    const urlNameNoAccents = url.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return (
        <article className="projectDev">
                <Link to={urlNameNoAccents}>
                    <h3 className="projectDev__title">{data.nameProject}</h3>
                    <div className="projectDev__thumbnail">
                        <img className="projectDev__thumbnail__logo" src={data.logo} alt={data.name + " Logo"} />
                        {/* <div className="projectDev__thumbnail__gradient"></div> */}
                        <img className="projectDev__thumbnail__img" src={data.imageMobile} alt={"Thumbnail to represent " + data.nameProject + " website"} />
                    </div>
                </Link>
        </article>
    )
}

export default ProjectDev
