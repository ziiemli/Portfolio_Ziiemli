import React from "react"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <ul>
                <Link to="/LegalNotice">
                    <li>Legal Notice</li>
                </Link>
                <Link to="/PrivacyPolicy">
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/TermsAndConditions">
                    <li>Terms and Conditions</li>
                </Link>
            </ul>
        </footer>
    )
}

export default Footer
