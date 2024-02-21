import React from "react";
import "./styles/Home.scss";

export default function Home() {
  return (
    <div className="background">
      <div className="snow"></div>
      <div className="homeContain">
        <img src="dd2-logo.png" alt="" />

        <div class="welcomeContain">
          <div class="welcometitle">
            Welcome To The Darkest Builder
            <hr />
          </div>

          <div class="welcomebody">

              <p>
                Explora información detallada sobre héroes, sus habilidades,
                fortalezas, debilidades, estadísticas y subclases.
              </p>
              <p>
                Experimenta diferentes estilos de juego y sigue nuestra tier
                list de héroes y composiciones de equipo.
              </p>
              <p>
                Domina la oscuridad de la mazmorra con nuestras guías, basadas
                en la wikioficial del juego.
              </p>

            <button>Build Hero</button>
          </div>
        </div>
      </div>
    </div>
  );
}
