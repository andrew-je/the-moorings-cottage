import React, { useState, useEffect } from 'react';
import menuStyles from './menu.module.scss';
import Container from './container';
import { Link } from 'gatsby';

export default ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      setShowClose(true);
      setTimeout(() => {
        setShowClose(false);
      }, 1000);
    }
  }, [menuOpen]);

  const toggleMenu = (open) => {
    setMenuOpen(open);

    if (open) {
      if (typeof window !== 'undefined') {
        document.body.classList.add('no-scroll');
      }
    } else {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('no-scroll');
      }
    }
  };

  const onMenuItemClick = () => {
    setMenuOpen(false);
    if (typeof window !== 'undefined') {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <>
      <ul>
        <li>
          <img
            onClick={() => {
              console.log('opening');
              toggleMenu(true);
            }}
            src="/svgs/burger_menu.svg"
            alt="Menu"
            className={menuStyles.toggle}
          ></img>
        </li>
      </ul>
      <div
        className={`${menuStyles.menu} ${
          menuOpen ? menuStyles.open : showClose ? menuStyles.close : ''
        }`}
      >
        <div className={menuStyles.background}></div>
        <Container className={menuStyles.wrapper}>
          <img
            onClick={() => {
              console.log('Exit menu');
              toggleMenu(false);
            }}
            src="/svgs/exit.svg"
            alt="Menu"
            className={menuStyles.toggle}
          ></img>
          <div>
            <ul>
              <li>
                <Link onClick={onMenuItemClick} to="/the-house">
                  The Cottage
                </Link>
              </li>
              <li>
                <Link onClick={onMenuItemClick} to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link onClick={onMenuItemClick} to="/booking">
                  Booking & Availability
                </Link>
              </li>
              <li>
                <Link onClick={onMenuItemClick} to="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link onClick={onMenuItemClick} to="/the-local-area">
                  The Local Area
                </Link>
              </li>
              <li>
                <Link onClick={onMenuItemClick} to="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link onClick={onMenuItemClick} to="/contact-and-directions">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};
