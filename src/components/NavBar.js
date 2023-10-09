import React from 'react';
import './NavBar.css';

function NavBar() {
  const brandStyles = {
    fontWeight: 'bold',
    fontSize: '40px',
    backgroundImage: 'linear-gradient(79deg, #009FFF, #7E00FC)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container sticky-top">
        <a className="navbarbrand" href="index.html">
            
              IWAN
                    </a>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html"> Services </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
          <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
