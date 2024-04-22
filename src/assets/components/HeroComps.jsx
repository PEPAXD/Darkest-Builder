import React from "react";
import "./styles/HeroComps.scss";

function HeroComps({ heroname, trueHero }) {
  return (
    <div>
      <div className="heroFriend">
        <div
          className="friendContainer"
          style={{ border: trueHero ? "2px solid Cyan" : "2px solid #505455" }}
        >
          <img src={`public/HeroProfile/faceHero/${heroname}-portrait.png`} />
        </div>
        <i>{heroname}</i>
      </div>
    </div>
  );
}

export default HeroComps;
