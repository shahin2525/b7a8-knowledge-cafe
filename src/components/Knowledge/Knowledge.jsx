import React, { useEffect, useState } from "react";
import "./Knowledge.css";
import Skill from "../skill/skill";

const Knowledge = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="knowledge-container">
      <div className="skill-container">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id}></Skill>
        ))}
      </div>
      <div className="skill-info">
        <h2>knowledge information</h2>
      </div>
    </div>
  );
};

export default Knowledge;
