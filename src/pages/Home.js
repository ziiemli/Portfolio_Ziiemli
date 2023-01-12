import React from "react"
import {NavLink} from "react-router-dom"
import Header from "../components/Header"
import backgroundHome from "../assets/img/home/Background_Mobile.png"
import Fetch from "../components/Fetch"

const Home = () => {
    const {data, error} = Fetch()
    if (error) console.log(error)

    const categories = data

    return (
        <div>
            <Header />
            <main className="homeCategories">
                {categories &&
                    categories.map((category) => (
                        <NavLink to={category.nav} className="nav" key={category.id}>
                            <article className="homeCategories__article">
                                <h2 className="homeCategories__article__title">{category.category}</h2>
                                <div className="homeCategories__article__gradient"></div>
                                <img src={category.image} alt={"image to illustrate the " + category.category + " category"} />
                            </article>
                        </NavLink>
                    ))}
            </main>
            <div className="backgroundHome">
                <img src={backgroundHome} alt="Gray background with soft forms in translucent" />
            </div>
        </div>
    )
}

export default Home
