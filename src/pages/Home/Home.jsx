import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import Homepageimg from"../../assets/images/homepagebanner.png"

const Homepage =() => {
    return (
        <div className = "Homepage">
            <Header />
            <main>
            <Banner texte="Chez vous, partout et ailleurs" image={Homepageimg}/>
            <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;