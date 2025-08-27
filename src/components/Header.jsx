import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflowY = 'hidden';
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflowY = 'initial';
  };

  return (
    <>
      <header>
        <div className="outer__header">
          <div className="menu__button">
            <button onClick={showMenu}>
              <img src="/img/menu.svg" alt="menu" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="booking">
            <Link to="/booking">BOOKING & AVAILABILITY</Link>
          </div>
        </div>
      </header>
      
      <div className={`menu__wrapper ${isMenuOpen ? 'active' : ''}`}>
        <div className="inner__menu">
          <div className="menu__close">
            <button onClick={hideMenu}>
              <img src="/img/exit.svg" alt="exit" />
            </button>
          </div>
          <ul>
            <li><Link to="/cottage" onClick={hideMenu}>The Cottage</Link></li>
            <li><Link to="/gallery" onClick={hideMenu}>Gallery</Link></li>
            <li><Link to="/booking" onClick={hideMenu}>Booking & Availability</Link></li>
            <li><Link to="/review" onClick={hideMenu}>Reviews</Link></li>
            <li><Link to="/area" onClick={hideMenu}>The Local Area</Link></li>
            <li><Link to="/terms" onClick={hideMenu}>Terms & Conditions</Link></li>
            <li><Link to="/contact" onClick={hideMenu}>Contact & Directions</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
