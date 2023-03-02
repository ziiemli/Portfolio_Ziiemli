import DigitalArtworks from "./DigitalArtworks"
import ProjectDev from "./ProjectDev"

const Projects = ({data, digitalArtworks}) => {
    const webDevData = data && "projects"
    const artData = digitalArtworks && "projectsArt"
    return (
        <section>
            <div className={(webDevData && webDevData) || (artData && artData)}>
                {data && (
                    <div className="backgroundLinesProjects">
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                    </div>
                )}
                {digitalArtworks && (
                    <div className="backgroundLinesProjects linesArt">
                        <div className="backgroundLinesProjects__line lineArt"></div>
                        <div className="backgroundLinesProjects__line lineArt"></div>
                        <div className="backgroundLinesProjects__line lineArt"></div>
                    </div>
                )}
                <h2 className="projects__title">Projects</h2>
                {data && data.map((el) => <ProjectDev data={el} key={el.id} />)}
                {digitalArtworks && <DigitalArtworks data={digitalArtworks} />}

            </div>
        </section>
    )
}

export default Projects
