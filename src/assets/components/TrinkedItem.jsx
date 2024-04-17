import React from "react";
import "./styles/TrinkedItem.scss";

function TrinkedItem({ imgPath, trinketName, description }) {
  return (
    <div className="trinkedElement">
      <div className="angry-grid">
        <div id="item-0">
          <img src={imgPath} alt="trinketRef" />
        </div>

        <div className="descriptionTrinket" id="item-1">
          <ul>
            {description.map((desc, index) => (
              <li key={index}>
                <h5>{desc[0]}</h5>
                <p>{desc[1]}</p>
              </li>
            ))}
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
