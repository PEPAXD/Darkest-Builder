import React from "react";

import HomePage from "./HomePage";
import Aboutpage from "./AboutPage";
import RegionsPage from "./RegionsPage";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <section id="home">
          <HomePage url_Bg="background.png" />
        </section>

        <section id="About">
          <Aboutpage url_Bg="AboutWallpaper.jpg" />
        </section>

        <section id="Regions">
          <RegionsPage url_Bg="Heroswallpaper.png" />
        </section>
      </div>
    </>
  );
}

export default App;
