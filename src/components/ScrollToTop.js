import React from 'react';
import '../css/index.css';
import ScrollToTopImage from '../assets/movetotop.png';

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <div className='container-fluid d-flex justify-content-end'>
        <img className='scroll-to-top-btn' src={ScrollToTopImage} onClick={handleClick} alt='arrow button'/>
    </div>
    </>
  );
}

export default ScrollToTopButton;