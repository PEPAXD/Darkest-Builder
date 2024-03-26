import React, { useState, useEffect } from "react";
import "./styles/HeroWikiPage.scss";
import { heroWiki } from "../data/heroWiki.js";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function HeroWikiPage({ url_Bg, heroName }) {
  //FindIndex
  const [index, setIndex] = useState(0);

  //PathHeroIndex
  const [pathIndex, setPathIndex] = useState(0);
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);

  useEffect(() => {
    const newIndex = heroWiki[0].heroNames.findIndex(
      (name) => name === heroName
    );
    setIndex(newIndex);
  }, [heroName]);

  // ArrowNextBackHerodata
  const handleButtonClick = (direction) => {
    setIndex((oldIndex) => {
      if (direction === "back") {
        return oldIndex > 0 ? oldIndex - 1 : heroWiki[0].heroNames.length - 1;
      } else if (direction === "forward") {
        return oldIndex < heroWiki[0].heroNames.length - 1 ? oldIndex + 1 : 0;
      }
    });

    setPathIndex(0);
    setSelectedPathIndex(0);
  };

  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="containHeroWiki">
          <div className="heroRef">
            <div className="boxInputName">
              <button onClick={() => handleButtonClick("back")}>
                <IoIosArrowBack />
              </button>
              <input
                placeholder={heroWiki[0].heroNames[index]}
                type="text"
                required=""
              ></input>
              <button onClick={() => handleButtonClick("forward")}>
                <IoIosArrowForward />
              </button>
            </div>

            <img
              src={`public/HeroBG/${heroWiki[0].heroNames[index]}.png`}
              alt="Hero"
            />

            <div className="heroPath">
              <cite>{heroWiki[0].academicNotes[index][1][pathIndex]}</cite>

              <div className="pathRoad">
                {heroWiki[0].heroPaths[index][1].map((path, pathIndex) => (
                  <React.Fragment key={pathIndex}>
                    <input
                      value={`value-${pathIndex + 1}`}
                      name="value-radio"
                      id={`value-${pathIndex + 1}`}
                      type="radio"
                      checked={pathIndex === selectedPathIndex}
                      onChange={() => {
                        setSelectedPathIndex(pathIndex);
                        setPathIndex(pathIndex);
                      }}
                    />
                    <label htmlFor={`value-${pathIndex + 1}`}>{path}</label>
                  </React.Fragment>
                ))}
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
