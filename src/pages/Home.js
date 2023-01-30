import React from "react"
import {NavLink} from "react-router-dom"
import Header from "../components/Header"
import Fetch from "../components/Fetch"

const Home = () => {

    //data Home Page
    const {data, error} = Fetch()
    if (error) console.log(error)

    const categories = data.home

    return (
        <div>
            <Header />
            <main className="homeCategories" id="homeCategoriesHeight">
                {/* display Categories */}
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
                <img src={process.env.PUBLIC_URL + "assets/img/home/Background_Mobile.png"} alt="Gray background with soft forms in translucent" />
            </div>
        </div>
    )
}

export default Home
