import React from 'react';
import '../css/HeroStyle.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
const HeroContainer = () => {
  return (
    <>
        <div className='hero-container'>
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-light text-container">
                    <h1 className="display-1">Carl Fransson</h1>
                    <h3 className="display-6">Systemutvecklare</h3>
                    <div className='button-conainer d-flex flex-direction-row gap-3 pt-3'>
                        <Link to="/contact">
                            <button className='btn-light text-light'>Kontakta mig</button>
                        </Link>
                        <Link to="/portfolio">
                            <button className='btn-light text-light'>Mina projekt</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default HeroContainer
