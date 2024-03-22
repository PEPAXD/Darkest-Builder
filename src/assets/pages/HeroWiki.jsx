import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroWikiPage from "../components/HeroWikiPage";

function HeroWiki() {
  const location = useLocation();
  const heroName = location.state.heroName;

  useEffect(() => {
    document.title = "Wiki-" + heroName;
  }, []);

  return (
    <>
      <div>
        <HeroWikiPage
          url_Bg={`public/shadow.jpg`}
          heroName={heroName}
        />
      </div>
    </>
  );
}

export default HeroWiki;
