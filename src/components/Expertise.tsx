import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faBrain,
    faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "Matplotlib",
    "Seaborn",
    "Excel",
    "Probability & Statistics",
];

const labelsSecond = [
    "C++",
    "Java",
    "Scikit-learn",
    "OOP",
    "DSA",
];

const labelsThird = [
    "Git",
    "GitHub",
    "Streamlit",
    "Jupyter Notebook",
    "Google Colab",
    "VS Code",
    "HTML",
    "CSS",
    "OpenAI",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">

                <h1>Expertise</h1>

                <div className="skills-grid">

                    {/* Data Analytics */}
                    <div className="skill">
                        <FontAwesomeIcon
                            icon={faChartSimple}
                            size="3x"
                        />

                        <h3>Data Analytics</h3>

                        <p>
                            I work with data to uncover patterns, generate
                            meaningful insights, and support data-driven
                            decision making. My experience includes data
                            cleaning, exploratory data analysis, visualization,
                            and working with real-world datasets.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Tech stack:
                            </span>

                            {labelsFirst.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Programming & Machine Learning */}
                    <div className="skill">
                        <FontAwesomeIcon
                            icon={faBrain}
                            size="3x"
                        />

                        <h3>Programming & Machine Learning</h3>

                        <p>
                            I use programming and machine learning techniques
                            to solve practical problems and build predictive
                            solutions. My experience includes data
                            preprocessing, feature engineering, model
                            training, evaluation, and applying machine
                            learning to real-world datasets.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Tech stack:
                            </span>

                            {labelsSecond.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="skill">
                        <FontAwesomeIcon
                            icon={faLaptopCode}
                            size="3x"
                        />

                        <h3>Tools & Platforms</h3>

                        <p>
                            I use a range of development and analytics tools
                            to build, test, visualize, and deploy data-driven
                            applications. I am comfortable working with
                            development environments, version control,
                            notebooks, and interactive application platforms.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Tech stack:
                            </span>

                            {labelsThird.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;