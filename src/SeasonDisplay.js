import React from "react";
import "./index.css";

const seasonConfig = {
  summer: {
    activity: "Let's go to the beach",
    icon: "sun"
  },
  winter: {
    activity: "Let's build a snowman",
    icon: "snowflake"
  }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { activity, icon } = seasonConfig[season];

  //if season is winter, icon will be snowflake, otherwise it's sun VVV - this is from semantic
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      {/* from semantic ui ^^^ */}
      <h1>{activity}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
