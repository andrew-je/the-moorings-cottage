import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
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
      
      <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
        <div className="flex justify-center px-4">
          <div 
            className={cn(
              "navbar-container",
              isScrolled 
                ? "navbar-container--scrolled" 
                : "navbar-container--top"
            )}
          >
            <Link 
              to="/" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              aria-label="The Moorings Cottage"
            >
              <img 
                src="/img/logo.svg" 
                alt="The Moorings Cottage" 
                className="h-5 sm:h-6 w-auto" 
              />
            </Link>

            {/* Menu button for all viewports */}
            <button 
              className="menu-button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu for all viewports */}
      <div className={cn(
        "menu-overlay",
        isMenuOpen ? "menu-overlay--open" : ""
      )}>
        <div className="menu-overlay__content">
          {/* Close button in top right */}
          <button 
            className="menu-close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>


          {/* Navigation links */}
          <nav className="menu-nav">
            <Link 
              to="/" 
              className={cn(
                "menu-link",
                location.pathname === '/' && "menu-link--active"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
            >
              Home
            </Link>
            {navItems.slice(1).map((item, index) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={cn(
                  "menu-link",
                  location.pathname === item.path && "menu-link--active"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book Now button in overlay */}
          <div className="menu-footer">
            <Link 
              to="/booking"
              className="menu-booking-btn"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
