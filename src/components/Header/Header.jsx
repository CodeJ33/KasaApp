import logo from "../../assets/images/LOGO.svg";
import Nav from "../Nav/Nav";

export default function Header() {
    return (
        <header className="head-logo-nav">
            <figure className="logo-container">
                <img className="logo" src={logo} alt="logo de l'agence kasa" />

            </figure>
            <Nav  />
        </header>
    );
}