import React from "react";
import "./styles/AboutPage.scss";

export default function AboutPage({ url_Bg }) {
  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="AboutContainer">
          <div className="AboutContent">
            <h3>TEXT</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              fugiat cupiditate saepe voluptatem, voluptates nostrum accusantium
              dolorum officia explicabo et laborum dicta quisquam quaerat error
              facere adipisci, quos aut architecto!
            </p>
          </div>
          <div className="PointSections">
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
          </div>
        </div>
      </div>
    </div>
  );
}
