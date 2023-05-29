import React from 'react';
import headerStyles from './header.module.scss';
import Menu from './menu';

export default ({ children }) => (
  <>
    <div className={headerStyles.header}>
      <div className="full-height">
        <div className={headerStyles.flex}>
          <Menu></Menu>
          <a href="/">
            <img src="/svgs/logo_header.svg" className={headerStyles.logo} alt="The Moorings"></img>
          </a>
          <div className={headerStyles.right_links}>
            <ul>
              <li>
                <a href="/booking">Booking & Availability</a>
              </li>
            </ul>
          </div>
          {children}
        </div>
      </div>
    </div>
  </>
);
