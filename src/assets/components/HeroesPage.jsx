import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HeroesPage.scss";
import { heroData } from "../data/heroSection";

export default function HeroesPage({ url_Bg }) {
  const navigate = useNavigate();

  return (
    <div className="Heroes">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="heroContainer">
          <div className="heroContain">
            <h2>Select Your Darkest Hero</h2>
            <hr />

            <div className="boxHeroContainer">
              {heroData &&
                heroData[0] &&
                heroData[0].badHero &&
                heroData[0].badHero.map((hero, index) => (
                  <a
                  onClick={() => navigate('/herowiki', { state: { heroName: heroData[0].heroNames[index] } })}
                  key={index}
                >
                    <div className="imgContain">
                      <img
                        className="badHero"
                        src={hero}
                        alt={heroData[0].heroNames[index]}
                      />
                      <img
                        className="goodHero"
                        src={heroData[0].goodHero[index]}
                      />
                    </div>
                    <i>{heroData[0].heroNames[index]}</i>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
