const Projects = ({data}) => {
    return (
        <section>
            <div className="projects">
                <h2 className="projects__title">PROJECTS</h2>
                {data &&
                    data.map((el) => (
                        <article className="projectDev" key={el.id}>
                            <h3 className="projectDev__title">{el.nameProject}</h3>
                            <div className="projectDev__thumbnail">
                                <img className="projectDev__thumbnail__logo" src={el.logo} alt={el.name + " Logo"} />
                                <div className="projectDev__thumbnail__gradient"></div>
                                <img className="projectDev_thumbnail__img" src={el.imageMobile} alt={"Thumbnail to represent " + el.nameProject + " website"} />
                            </div>
                        </article>
                    ))}
            </div>
        </section>
    )
}

export default Projects
