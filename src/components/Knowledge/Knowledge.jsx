import React, { useEffect, useState } from "react";
import "./Knowledge.css";
import Skill from "../skill/skill";
import Mark from "../Mark/Mark";
import Question from "../Question/Question";
import Time from "../Time/Time";

const Knowledge = () => {
  const [skills, setSkills] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  const [readTimes, setReadTimes] = useState([]);

  const handleData = (skill) => {
    const newArray = [...bookMarks, skill];

    setBookMarks(newArray);

    // if (skill.id === bookMarks.id) {
    //   alert("this blog id is clicked");
    // }
  };

  const handleReadTime = (time) => {
    const newArray = [...readTimes, time];
    setReadTimes(newArray);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="knowledge-container">
      <div className="skill-container">
        {skills.map((skill) => (
          <Skill
            skill={skill}
            key={skill.id}
            handleData={handleData}
            handleReadTime={handleReadTime}
          ></Skill>
        ))}
        {/* question -blog */}
        <Question></Question>
      </div>
      <div className="skill-info">
        <Time readTimes={readTimes}></Time>
        <Mark bookMarks={bookMarks}></Mark>
      </div>
    </div>
  );
};

export default Knowledge;
