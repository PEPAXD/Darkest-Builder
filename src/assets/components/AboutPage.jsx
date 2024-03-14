import React, { useState } from "react";
import { aboutData } from "../data/aboutSection";
import { FaAnglesDown } from "react-icons/fa6";
import "./styles/AboutPage.scss";

export default function AboutPage({ url_Bg }) {
  const [selectedRadio, setSelectedRadio] = useState(0);

  const handleRadioChange = (index) => {
    setSelectedRadio(index);
  };

  const getClassName = () => {
    switch (selectedRadio) {
      case 2:
        return "locationIcons";
      case 3:
        return "enemiesIcon";
      case 4:
        return "heroesIcon";
      default:
        return "";
    }
  };

  const renderParagraphs = () =>
    aboutData[selectedRadio].content.map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ));

  const renderRadioLabels = () =>
    aboutData.map((item, index) => (
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
    ));

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
            <div>{renderParagraphs()}</div>

            {(selectedRadio === 2 || selectedRadio === 3 || selectedRadio === 4) && (
              <div className={getClassName()}>
                {aboutData[selectedRadio].linksIcon &&
                Array.isArray(aboutData[selectedRadio].linksIcon)
                  ? aboutData[selectedRadio].linksIcon.map(
                      (link, linkIndex) => (
                        <a
                          key={`${selectedRadio}-${linkIndex}`}
                          href={aboutData[selectedRadio].linkWiki[linkIndex]}
                          target="_blank"
                        >
                          <div className="imgContain"><img src={link} alt={`Icon ${linkIndex}`} /></div>
                          <i>{aboutData[selectedRadio].linkNames[linkIndex]}</i>
                        </a>
                      )
                    )
                  : null}
              </div>
            )}
            <div className="imgSplayart"><img src={aboutData[selectedRadio].background} alt="" /></div>
            <cite>{aboutData[selectedRadio].cite}</cite>
          </div>

          <div className="PointSections">
            <div className="about-icon">
              <span>
                Tell Me <br /> More
              </span>
              <FaAnglesDown />
            </div>

            {renderRadioLabels()}
          </div>
        </div>
      </div>
    </div>
  );
}