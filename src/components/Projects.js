import DigitalArtworks from "./DigitalArtworks"
import ProjectDev from "./ProjectDev"
import TraditionalArtworks from "./TraditionalArtworks"

const Projects = ({data, digitalArtworks, traditionalArtworks}) => {
    const webDevData = data && "projects"
    const artData = (digitalArtworks && "projectsArt") || (traditionalArtworks && "projectsArt")
    return (
        <section>
            <div className={(webDevData && webDevData) || (artData && artData)}>
                {data && (
                    <div className="backgroundLinesProjects linesDev">
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                    </div>
                )}
                {(digitalArtworks || traditionalArtworks) && (
                    <div className="backgroundLinesProjects linesArt">
                        <div className="backgroundLinesProjects__line lineArt"></div>
                        <div className="backgroundLinesProjects__line lineArt"></div>
                        <div className="backgroundLinesProjects__line lineArt"></div>
                    </div>
                )}
                <h2 className="projects__title">Projects</h2>
                {data && data.map((el) => <ProjectDev data={el} key={el.id} />)}
                {digitalArtworks && <DigitalArtworks data={digitalArtworks} />}
                {traditionalArtworks && <TraditionalArtworks data={traditionalArtworks} />}

            </div>
        </section>
    )
}

export default Projects
