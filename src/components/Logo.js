import React from "react"
import {Link} from "react-router-dom"

const Logo = () => {
    return (
        <div>
            <Link to="/home">
                <img src={process.env.PUBLIC_URL + "assets/Logo.png"} alt="Logo of Ziiemli" />
            </Link>
        </div>
    )
}

export default Logo
