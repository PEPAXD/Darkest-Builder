import React from "react";
import "./styles/HeroesPage.scss";

export default function HeroesPage({ url_Bg }) {
  return (
    <div className="Heroes">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >

        
      </div>
    </div>
  );
}
