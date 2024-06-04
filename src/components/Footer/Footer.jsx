import React from "react";
import logofooter from "../../assets/images/logo_footer.png";


const footer=() => {
    return (
        <footer className="footer">
            <img className="footer-img" src={logofooter} alt="logo du pied de page"></img>
            <p className="footer-text"> 2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default footer;