import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="errorDiv">
            <p className="errorDiv__title">404</p>
            <p className="errorDiv__texte">
                Oups ! la page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className="errorDiv__link">Retourner sur la page d'accueil

            </NavLink>
        </div>
    )
}

export default Error;
