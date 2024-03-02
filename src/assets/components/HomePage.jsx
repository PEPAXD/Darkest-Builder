import React, { useState, useEffect } from 'react';
import "./styles/snowAnimation.scss";

export default function HomePage({ url_Bg }) {

  const [src, setSrc] = useState('dd2-logo.png');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setSrc('dd2-logoResponsive.png');
      } else {
        setSrc('dd2-logo.png');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="Home">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="snow"></div>

        <div className="homeContain">
          <img src={src} alt=""/> 
        </div>
      </div>
    </div>
  );
}
