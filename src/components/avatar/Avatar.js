import React from 'react'

export default function Avatar({srcUrl = "https://reqres.in/img/faces/7-image.jpg"}) {
    return (
        <div className="avatar">
            <img className="image" src={srcUrl} alt={"User Image"}/>
        </div>
    )
}
