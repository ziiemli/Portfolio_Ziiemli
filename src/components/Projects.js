import ProjectDev from "./ProjectDev"

const Projects = ({data}) => {
    return (
        <section id="test2">
            <div className="projects">
                <div className="backgroundLinesProjects">
                    <div className="backgroundLinesProjects__line"></div>
                    <div className="backgroundLinesProjects__line"></div>
                    <div className="backgroundLinesProjects__line"></div>
                    <div className="backgroundLinesProjects__line"></div>
                    <div className="backgroundLinesProjects__line"></div>
                </div>
                <h2 className="projects__title">Projects</h2>
                {data && data.map((el) => <ProjectDev data={el} key={el.id} />)}
            </div>
        </section>
    )
}

export default Projects
