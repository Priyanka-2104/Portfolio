import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>

          {/* Dainik Bhaskar */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2026 - July 2026"
            contentStyle={{
              background: "#EDE7F6",
              color: "rgb(39, 40, 34)",
            }}
            iconStyle={{
              background: "#4B0082",
              color: "#FFFFFF",
            }}
            icon={<FontAwesomeIcon icon={faChartLine} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analysis Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Dainik Bhaskar
            </h4>

            <p>
              Data Analysis, Machine Learning, Data Visualization, and
              Predictive Modeling
            </p>
          </VerticalTimelineElement>

          {/* Shakuntala Poddar Welfare Foundation */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2025 - January 2026"
            contentStyle={{
              background: "#EDE7F6",
              color: "rgb(39, 40, 34)",
            }}
            iconStyle={{
              background: "#4B0082",
              color: "#FFFFFF",
            }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">
              Business Development & Web Content Writing Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Shakuntala Poddar Welfare Foundation
            </h4>

            <p>
              Business Development, Web Content Writing, Research, and
              Digital Communication
            </p>
          </VerticalTimelineElement>

          {/* The Dhansu */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - December 2025"
            contentStyle={{
              background: "#EDE7F6",
              color: "rgb(39, 40, 34)",
            }}
            iconStyle={{
              background: "#4B0082",
              color: "#FFFFFF",
            }}
            icon={<FontAwesomeIcon icon={faPenNib} />}
          >
            <h3 className="vertical-timeline-element-title">
              Script Writer
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              The Dhansu
            </h4>

            <p>
              Script Writing, Topic Research, Storytelling, and Content
              Development
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;