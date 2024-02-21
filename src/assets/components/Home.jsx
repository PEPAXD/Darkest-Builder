import React from "react";
import "./styles/Home.scss";

export default function Home() {
  return (
    <div className="background">
      <div className="snow"></div>
      <div className="containTittle">
        <img src="dd2-logo.png" alt="" />
        <p>
          Explora el mundo de Darkest Dungeon 2 con Darkest Builder. Descubre
          información detallada de héroes, fuerzas, debilidades,
          estadísticas y subclases. 
          <br />
          Prueba distintos estilos de juego,  y sigue nuestra tierlist de
          héroes y composiciones de equipo.
          <br />
          Domina la oscuridad de la mazmorra con nuestras guías basadas en la wikioficial del juego.
        </p>
        <button>Build Hero</button>
      </div>
    </div>
  );
}
