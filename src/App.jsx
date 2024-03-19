import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages Components
import MainPage from "./assets/pages/MainPage";
import HeroWiki from "./assets/pages/HeroWiki";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/herowiki" element={<HeroWiki />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
