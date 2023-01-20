import React from "react"
import {Link} from "react-router-dom"

const Project = ({data}) => {
    //name of project link with _
    const urlName = data.nameProject.split(" ").join("_")
    //url
    const url = `projects/${urlName}`
    return (
        <div>
            <article className="projectDev">
                <Link to={url}>
                    <h3 className="projectDev__title">{data.nameProject}</h3>
                    <div className="projectDev__thumbnail">
                        <img className="projectDev__thumbnail__logo" src={data.logo} alt={data.name + " Logo"} />
                        <div className="projectDev__thumbnail__gradient"></div>
                        <img className="projectDev_thumbnail__img" src={data.imageMobile} alt={"Thumbnail to represent " + data.nameProject + " website"} />
                    </div>
                </Link>
            </article>
        </div>
    )
}

export default Project
