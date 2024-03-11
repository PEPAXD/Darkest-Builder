import React, { useState } from "react";
import { aboutData } from "../data/aboutSection";
import { FaAnglesDown } from "react-icons/fa6";
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

            {selectedRadio === 2 && (
              <div className="linkIcons">
                {aboutData.map((item, index) =>
                  item.linksIcon && Array.isArray(item.linksIcon)
                    ? item.linksIcon.map((link, linkIndex) => (
                        <a key={`${index}-${linkIndex}`} href="">
                          <img src={link} alt={`Icon ${linkIndex}`} />
                          <i>{item.linkNames[linkIndex]}</i>
                        </a>
                      ))
                    : null
                )}
              </div>
            )}
          </div>

          <div className="PointSections">
            <div className="about-icon">
              <span>
                Tell Me <br /> More
              </span>
              <FaAnglesDown />
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
          </div>
        </div>
      </div>
    </div>
  );
}
