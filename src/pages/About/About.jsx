import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Aboutimg from "../../assets/images/about-background.png";

import Datacollapses from "../../datas/collapses.json";


const About = () => {
    return (
        <div className="Aboutpage">
            <Header />
            <main>
                <Banner image={Aboutimg} />
                
                    <div className="collapse__dropdown">
                        {Datacollapses.map((item) => {
                            return (
                                <div key={item.id} className="collapse__item">
                                    <Collapse content={item.content} title={item.title} />
                                </div>
                            );
                        })}
                    </div>
                
            </main>
            <Footer />
        </div>
    );
};

export default About;
