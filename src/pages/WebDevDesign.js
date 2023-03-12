import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
// import {gsap} from "gsap"
// import {ScrollTrigger, ScrollToPlugin} from "gsap/all"

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const WebDevDesign = () => {
    //GSAP
    // const slideInTop = (elem, delay, duration) => {
    //     gsap.fromTo(
    //         elem,
    //         {
    //             opacity: 0,
    //             y: -200,
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             delay: delay || 0.4,
    //             duration: duration || 0.6,
    //             scrollTrigger: {
    //                 trigger: elem,
    //                 start: "top center",
    //                 end: "bottom center",
    //             },
    //         }
    //     )
    // }
    // // const disappear = (elem) => {
    // //     gsap.to(elem, {
    // //         opacity: 0,
    // //         y: -500,
    // //         scrollTrigger: {
    // //             trigger: elem,
    // //         },
    // //     })
    // // }
    // // useEffect(() => {
    // //     slideInTop("#test")
    // // }, [])
    // useEffect(() => {
    //     slideInTop("#test2")
    // }, [])

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
            <Header />
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
