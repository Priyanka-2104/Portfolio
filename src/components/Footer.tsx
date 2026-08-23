import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="https://github.com/Priyanka-2104"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://linkedin.com/in/elegon/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p className="footer-message">
        Building ideas, learning every day, and growing along the way.
        <span className="footer-heart">♥</span>
      </p>
    </footer>
  );
}

export default Footer;