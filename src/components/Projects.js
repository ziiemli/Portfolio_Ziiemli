import ProjectDev from "./ProjectDev"

const Projects = ({data}) => {
    return (
        <section>
            <div className="projects">
                <h2 className="projects__title">Projects</h2>
                {data && data.map((el) => <ProjectDev data={el} key={el.id} />)}
            </div>
        </section>
    )
}

export default Projects
