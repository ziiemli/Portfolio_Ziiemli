import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"

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
            <Header fixed="positionFixed"/>
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
