import Project from "./Project"

const Projects = ({data}) => {
    return (
        <section>
            <div className="projects">
                <h2 className="projects__title">PROJECTS</h2>
                {data && data.map((el) => <Project data={el} key={el.id} />)}
            </div>
        </section>
    )
}

export default Projects
