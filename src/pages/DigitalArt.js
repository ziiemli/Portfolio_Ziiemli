import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"

const DigitalArt = () => {
    //querystring
    const querystring = window.location.pathname
    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    //data Home
    const homeData = data.home
    const recoverData = homeData && homeData[1]
  
    //find good Data for CategoriesTitle
    // const recoverData2 = digital && digital.filter(async (el) => el === 2)
    // console.log(recoverData2);

    const imageBackground = recoverData && recoverData.categoryBackground
    const imageBackgroundDesktop = recoverData && recoverData.categoryBackgroundDesktop
    const title = recoverData && recoverData.category
    const paragraphe = recoverData && recoverData.description

    //data Projects
    // const projects = data.digital

    //data Digita Artworks 
    const digitalArtworks = data.digital

    return (
        <div id="topDigital">
            <Header />
            <main className="webDevDesign">
                <CategoriesTitle image={imageBackground} imageDesktop={imageBackgroundDesktop} title={title} paragraphe={paragraphe} />
                <Projects digitalArtworks={digitalArtworks} />
                {/* <ProjectsDigital /> */}
            </main>
            <RedirectTopPage anchor="topDigital" />
            <Footer />
        </div>
    )
}

export default DigitalArt
