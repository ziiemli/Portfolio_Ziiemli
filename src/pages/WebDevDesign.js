import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"

const WebDevDesign = () => {
    //data
    const {data} = Fetch()

    //recoverData
    const {dataCategory} = RecoverDataPageCategory()

    const imageBackground = dataCategory && dataCategory.categoryBackground
    const imageBackgroundDesktop = dataCategory && dataCategory.categoryBackgroundDesktop
    const title = dataCategory && dataCategory.category
    const paragraphe = dataCategory && dataCategory.description

    //data Projects
    const projects = data.dev

    return (
        <div id="topDev">
            <Helmet>
                <title>Ziiemli - Web Development and Design</title>
                <meta name="description" content="Web Development and Web Design, discover all projects by Ziiemli" />
                <link rel="canonical" href="/Web_Development_and_Design" />
            </Helmet>
            <Header fixed="positionFixed" />
            <main className="webDevDesign heightHomeCategories">
                <CategoriesTitle image={imageBackground} imageDesktop={imageBackgroundDesktop} title={title} paragraphe={paragraphe} />
                <Projects webData={projects} />
            </main>
            <RedirectTopPage anchor="topDev" />
            <Footer />
        </div>
    )
}

export default WebDevDesign
