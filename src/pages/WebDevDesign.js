import React from "react"
// import {Link} from "react-router-dom"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"

const WebDevDesign = () => {
    //querystring
    const querystring = window.location.pathname
    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    const recoverData = data.find(async (el) => el === querystring)
    console.log(recoverData)

    const imageBackground = recoverData && recoverData.categoryBackground
    const title = recoverData && recoverData.category
    const paragraphe = recoverData && recoverData.description

    return (
        <div>
            <Header />
            <main className="webDevDesign">
                <CategoriesTitle image={imageBackground} title={title} paragraphe={paragraphe} />
                {/* <h2>PROJECTS</h2> */}
                {/* <Link to={"/"}>
                    <article>
                        <h3></h3>
                        <img src="" alt="" />
                        <div></div>
                        <img src="" alt="" />
                    </article>
                </Link> */}
            </main>
        </div>
    )
}

export default WebDevDesign
