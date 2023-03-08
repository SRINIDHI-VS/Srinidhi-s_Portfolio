import React from "react";
import data from "../assets/datas.json";

const Experience = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <ExperienceItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Experience;
