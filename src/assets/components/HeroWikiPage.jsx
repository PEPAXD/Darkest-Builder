import React from "react";
import "./styles/HeroWikiPage.scss";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function HeroWikiPage({ url_Bg, heroName }) {
  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="containHeroWiki">
          <div className="heroRef">
            <div className="boxInputName">
              <IoIosArrowBack />
              <input placeholder={heroName} type="text" required=""></input>
              <IoIosArrowForward />
            </div>

            <img src={`public/HeroBG/${heroName}.png`} alt="Hero" />

            <div className="heroPath">
              <cite>"path Phrase LoreHero text"</cite>

              <div className="pathRoad">
                <input
                  value="value-1"
                  name="value-radio"
                  id="value-1"
                  type="radio"
                  defaultChecked
                />
                <label htmlFor="value-1">A</label>

                <input
                  value="value-2"
                  name="value-radio"
                  id="value-2"
                  type="radio"

                />
                <label htmlFor="value-2">B</label>

                <input
                  value="value-3"
                  name="value-radio"
                  id="value-3"
                  type="radio"

                />
                <label htmlFor="value-3">C</label>

                <input
                  value="value-4"
                  name="value-radio"
                  id="value-4"
                  type="radio"

                />
                <label htmlFor="value-4">D</label>
              </div>
            </div>
          </div>

          <div className="contain-WikiData">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
