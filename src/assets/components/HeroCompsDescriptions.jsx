import React from "react";
import "./styles/HeroCompsDescriptions.scss";

function HeroCompsDescriptions({ description }) {
  return (
    <ul>
      {description.map((desc, index) => (
        <li key={index}>
          <h5>{desc[0]}</h5>
          <p>{desc[1]}</p>
        </li>
      ))}
    </ul>
  );
}

export default HeroCompsDescriptions;
