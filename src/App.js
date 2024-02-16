import React from 'react';
import Footer from './components/Footer';
import './css/App.css';
import './css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ImportNavbar from './components/ImportNavbar';

export default  function App() {
  return (
    <>
    <ImportNavbar />
    <Footer />
    </>
      );
}
