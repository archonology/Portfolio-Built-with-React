import React, { useState } from 'react';
import NavTabs from './Navtabs';
import Home from '../../src/components/pages/Home';
import About from '../../src/components/pages/About';
import Portfolio from '../../src/components/pages/Portfolio';
import Contact from '../../src/components/pages/Contact';
import Resume from '../../src/components/pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, it returns the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* This is passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This is calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
