import React, { useState, useEffect } from "react";
import "./styles/snowAnimation.scss";
import "./styles/HomePage.scss";

import { SiFandom } from "react-icons/si";

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
        {/* TempDisable 
        <div className="snow"></div>
        */}
        <div className="homeContain">
          <img src={src} alt="" />
        </div>

        <div className="FooterButtons">
          <ul class="wrapper">
            <li class="icon WikiFandom">
              <span class="tooltip">WikiGame</span>
              <span>
                <SiFandom />
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
