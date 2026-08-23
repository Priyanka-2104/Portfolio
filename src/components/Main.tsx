//import React from "react";
import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profilePic from "../assets/images/priyanka.png"; // <-- Import the image directly
import "../assets/styles/Main.scss";

function Main() {
  useEffect(() => {
    document.title = "Priyanka Kumari | Data Analyst";
  }, []);
  return (
    <div className="container">
      <div className="about-section">
        <div className="glass-card">
          <div className="image-wrapper">
            <img src={profilePic} alt="Priyanka Kumari" /> {/* <-- Use variable here */}
          </div>

          <div className="content">
            <div className="social_icons">
              <a
                href="https://github.com/Priyanka-2104"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/elegon/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>

            <h1>Priyanka Kumari</h1>
            <p className="role">Data Analyst</p>

            <a className="email-link" href="mailto:priyanka28533@gmail.com">
              priyanka28533@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;