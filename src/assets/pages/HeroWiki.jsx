import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function HeroWiki() {
  const location = useLocation();
  const heroName = location.state.heroName;

  useEffect(() => {
    document.title = 'Wiki-'+heroName;
  }, []);

  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}

export default HeroWiki