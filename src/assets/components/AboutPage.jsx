import React, { useState } from "react";
import "./styles/AboutPage.scss";

export default function AboutPage({ url_Bg }) {
  const [selectedSection, setSelectedSection] = useState("A");

  const handleChange = (event) => {
    setSelectedSection(event.target.value);
  };

  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="AboutContainer">
          <div className="AboutContent">
            <h3>WELCOME TO THE DARKEST BUILDER</h3>
            <br />
            <p>
              Bienvenido a Darkest Builder, tu guia para perfeccionar tus
              estrategias en el peligroso mundo de Darkest Dungeon. <br />
              <br />
              Este sitio web ha sido diseñado con el objetivo de proporcionar a
              los jugadores una guía exhaustiva y especializada en la creación
              de equipos para enfrentar los desafíos más oscuros y peligrosos.
            </p>
            <br />
            <p>
              La guia esta pensada para jugadores de todos los niveles, ya seas
              un aventurero novato que se adentra por primera vez en las
              inhóspitas mazmorras o un veterano que busca nuevas estrategias,
              Darkest Builder es tu compañero indispensable.
              <br />
              <br />
              Prepara tu equipo, desentraña los secretos de la oscuridad y
              triunfa sobre las fuerzas que amenazan con sumirte en la locura.
              <br />
              <br />
              ¡Explora Darkest Builder hoy y forja tu camino hacia la victoria
              en Darkest Dungeon!
            </p>
          </div>
          <div className="PointSections">
            <label>
              <input
                type="radio"
                name="section"
                value="A"
                checked={selectedSection === "A"}
                onChange={handleChange}
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
                checked={selectedSection === "B"}
                onChange={handleChange}
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
                checked={selectedSection === "C"}
                onChange={handleChange}
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
                checked={selectedSection === "D"}
                onChange={handleChange}
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
