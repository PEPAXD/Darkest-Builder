import React, { useEffect } from 'react';

function HeroWiki() {

  useEffect(() => {
    document.title = 'HeroWiki';
  }, []);

  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  )
}

export default HeroWiki