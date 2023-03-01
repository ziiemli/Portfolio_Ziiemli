import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"

const Others = () => {
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
        <div id="topOthers">
            <Header />
            <main className="others">
                <CategoriesTitle image={imageBackground} imageDesktop={imageBackgroundDesktop} title={title} paragraphe={paragraphe} />
            </main>
            <RedirectTopPage anchor="topOthers" />
            <Footer />
        </div>
    )
};

export default Others;