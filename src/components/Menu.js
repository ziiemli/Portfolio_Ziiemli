import React from "react"
import {useState} from "react"
import {NavLink} from "react-router-dom"
// import Fetch from "../components/Fetch"

const Menu = () => {
    //data
    // const {data, error} = Fetch()
    // if (error) console.log(error)
    //data Menu
    // const dataMenu = data.menu
    //menu is active ?
    const [menu, setMenu] = useState(false)

    //homeCategories Height disable
    //select ID homeCategoriesHeight
    const homeCategoriesHeight = document.getElementById("homeCategoriesHeight")
    //if menu false > height 110%
    if (!menu) {
        homeCategoriesHeight && homeCategoriesHeight.classList.add("heightHomeCategories")
    }
    //if menu true > height disable
    else {
        homeCategoriesHeight && homeCategoriesHeight.classList.remove("heightHomeCategories")
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
                        <NavLink className="menu__active__nav__shop">
                            <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/Diamond.svg"} alt="losage select" />
                            <p>Shop</p>
                        </NavLink>
                        <NavLink className="menu__active__nav__page" >
                            <p>Home</p>
                        </NavLink>
                        <NavLink className="menu__active__nav__page">
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
