import React from "react";
import "./styles/HeroWikiPage.scss"

function HeroWikiPage({ url_Bg, heroName }) {
  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="containHeroWiki">

        <h1>{heroName}</h1>

        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
