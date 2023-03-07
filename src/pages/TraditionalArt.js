import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"

const TraditionalArt = () => {
    //data
    const {data} = Fetch()

    //recoverData
    const {dataCategory} = RecoverDataPageCategory()

    const imageBackground = dataCategory && dataCategory.categoryBackground
    const imageBackgroundDesktop = dataCategory && dataCategory.categoryBackgroundDesktop
    const title = dataCategory && dataCategory.category
    const paragraphe = dataCategory && dataCategory.description

    //data Projects
    // const projects = data.digital

    //data Digita Artworks
    const traditionalArtworks = data.traditional

    return (
        <div id="topTraditional">
            <Header />
            <main className="traditionalArt">
                <CategoriesTitle image={imageBackground} imageDesktop={imageBackgroundDesktop} title={title} paragraphe={paragraphe} />
                <Projects traditionalArtworks={traditionalArtworks} />
            </main>
            <RedirectTopPage anchor="topTraditional" />
            <Footer />
        </div>
    )
}

export default TraditionalArt
