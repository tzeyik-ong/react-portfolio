import React, { useState } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={"Portfolio".split("")} 
                        idx={15}/>
                </h1>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Portfolio