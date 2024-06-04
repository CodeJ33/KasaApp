import { useState } from "react";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    return (
        <section className="sliderContainer">
            {length > 1 && (
                <p className="" onClick={previousSlide} >
                    <i className="fa-solid fa-chevron-left"></i>
                </p>
            )}
            {length > 1 && (
                <p className="" onClick={nextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </p>
            )}
            {slides.map((slide, index) => (
                <div key={index} className={index === current ? "slider on" : "slider"}>
                    {index === current && <img src={slide} className="slideImg" alt="slide" />}
                    {index === current && length > 1 && (<span className="slide__num">{current + 1}/{length}</span>)}
                </div>
            ))}
        </section>
    );
};

export default Slider;
