import React, { useEffect, useState } from "react";
import "./Knowledge.css";
import Skill from "../skill/skill";
import Mark from "../Mark/Mark";

const Knowledge = () => {
  const [skills, setSkills] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);

  const handleData = (skill) => {
    const newArray = [...bookMarks, skill];
    // console.log(newArray);
    setBookMarks(newArray);
    // if (skill.id === bookMarks.id) {
    //   alert("this blog id is clicked");
    // }
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
          <Skill skill={skill} key={skill.id} handleData={handleData}></Skill>
        ))}
      </div>
      <div className="skill-info">
        <Mark bookMarks={bookMarks}></Mark>
      </div>
    </div>
  );
};

export default Knowledge;
