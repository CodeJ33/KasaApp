import React from "react";
import { Link } from "react-router-dom";


export default function Card ({image, title,link}) {
    return (
        <article className="card-logement">
            <Link to={link}>
            <div className="card">
            <img src={image} alt="location" />
            <div className="card-logement__text">
                <h2 className="card-logement__title">{title}</h2>

            </div>
            </div>
            </Link>
        </article>
    )

}