import React from "react"
import "../css/Card.css"

export default function Card(props) {
    const { title, stats, openSpots, coverImg, price, location } = props;

    let badgeText = '';

    if (openSpots === 0) badgeText = "SOLD OUT";
    else if(props.location === "Online") badgeText = "ONLINE";

    return (
        <div className="card">
            {
                badgeText && <div className="card-badge" >{badgeText}</div>
            }
            <img src={coverImg} />
            <div className="card-stats">
                <img src="./star.png" alt="" className="card-star" />
                <span>{stats.rating} </span>
                <span>({stats.reviewCount}) · </span>
                <span> {location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p className="card-price"><b>From ₹{price} </b>/ person</p>
        </div>
    )
}