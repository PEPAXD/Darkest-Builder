import React from "react";
import HomePage from "./HomePage";
import Aboutpage from "./AboutPage";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <HomePage url_Bg="background.png" />
      <Aboutpage url_Bg="Heroswallpaper.png" />
    </>
  );
}

export default App;
