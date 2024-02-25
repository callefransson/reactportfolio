import React from 'react'
import ScrollToTopButton from './ScrollToTop'

const Footer = () => {
  return (
    <>
    <footer className='container-fluid p-5 text-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <h4>My socials</h4>
            <ul className='list-unstyled'>
              <li><a href="https://www.linkedin.com/in/carl-fransson-5b6769296/" className='text-decoration-none text-light' target="_blank">Linkedin</a></li>
              <li><a href="https://www.instagram.com/calle_fransson/" className='text-decoration-none text-light' target="_blank">Instagram</a></li>
              <li><a href="https://www.facebook.com/calle.franzzon/" className='text-decoration-none text-light' target="_blank">Facebook</a></li>
              <li><a href="https://github.com/callefransson" className='text-decoration-none text-light' target="_blank">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTopButton/>
        <p className='text-center'>&copy;2024 Carl Fransson .NET23 | All Rights Reserved</p>
    </footer>
    
    </>
  )
}

export default Footer

