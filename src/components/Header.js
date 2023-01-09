import React from "react"
import Logo from "./Logo"

const Header = () => {
    return (
        <header>
            <Logo />
            <div className="menu">
                <div className="menu__line"></div>
                <div className="menu__line"></div>
                <div className="menu__line"></div>
            </div>
        </header>
    )
}

export default Header
