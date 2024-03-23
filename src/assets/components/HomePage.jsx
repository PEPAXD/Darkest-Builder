import React, { useState, useEffect } from "react";
import "./styles/snowAnimation.scss";
import "./styles/HomePage.scss";

import { SiFandom } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const LinksButtons = ({ href, iconColor, fontSize, Icon, bannerName }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <li className="icon" id={iconColor}>
      <span style={{ fontSize }}>
        <Icon />
      </span>
    </li>
    <span className="tooltip">{bannerName}</span>
  </a>
);

export default function HomePage({ url_Bg }) {
  const windowWidth = useWindowWidth();
  const src = windowWidth < 800 ? "dd2-logoResponsive.png" : "dd2-logo.png";

  // Array ProfileImg
  const images = [
    "public/HeroProfile/Highwayman.png",
    "public/HeroProfile/Flagellant.png",
    "public/HeroProfile/graveRobber.png",
    "public/HeroProfile/Hellion.png",
    "public/HeroProfile/Jester.png",
    "public/HeroProfile/Leper.png",
    "public/HeroProfile/manAtArms.png",
    "public/HeroProfile/Occultist.png",
    "public/HeroProfile/PlagueDoctor.png",
    "public/HeroProfile/Vestal.png",
    "public/HeroProfile/Runaway.png",
    "public/HeroProfile/BountyHunter.jpg",
    "public/HeroProfile/Crusader.jpg",
    "public/HeroProfile/Duelist.jpg",
  ];
  // ImgCurrentProfile
  const [currentImage, setCurrentImage] = useState(images[0]);
  const AvatarUser = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  // TextProfile
  const [text, setText] = useState("Darkest Adventur");
  const changeText = () => {
    const userInput = prompt("New Adventure Name:");
    if (userInput) {
      setText(userInput);
    }
  };

  return (
    <div className="Home">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        {/* SNOW ANIMATION
        <div className="snow"></div>
         */}

        <div className="homeContain">
          <img src={src} alt="" />
          <h1>Build GameTeam</h1>
        </div>

        <div className="profileUser">
          <button onClick={AvatarUser}>
            <img src={currentImage} alt="Profile" />
          </button>
          <h4 onClick={changeText}>{text}</h4>
        </div>

        <div className="FooterButtons">
          <ul className="wrapper">
            <LinksButtons
              href="https://darkestdungeon.fandom.com/wiki/Darkest_Dungeon_II_Wiki"
              iconColor="wikiFandom"
              fontSize="1.4em"
              Icon={SiFandom}
              bannerName="WikiGame"
            />
            <LinksButtons
              href="https://steamcommunity.com/app/1940340/guides/?searchText=&browsefilter=trend&browsesort=creationorder&requiredtags%5B0%5D=-1&p=1&days=365"
              iconColor="steamGuide"
              fontSize="1.3em"
              Icon={FaBookReader}
              bannerName="SteamGuide"
            />
            <LinksButtons
              href="https://www.darkestdungeon.com/darkest-dungeon-2/"
              iconColor="iconGameWeb"
              fontSize="1.6em"
              Icon={IoLogoGameControllerB}
              bannerName="GameWeb"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
