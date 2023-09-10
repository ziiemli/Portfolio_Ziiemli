import React from "react"

const Video = ({Webm, Mp4}) => {
    return (
        <div className="projectDevContent__screen">
            <video controls autoplay loop muted playsinline>
                <source src={Webm} type="video/webm" />
                <source src={Mp4} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
