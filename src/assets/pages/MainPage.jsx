import React from "react";

import HomePage from "../components/HomePage";
import Aboutpage from "../components/AboutPage";
import HeroesPage from "../components/HeroesPage";
import Header from "../components/Header";

function MainPage() {
  return (
    <>
      <Header />

      <section id="home">
        <HomePage url_Bg="background.png" />
      </section>

      <section id="About">
        <Aboutpage url_Bg="AboutWallpaper.jpg" />
      </section>

      <section id="Heroes">
        <HeroesPage url_Bg="HeroTavern.jpg" />
      </section>
    </>
  );
}

export default MainPage;
