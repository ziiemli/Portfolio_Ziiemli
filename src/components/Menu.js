import React from "react"
import {useState} from "react"
import {NavLink} from "react-router-dom"
// import Fetch from "../components/Fetch"

const Menu = () => {
    //menu is active ?
    const [menu, setMenu] = useState(false)

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

    //contact mail
    function sendEmail() {
        window.location.href = "mailto:ziiemli@outlook.fr"
    }

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
                        <NavLink to="/" className="menu__active__nav__shop">
                            {/* {querystring && querystring === "shop" && <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />} */}
                            <p>Shop</p>
                        </NavLink>
                        <NavLink to="/home" className="menu__active__nav__page">
                            {querystring && querystring === "home" && <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />}
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/About" className="menu__active__nav__page">
                            {querystring && querystring === "About" && <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />}
                            <p>About</p>
                        </NavLink>
                        <NavLink className="menu__active__nav__page" onClick={sendEmail}>
                            <p>Contact</p>
                        </NavLink>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Menu
