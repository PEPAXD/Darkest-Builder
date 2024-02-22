import Home from "./Home";
import Hero from "./HeroGallery";

function App() {

  return (
    <>
      <Home url_Bg = "background.png"/>
      <Hero url_Bg = "Heroswallpaper.png"/>
      <footer>
        <div>
          © 2024 Darkest Builder &nbsp;
          <a href="https://github.com/PEPAXD">
             Developed By Mauro Pepa
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
