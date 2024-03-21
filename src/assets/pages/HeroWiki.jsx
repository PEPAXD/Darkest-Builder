import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroWikiPage from '../components/HeroWikiPage';

function HeroWiki() {
  const location = useLocation();
  const heroName = location.state.heroName;

  useEffect(() => {
    document.title = 'Wiki-'+heroName;
    if (location.pathname === '/herowiki') {
      document.querySelector('.App').style.overflowY = 'hidden';
    }
  
    return () => {
      document.querySelector('.App').style.overflowY = 'auto';
    };
  }, [location]);

  return (
    <>
    <div>
      <HeroWikiPage url_Bg="cuthuluSheet.jpg" heroName={heroName}  />
    </div>
    </>
  )
}

export default HeroWiki