import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../css/Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Cv from "../pages/Cv";
import Contact from "../pages/Contact";
import React, { useState, useEffect } from 'react';

const ImportNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    if(setIsHamburgerClicked(!isHamburgerClicked)){
    setScrolled(true); 
    }else{
      setScrolled(false);
    }
  };

  return (
    <>
      <Router>
        <Navbar data-bs-theme="dark" expand="lg" className={`navbar navbar-expand-lg fixed-top p-3 ${scrolled || isHamburgerClicked ? 'scrolled' : ''}`}>
          <Container fluid>
            <Navbar.Brand className="text-white" href="#">Calle Fransson</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={handleHamburgerClick} />
            <Navbar.Collapse id="navbarScroll" className="justify-content-center" >
              <Nav className="me-auto my-2 my-lg-0 drop-down-menu">
                <Nav.Link as={Link} to="/about" className="text-white">Om mig</Nav.Link>
                <Nav.Link as={Link} to="/portfolio" className="text-white">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="text-white">Kontakta mig</Nav.Link>
                <Nav.Link as={Link} to="/cv" className="text-white">CV</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Sök</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cv' element={<Cv/>} />
        </Routes>
      </Router>
    </>
  );
}

export default ImportNavbar;