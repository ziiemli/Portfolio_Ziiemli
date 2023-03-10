import React from "react"
import Fetch from "../components/Fetch"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import Header from "../components/Header"

const About = () => {
    const ziiemliMobile = process.env.PUBLIC_URL + "/assets/img/about/About_Mobile.png"
    const ziiemliDesktop = process.env.PUBLIC_URL + "/assets/img/about/About_Desktop.png"

    const mail = process.env.PUBLIC_URL + "/assets/About_Mail.svg"
    const twitter = process.env.PUBLIC_URL + "/assets/Twitter.svg"
    const github = process.env.PUBLIC_URL + "/assets/github.svg"
    const artstation = process.env.PUBLIC_URL + "/assets/artstation.svg"
    const instagram = process.env.PUBLIC_URL + "/assets/artstation.svg"
    const malt = process.env.PUBLIC_URL + "/assets/artstation.svg"
    const twitch = process.env.PUBLIC_URL + "/assets/artstation.svg"

    //data
    const {data, error} = Fetch()

    const aboutData = data && data.about
    const careerData = aboutData && aboutData[0].career
    const devSkillsData = aboutData && aboutData[1].dev
    const devStacksData = aboutData && aboutData[1].stacks
    const artSkillsData = aboutData && aboutData[2].art
    const artSoftwaresData = aboutData && aboutData[2].softwares

    return (
        <div id="topAbout">
            <Header />
            <main className="about">
                <section className="about__informations">
                    <picture>
                        <source media="(min-width: 996px)" srcSet={ziiemliDesktop} />
                        <img className="about__informations__img" src={ziiemliMobile} alt={"Zilin Moulin, aka Ziiemli"} />
                    </picture>
                    <h1>Zilin Moulin</h1>
                    <h2>Freelance</h2>
                    <h3>Artist, Visual Designer & Front Developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <div className="about__informations__socialMedia">
                        <img src={mail} alt="mail icon" />
                        <img src={twitter} alt="twitter icon" />
                        <img src={github} alt="github icon" />
                        <img src={artstation} alt="artstation icon" />
                        <img src={instagram} alt="instagram icon" />
                        <img src={malt} alt="malt icon" />
                        <img src={twitch} alt="twitch icon" />
                    </div>
                    <div className="about__informations__line"></div>
                </section>
                <section className="about__skills">
                    <h4>Languages</h4>
                    <ul className="about__skills__languages">
                        <li>English</li>
                        <li>Chinese</li>
                        <li>French</li>
                    </ul>
                    <h4>Fields</h4>
                    <ul className="about__skills__fields">
                        <li className="about__skills__fields__art">Art & Design</li>
                        <li className="about__skills__fields__dev">Front-end Web Development</li>
                    </ul>
                    <div className="about__skills__line"></div>
                </section>
                <section className="about__career">
                    <h4>CAREER</h4>
                    <div className="about__career__trainings">
                        {careerData &&
                            careerData.map((el, index) => (
                                <div className="about__career__training" key={index}>
                                    <h5>{el.training}</h5>
                                    <p className="about__career__training__years">{el.years}</p>
                                    {el.description && el.description.map((des, index) => <p className={"about__career__training__p about__career__training__p__" + el.id + "__" + index} key={index}>{des}</p>)}
                                </div>
                            ))}
                    </div>
                    <div className="about__career__line"></div>
                </section>
                <section className="about__dev">
                    <div>
                        <h4>DEV</h4>
                        {<ul className="about__dev__skills">{devSkillsData && devSkillsData.map((skill, index) => <li className={"about__dev__skills__" + index} key={index}>{skill}</li>)}</ul>}
                    </div>
                    <div>
                        <h5>STACKS</h5>
                        {
                            <ul className="about__dev__stacks">
                                {devStacksData &&
                                    devStacksData.map((stack, index) => (
                                        <li key={index}>
                                            <figure>
                                                <img src={stack.stackLogo} alt={stack.stackName} />
                                                <figcaption>{stack.stackName}</figcaption>
                                            </figure>
                                        </li>
                                    ))}
                            </ul>
                        }
                    </div>
                    <div className="about__dev__line"></div>
                </section>
                <section className="about__art">
                    <div>
                        <h4>ART</h4>
                        {<ul className="about__art__skills">{artSkillsData && artSkillsData.map((skill, index) => <li className={"about__art__skills__" + index} key={index}>{skill}</li>)}</ul>}
                    </div>
                    <div>
                        <h5>STACKS</h5>
                        {
                            <ul className="about__art__softwares">
                                {artSoftwaresData &&
                                    artSoftwaresData.map((software, index) => (
                                        <li key={index}>
                                            <figure>
                                                <img src={software.softwareLogo} alt={software.softwareName} />
                                                <figcaption>{software.softwareName}</figcaption>
                                            </figure>
                                        </li>
                                    ))}
                            </ul>
                        }
                    </div>
                    <div className="about__art__line"></div>
                </section>
                <div className="backgroundLinesProjects linesAbout">
                    <div className="backgroundLinesProjects__line"></div>
                    <div className="backgroundLinesProjects__line  lineAbout"></div>
                    <div className="backgroundLinesProjects__line"></div>
                    <div className="backgroundLinesProjects__line  lineAbout"></div>
                    <div className="backgroundLinesProjects__line  lineAbout"></div>
                </div>
            </main>
            <RedirectTopPage />
            <Footer />
        </div>
    )
}

export default About
