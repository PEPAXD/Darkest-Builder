import React from "react";
import "./styles/PathSkills.scss";

const PathSkills = ({ index, heroWiki, pathN, imgPath, skills }) => {
  return (
    <div>
      <h4>{heroWiki[0].heroPaths[index][1][pathN]}</h4>
      <div className="pathSkills">
        <img src={imgPath} alt="" />

        <div className="pathData">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <h5>{skill[0]}</h5>
                <span>{skill[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PathSkills;
