import React, {useEffect} from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
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

    //querystring
    const querystring = window.location.pathname
    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    //data Home
    const dev = data.home

    //find good Data for CategoriesTitle
    const recoverData = dev && dev.find(async (el) => el === querystring)

    const imageBackground = recoverData && recoverData.categoryBackground
    const title = recoverData && recoverData.category
    const paragraphe = recoverData && recoverData.description

    //data Projects
    const projects = data.dev

    return (
        <div id="topDev">
            <Header />
            <main className="webDevDesign">
                <CategoriesTitle image={imageBackground} title={title} paragraphe={paragraphe} />
                <Projects data={projects} />
            </main>
            <RedirectTopPage anchor="topDev" />
            <Footer />
        </div>
    )
}

export default WebDevDesign
