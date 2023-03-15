import React from "react"
import {Helmet} from "react-helmet"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Ziiemli - Error</title>
                <meta name="description" content="Error" />
                <link rel="canonical" href="*" />
            </Helmet>
            <Header />
            <main className="error">
                <h1>ERROR PAGE</h1>
            </main>
            <Footer />
        </div>
    )
}

export default Error
