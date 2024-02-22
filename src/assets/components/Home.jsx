import React from "react";
import "./styles/Home.scss";

export default function Home({url_Bg}) {

  return (
    <div className="background" style={{background: `url(${url_Bg}) no-repeat center top/cover`}}>
      <div className="snow"></div>
      <div className="homeContain">
        <img src="dd2-logo.png" alt="" />

        <div class="welcomeContain">
          <h4 className="welcometitle">
            Welcome To The Darkest Builder
            <hr />
          </h4>

          <div class="welcomebody">
            <p>
              Explora información detallada sobre héroes, sus habilidades,
              fortalezas, debilidades, estadísticas y subclases.
            </p>
            <p>
              Experimenta diferentes estilos de juego y sigue nuestra tier list
              de héroes y composiciones de equipo.
            </p>
            <p>
              Domina la oscuridad de la mazmorra con nuestras guías, basadas en
              la wikioficial del juego.
            </p>
          </div>

          <button className="welcomeBT">Build Hero</button>
        </div>
      </div>
    </div>
  );
}
