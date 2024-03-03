import React, { useState, useEffect } from "react";
import "./styles/snowAnimation.scss";
import "./styles/HomePage.scss";

import { SiFandom } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

export default function HomePage({ url_Bg }) {
  const [src, setSrc] = useState("dd2-logo.png");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setSrc("dd2-logoResponsive.png");
      } else {
        setSrc("dd2-logo.png");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Home">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        {/* Snow Animation
        <div className="snow"></div> */}

        <div className="homeContain">
          <img src={src} alt="" />
        </div>

        <div className="FooterButtons">
          <ul class="wrapper">
            <a
              href="https://darkestdungeon.fandom.com/wiki/Darkest_Dungeon_II_Wiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li class="icon WikiFandom">
                <span style={{ fontSize: "1.4em" }}>
                  <SiFandom />
                </span>
              </li>
              <span class="tooltip">WikiGame</span>
            </a>

            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2973257745"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li class="icon steamGuide">
                <span style={{ fontSize: "1.3em" }}>
                  <FaBookReader />
                </span>
              </li>
              <span class="tooltip">SteamGuide</span>
            </a>

            <a
              href="https://www.darkestdungeon.com/darkest-dungeon-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li class="icon gameWeb">
                <span style={{ fontSize: "1.6em" }}>
                  <IoLogoGameControllerB />
                </span>
              </li>
              <span class="tooltip">GameWeb</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
