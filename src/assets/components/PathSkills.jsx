import React from "react";
import "./styles/PathSkills.scss";

const PathSkills = ({ index, heroWiki, pathN, imgPath }) => {
  return (
    <div>
      <h4>{heroWiki[0].heroPaths[index][1][pathN]}</h4>
      <div className="pathSkills">
        <img src={imgPath} alt="" />

        <div className="pathData">
          <ul>
            <li>
              <h5>Rank = 1</h5>
              <span>+25% DMG</span>
            </li>
            <li>
              <h5>Rank = 3</h5>
              <span>-25% DMG</span>
            </li>
            <li>
              <h5>Rank = 4</h5>
              <span>-50% DMG</span>
            </li>
            <li>
              <h5>Point Blank Shot </h5>
              <span>Add Riposte</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PathSkills;
