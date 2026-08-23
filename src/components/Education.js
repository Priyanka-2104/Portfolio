import React from "react";
import "../assets/styles/Education.scss";

function Education() {
    return (
        <div className="education-container" id="education">
            <h1>Education</h1>

            <div className="education-grid">

                <div className="education-card">
                    <span className="education-year">2023 — 2027</span>

                    <h2>Birla Institute of Technology, Mesra</h2>

                    <h3>Bachelor of Technology in Computer Science</h3>

                    <div className="education-score">
                        CGPA: <strong>7.15</strong>
                    </div>
                </div>

                <div className="education-card">
                    <span className="education-year">2020 — 2022</span>

                    <h2>Birendra Ayan High School</h2>

                    <h3>Senior Secondary (Class XII)</h3>

                    <div className="education-score">
                        Percentage: <strong>82.6%</strong>
                    </div>
                </div>

                <div className="education-card">
                    <span className="education-year">2020</span>

                    <h2>Dr. Bhabha Public School</h2>

                    <h3>Secondary (Class X)</h3>

                    <div className="education-score">
                        Percentage: <strong>80.6%</strong>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education;