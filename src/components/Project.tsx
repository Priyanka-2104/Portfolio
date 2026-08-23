import React from "react";
import churn from '../assets/images/churn.png';
import satellite from '../assets/images/satellite.png';
import factOpinion from '../assets/images/fact-opinion.png';
import calculator from '../assets/images/calculator.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                {/* Customer Churn Analysis & Prediction */}
                <div className="project">
                    <a
                        href="https://github.com/Priyanka-2104/Customer-churn-analysis"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={churn}
                            className="zoom"
                            alt="Customer Churn Analysis and Prediction"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/Priyanka-2104/Customer-churn-analysis"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Customer Churn Analysis & Prediction</h2>
                    </a>

                    <p>
                        Analyzed customer data to identify churn patterns, built a
                        machine learning model for prediction, and deployed an
                        interactive Streamlit application.
                    </p>
                </div>


                {/* Satellite Land Cover Classification */}
                <div className="project">
                    <a
                        href="https://github.com/Priyanka-2104/Satellite-Land-Cover-Classification"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={satellite}
                            className="zoom"
                            alt="Satellite Land Cover Classification"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/Priyanka-2104/Satellite-Land-Cover-Classification"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Satellite Land Cover Classification</h2>
                    </a>

                    <p>
                        Developed a machine learning project to classify different
                        land cover types from satellite imagery.
                    </p>
                </div>


                {/* Fact vs Opinion Detection */}
                <div className="project">
                    <a
                        href="https://github.com/Priyanka-2104/Fact_vs_Opinion_Detection_using_Classical_ML-BiLSTM"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={factOpinion}
                            className="zoom"
                            alt="Fact vs Opinion Detection"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/Priyanka-2104/Fact_vs_Opinion_Detection_using_Classical_ML-BiLSTM"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Fact vs Opinion Detection</h2>
                    </a>

                    <p>
                        Built a text classification project to distinguish factual
                        statements from opinions using machine learning and
                        BiLSTM-based approaches.
                    </p>
                </div>


                {/* Scientific Calculator */}
                <div className="project">
                    <a
                        href="https://github.com/Priyanka-2104/html-scientific-calculator"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={calculator}
                            className="zoom"
                            alt="Scientific Calculator"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/Priyanka-2104/html-scientific-calculator"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Scientific Calculator</h2>
                    </a>

                    <p>
                        Developed a responsive scientific calculator using HTML,
                        CSS, and JavaScript with support for mathematical operations.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;