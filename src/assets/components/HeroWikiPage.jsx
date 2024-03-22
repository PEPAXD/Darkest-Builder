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
          <div className="heroRef">
            <input placeholder={heroName} type="text" required=""></input>
            <img src={`public/HeroBG/${heroName}.png`} alt="Hero" />

            <div className="heroPath">
              <cite>"path Phrase LoreHero text"</cite>

              <div className="pathRoad">
                <input type="radio" id="A" name="choice" value="A" />
                <label for="A">A</label>

                <input type="radio" id="B" name="choice" value="B" />
                <label for="B">B</label>

                <input type="radio" id="C" name="choice" value="C" />
                <label for="C">C</label>

                <input type="radio" id="D" name="choice" value="D" />
                <label for="D">D</label>
              </div>
            </div>
          </div>

          <div className="contain-WikiData">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              velit, cumque voluptatibus itaque soluta dolore dolores qui,
              assumenda debitis totam repudiandae? Libero impedit obcaecati
              mollitia tempora architecto ab, incidunt similique.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              velit, cumque voluptatibus itaque soluta dolore dolores qui,
              assumenda debitis totam repudiandae? Libero impedit obcaecati
              mollitia tempora architecto ab, incidunt similique.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              velit, cumque voluptatibus itaque soluta dolore dolores qui,
              assumenda debitis totam repudiandae? Libero impedit obcaecati
              mollitia tempora architecto ab, incidunt similique.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              velit, cumque voluptatibus itaque soluta dolore dolores qui,
              assumenda debitis totam repudiandae? Libero impedit obcaecati
              mollitia tempora architecto ab, incidunt similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
