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
            <label>
              <input
                type="radio"
                name="section"
                value="A"
                style={{ display: "none" }}
              />
              <img
                src="public/icon/aboutGame.jpg"
                alt=""
                className="radio-image"
              />
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="B"
                style={{ display: "none" }}
              />
              <img
                src="public/icon/mapGame.jpg"
                alt=""
                className="radio-image"
              />
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="C"
                style={{ display: "none" }}
              />
              <img
                src="public/icon/enemiesGame.jpg"
                alt=""
                className="radio-image"
              />
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="D"
                style={{ display: "none" }}
              />
              <img
                src="public/icon/heroesGame.jpg"
                alt=""
                className="radio-image"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
