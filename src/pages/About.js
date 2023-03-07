import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const About = () => {
    const mail = process.env.PUBLIC_URL + "/assets/About_Mail.svg"
    const twitter = process.env.PUBLIC_URL + "/assets/Twitter.svg"
    const github = process.env.PUBLIC_URL + "/assets/github.svg"
    const artstation = process.env.PUBLIC_URL + "/assets/artstation.svg"
    const instagram = process.env.PUBLIC_URL + "/assets/artstation.svg"
    const malt = process.env.PUBLIC_URL + "/assets/artstation.svg"
    const twitch = process.env.PUBLIC_URL + "/assets/artstation.svg"

    return (
        <div id="topAbout">
            <Header />
            <main className="about">
                <section className="about__informations">
                    <h1>Zilin Moulin</h1>
                    <h2>Freelance</h2>
                    <h3>Artist, Visual Designer & Front Developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <div className="about__informations__socialmedia">
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
                    <h4>Fields</h4>
                </section>
                <section className="about__career">
                    <h4>CAREER</h4>
                </section>
                <section className="about__dev">
                    <h4>DEV</h4>
                </section>
                <section className="about__art">
                    <h4>ART</h4>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About
