import React from "react";
import "./styles/TrinkedItem.scss";

function TrinkedItem({ imgPath, trinketName }) {
  return (
    <div className="trinkedElement">
      <div className="angry-grid">
        <div id="item-0">
          <img src={imgPath} alt="trinketRef" />
        </div>

        <div className="descriptionTrinket" id="item-1">
          <ul>
            <li>
              <h5>Turn Start:</h5>
              <p>If First in Turn Order Crit-Token 66%</p>
            </li>
            <li>
              <h5>Self:</h5>
              <p>
                Duelist's Advance Skill: Immobilize-Token 66% vs Creature: -90%
                Healing Received from Skills
              </p>
            </li>
          </ul>
        </div>

        <div className="raritySection" id="item-2">
          <h5>{trinketName}</h5>
          <i>Indelible</i>
          <br />
          <span>
            65 <img src="public/icon/Baubles.webp" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TrinkedItem;
