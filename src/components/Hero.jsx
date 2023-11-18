import React from "react"
import "../css/Hero.css"
import heroimage from "../../public/photo-grid.png"
export default function Hero () {
    return (
        <div className="hero">
            <img src={heroimage} alt="" />
            <h1>Online Experiences</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur quidem molestias, natus eaque cumque!</p>
        </div>
    )
}