import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"

const WebDevDesign = () => {
    //querystring
    const querystring = window.location.pathname
    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    const dev = data.home

    const recoverData = dev && dev.find(async (el) => el === querystring)
    console.log(recoverData)

    const imageBackground = recoverData && recoverData.categoryBackground
    const title = recoverData && recoverData.category
    const paragraphe = recoverData && recoverData.description

    //data projects
    const projects = data.dev
    


    return (
        <div>
            <Header />
            <main className="webDevDesign">
                <CategoriesTitle image={imageBackground} title={title} paragraphe={paragraphe} />
                <Projects data={projects}/>
                <RedirectTopPage />
            </main>
        </div>
    )
}

export default WebDevDesign
