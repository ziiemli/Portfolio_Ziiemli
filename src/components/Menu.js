import React from "react"
import {useState} from "react"
import {NavLink} from "react-router-dom"

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
                        <a href="https://shop.ziiemli.com/" className="menu__active__nav__shop" target="_blank" rel="noreferrer">
                            <p>Shop</p>
                            <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="diamond indicating selection" />
                        </a>
                        <NavLink to="/home" className="menu__active__nav__page">
                            <p>Home</p>
                            {querystring && querystring === "home" ? <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="diamond indicating selection" /> : <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="diamond indicating selection" />}
                        </NavLink>
                        <NavLink to="/About" className="menu__active__nav__page">
                            <p>About</p>
                            {querystring && querystring === "About" ? <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="diamond indicating selection" /> : <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="diamond indicating selection" />}
                        </NavLink>
                        <NavLink className="menu__active__nav__page" onClick={sendEmail}>
                            <p>Contact</p>
                            <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="diamond indicating selection" />
                        </NavLink>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Menu
