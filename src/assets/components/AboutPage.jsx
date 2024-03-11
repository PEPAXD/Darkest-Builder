import React, { useState } from "react";
import { aboutData } from "../data/aboutSection";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
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
            <hr />
            <div>
              {aboutData[selectedRadio].content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <cite>{aboutData[selectedRadio].cite}</cite>
          </div>

          <div className="PointSections">
          <div className="scroll-icon">
          <FaAnglesUp />
              <span>SCROLL <br /> UP</span>

            </div>
            {aboutData.map((item, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={index}
                  checked={selectedRadio === index}
                  onChange={() => handleRadioChange(index)}
                  style={{ display: "none" }}
                />
                <img src={item.imgRadio} className="radio-image" />
              </label>
            ))}
            <div className="scroll-icon">
              <span>
                SCROLL <br /> DOWN
              </span>
              <FaAnglesDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
