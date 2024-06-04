import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FicheLogeDisplay from "../../components/FicheLogement/FicheLogeDisplay";

const FicheLog = () => {
    return (
        <div className="ficheLogement">
            <Header />
            <main>
                <FicheLogeDisplay />
            </main>
            <Footer />
        </div>

    )
}

export default FicheLog;