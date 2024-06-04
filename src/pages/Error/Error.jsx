import React from "react";
import Header from "../../components/Header/Header";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";

const Errorpage = () => {
    return (
        <div className="errorPage">
        <Header />
        <main>
            <Error />
            </main>
            <Footer />
        </div>
    );
}

export default Errorpage;