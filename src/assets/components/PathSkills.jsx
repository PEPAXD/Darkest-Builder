import React from "react";
import "./styles/PathSkills.scss";

const PathSkills = ({ index, heroWiki, pathN, imgPath, skills, borderStyle }) => {
  return (
    <div className="boxPath" >
      <h4 >{heroWiki[0].heroPaths[index][1][pathN]}</h4>
      <div className="pathSkills" style={borderStyle ? {border: "3px solid #7490A8"} : {}}>
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
