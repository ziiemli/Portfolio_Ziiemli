import React from "react"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <ul>
                <Link>
                    <li>Legal Notice</li>
                </Link>
                <Link>
                    <li>Privacy Policy</li>
                </Link>
                <Link>
                    <li>Terms and Conditions</li>
                </Link>
            </ul>
        </footer>
    )
}

export default Footer
