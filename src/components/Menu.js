import React from "react"
import {useState} from "react"
import {NavLink} from "react-router-dom"
// import Fetch from "../components/Fetch"

const Menu = () => {
    //menu is active ?
    const [menu, setMenu] = useState(false)

    // // homeCategories Height disable
    // //select ID homeCategoriesHeight
    // const homeCategoriesHeight = document.getElementById("homeCategoriesHeight")
    // //if menu false > height 110%
    // if (!menu) {
    //     homeCategoriesHeight && homeCategoriesHeight.classList.add("heightHomeCategories")
    // }
    // //if menu true > height disable
    // else {
    //     homeCategoriesHeight && homeCategoriesHeight.classList.remove("heightHomeCategories")
    // }

    //no scroll when menu is open
    //select body tag
    const bodyContent = document.querySelector("body")
    //if menu false > remove overflow = hidden to body tag
    if (!menu) {
        bodyContent && bodyContent.classList.remove("bodyOverflow")
    }
    //if menu true > add overflow = hidden to body tag
    else {
        bodyContent && bodyContent.classList.add("bodyOverflow")
    }
    

    //diamond selected page active?
    const querystring = window.location.pathname.split("/").join("")

    return (
        <div>
            <div className="menu" onClick={(e) => setMenu(!menu)}>
                <div className="menu__line"></div>
                <div className="menu__line"></div>
                <div className="menu__line"></div>
            </div>
            {menu && (
                <section className="menu__active">
                    <div className="menu__active__nav">
                        <NavLink className="menu__active__nav__shop">
                            {querystring && querystring === "shop" && <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />}
                            <p>Shop</p>
                        </NavLink>
                        <NavLink  to="/home" className="menu__active__nav__page">
                            {querystring && querystring === "home" && <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />}
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/About" className="menu__active__nav__page">
                            {querystring && querystring === "about" && <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />}
                            <p>About</p>
                        </NavLink>
                        <NavLink className="menu__active__nav__page">
                            <p>Contact</p>
                        </NavLink>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Menu
