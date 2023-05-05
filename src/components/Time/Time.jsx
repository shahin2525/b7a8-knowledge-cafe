import React from "react";
import "./Time.css";

const Time = (props) => {
  console.log(props.readTimes);
  const times = props.readTimes;
  let totalTime = 0;
  for (const time of times) {
    totalTime = totalTime + time.read_time;
  }
  return (
    <div>
      <p className="time-adder">Spend time on read:{totalTime}</p>
    </div>
  );
};

export default Time;
