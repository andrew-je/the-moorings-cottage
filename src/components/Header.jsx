import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const showMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavClick = (path) => {
    hideMenu();
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cottage', label: 'The Cottage' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Booking' },
    { path: '/review', label: 'Reviews' },
    { path: '/area', label: 'Local Area' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <Link to="/">
                <img src="/img/logo.svg" alt="The Moorings Cottage" />
              </Link>
            </div>

            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
              <ul className="header__nav-list">
                {navItems.map((item) => (
                  <li key={item.path} className="header__nav-item">
                    <Link 
                      to={item.path} 
                      className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
                      onClick={hideMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__actions">
              <Link to="/booking" className="btn btn--accent header__booking-btn">
                Book Now
              </Link>
              
              <button 
                className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
                onClick={isMenuOpen ? hideMenu : showMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
            <div className="mobile-menu__logo">
              <img src="/img/logo.svg" alt="The Moorings Cottage" />
            </div>
            <button 
              className="mobile-menu__close"
              onClick={hideMenu}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6L18 18"/>
              </svg>
            </button>
          </div>
          
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__nav-list">
              {navItems.map((item, index) => (
                <li key={item.path} className="mobile-menu__nav-item">
                  <button 
                    className={`mobile-menu__nav-link ${location.pathname === item.path ? 'mobile-menu__nav-link--active' : ''}`}
                    onClick={() => handleNavClick(item.path)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            <button 
              className="btn btn--accent mobile-menu__booking-btn"
              onClick={() => handleNavClick('/booking')}
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
