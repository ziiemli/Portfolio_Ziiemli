import React from "react"

const RedirectTopPage = ({anchor}) => {
    return (
        <section>
            <div className="redirectTopPage">
                <a className="redirectTopPage__svg" href={"#" + anchor} >
                    <img className="redirectTopPage__svg__arrowTop" src={process.env.PUBLIC_URL + "assets/Arrow_Top.svg"} alt="" />
                </a>
                <a href="mailto:ziiemli@outlook.fr" className="redirectTopPage__svg">
                    <img className="redirectTopPage__svg__mail" src={process.env.PUBLIC_URL + "assets/Mail.svg"} alt="" />
                </a>
            </div>
        </section>
    )
}

export default RedirectTopPage
