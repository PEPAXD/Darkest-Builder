import React from 'react'
import './styles/PathSkills.scss'

const PathSkills = ({ index, heroWiki, pathN, imgPath }) => {
    return (
      <div>
        <h4>{heroWiki[0].heroPaths[index][1][pathN]}</h4>
        <div className="pathSkills">
          <img
            src={imgPath}
            alt=""
          />
  
          <div className="pathData">
            <ul>
              <li>+20% Max HP</li>
              <li>If Rank = 1: +25% DMG</li>
              <li>-33% Bleed dd2 Chance</li>
              <li>Turn Start: Bleed (25%)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
export default PathSkills