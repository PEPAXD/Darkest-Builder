import React, { useState } from "react";
import { aboutData } from "../data/aboutSection";
import "./styles/AboutPage.scss";

export default function AboutPage({ url_Bg }) {
  const [selectedRadio, setSelectedRadio] = useState(0);

  const handleRadioChange = (index) => {
    setSelectedRadio(index);
  };

  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="AboutContainer">
          <div className="AboutContent">
            <h2>{aboutData[selectedRadio].title}</h2>

            <div>
              {aboutData[selectedRadio].content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="PointSections">
            {aboutData.map((item, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={index}
                  checked={selectedRadio === index}
                  onChange={() => handleRadioChange(index)}
                  style={{ display: "none" }}
                />
                <img
                  src={item.imgRadio}
                  className="radio-image"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
