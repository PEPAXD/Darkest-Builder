import React from "react";
import "./styles/snowAnimation.scss";

export default function HomePage({ url_Bg }) {
  return (
    <div className="Home">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="snow"></div>

        <div className="homeContain">
          <img src="dd2-logo.png" alt="" />
          <h4>
            Welcome To The Darkest Builder
            <hr />
          </h4>

          <p>
            Explora información detallada sobre héroes, sus habilidades,
            fortalezas, debilidades, estadísticas y subclases.
          </p>
          <p>
            Experimenta diferentes estilos de juego y sigue nuestra tier list de
            héroes y composiciones de equipo.
          </p>
          <p>
            Domina la oscuridad de la mazmorra con nuestras guías, basadas en la
            wikioficial del juego.
          </p>

          <button>Build Hero</button>
        </div>
      </div>
    </div>
  );
}
