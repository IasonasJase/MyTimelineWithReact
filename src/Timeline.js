import React from "react";
import football from "./photos/football.svg";
import headphones from "./photos/headphones.svg";
import ipod from "./photos/ipod.svg";
import music from "./photos/music.svg";

const Timeline = ({ timeline, index }) => {
  const iconsArray = [football, headphones, ipod, music];
  const conditionalClassName = index % 2 === 0 ? "left" : "right";
  return (
    <div className="timeline">
      <div className={`container ${conditionalClassName}`}>
        <div className="date">{timeline.date}</div>

        <div className="orange-box">
          <p>{timeline.text}</p>
        </div>
        <div className="img-border">
          <img alt="football-icon" src={iconsArray[index % 4]} className="fa-icon" />
        </div>
        <div className="black-box">
          <p>{timeline.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
