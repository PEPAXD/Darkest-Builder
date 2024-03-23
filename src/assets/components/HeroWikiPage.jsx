import React, { useState, useEffect } from "react";
import "./styles/HeroWikiPage.scss";
import { heroWiki } from "../data/heroWiki.js";


import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function HeroWikiPage({ url_Bg, heroName }) {

  //FindIndex
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const newIndex = heroWiki[0].heroNames.findIndex((name) => name === heroName);
    setIndex(newIndex);
  }, [heroName]);

  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="containHeroWiki">
          <div className="heroRef">
            <div className="boxInputName">
              <button onClick={() => setIndex((oldIndex) => oldIndex > 0 ? oldIndex - 1 : heroWiki[0].heroNames.length - 1)}><IoIosArrowBack /></button>
              <input placeholder={heroWiki[0].heroNames[index]} type="text" required=""></input>
              <button onClick={() => setIndex((oldIndex) => oldIndex < heroWiki[0].heroNames.length - 1 ? oldIndex + 1 : 0)}><IoIosArrowForward /></button>
            </div>

            <img src={`public/HeroBG/${heroName}.png`} alt="Hero" />

            <div className="heroPath">
              <cite>{heroWiki[0].academicNotes[index]}</cite>

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
