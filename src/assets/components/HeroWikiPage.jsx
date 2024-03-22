import React from "react";
import "./styles/HeroWikiPage.scss";

function HeroWikiPage({ url_Bg, heroName }) {
  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="containHeroWiki">

          <div className="contain-pathHero">
            <input placeholder={heroName} type="text" required=""></input>
            <input placeholder={heroName} type="text" required=""></input>

          </div>

          <div className="contain-WikiData">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit, cumque voluptatibus itaque soluta dolore dolores qui, assumenda debitis totam repudiandae? Libero impedit obcaecati mollitia tempora architecto ab, incidunt similique.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
