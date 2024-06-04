import React from "react";


export default function Host(props) {
    return (
        <>
        <div className="hostInfo">
        <span className="hostName">{props.name}</span>
        <img className="hostImg" src={props.picture} alt="host" />
        </div>

        </>
    )

}