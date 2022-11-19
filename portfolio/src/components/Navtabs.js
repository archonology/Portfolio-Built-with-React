import React from 'react';

// Uses object destructuring assignment to get variables from the props object
// Then assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <a href="#home" onClick={() => handlePageChange('Home')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, then set the current page to 'nav-link-active', otherwise set it to 'nav-link'
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
        <h1 className="navbar-developer m-3">MeherDevs</h1>
      </a>
      <ul className="nav nav-tabs navbar-nav m-5">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so it will use the 'active-link' className from bootstrap. Else it is set to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;

