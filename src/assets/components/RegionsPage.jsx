import React from "react";

export default function AboutPage({ url_Bg }) {
  return (
    <div className="Regions">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div></div>
      </div>
    </div>
  );
}
