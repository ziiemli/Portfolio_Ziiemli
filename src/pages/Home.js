import React from "react"
import {NavLink} from "react-router-dom"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import {Helmet} from "react-helmet-async"

const Home = () => {
    //data Home Page
    const {data, error} = Fetch()
    if (error) console.log(error)

    const categories = data.home

    return (
        <div>
            <Helmet>
                <title>Ziiemli - Home</title>
                <meta
                    name="description"
                    content="Home page, select Web Development and Design, Digital Art, Traditional Art or Others."
                />
                <link rel="canonical" href="/home" />
            </Helmet>
            <Header />
            <main className="homeCategories" id="homeCategoriesHeight">
                {/* display Categories */}
                {categories &&
                    categories.map((category) => (
                        <NavLink to={"/" + category.nav} className="nav" key={category.id}>
                            <article className="homeCategories__article">
                                <h2 className="homeCategories__article__title">{category.category}</h2>
                                <div className="homeCategories__article__gradient"></div>
                                <img src={category.image} alt={"image to illustrate the " + category.category + " category"} />
                            </article>
                        </NavLink>
                    ))}
            </main>
            <div className="backgroundHome">
                <div className="backgroundLines">
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                </div>
                <picture>
                    <source media="(min-width: 996px)" srcSet={`${process.env.PUBLIC_URL}/assets/img/home/Background_Desktop.png`} />
                    <img src={`${process.env.PUBLIC_URL}/assets/img/home/Background_Mobile.png`} alt="Gray background with soft forms in translucent" />
                </picture>
            </div>
        </div>
    )
}

export default Home
