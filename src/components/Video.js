import React from "react"

const Video = ({video}) => {
    return (
        <div className="projectDevContent__screen">
            <video controls autoplay loop muted playsinline>
                <source src={video} type="video/webm" />
            </video>
        </div>
    )
}

export default Video
