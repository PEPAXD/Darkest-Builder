import React, { useState } from "react";
import "./styles/Header.scss";

function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <a href="home">Home</a>
          </li>
          <li
            href="About"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("About");
            }}
          >
            <a>About</a>
          </li>
          <li
            href="Heroes"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Heroes");
            }}
          >
            <a href="Heroes">Heroes</a>
          </li>

          <li>
            <a href="#">Regions</a>
          </li>
          <li>
            <a href="#">Enemies</a>
          </li>
          <li>
            <a href="#">Builds</a>
          </li>
          <li>
            <a href="#">dark-City</a>
          </li>
          <li>
            <a href="#">Hero-TierList</a>
          </li>
          <li>
            <a href="#">Fandom</a>
          </li>
        </ul>
      </nav>
      <div className="Difusse"></div>
    </header>
  );
}

export default Header;
