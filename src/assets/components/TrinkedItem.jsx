import React from "react";
import "./styles/TrinkedItem.scss";

function TrinkedItem() {
  return (
    <div className="trinkedElement">
      <div class="angry-grid">
        <div id="item-0">
          <img src="https://picsum.photos/200/200" alt="Picsum Image" />
        </div>

        <div id="item-1">
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
          </ul>
        </div>

        <div id="item-2">
          <h5>NAME</h5>
          <i>Rarity</i>
          <br />
          <span>PriceMarket</span>
        </div>
      </div>
    </div>
  );
}

export default TrinkedItem;
