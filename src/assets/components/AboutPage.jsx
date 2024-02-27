import React from "react";

export default function AboutPage({ url_Bg }) {
  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div>AboutPage</div>
      </div>
    </div>
  );
}
