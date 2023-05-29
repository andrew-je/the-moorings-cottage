import React from 'react';
import footerStyles from './footer.module.scss';

export default ({ children }) => (
  <>
    <div className={footerStyles.footer}>
      <div className={footerStyles.footer_content}>
        <img
          className={footerStyles.footer_logo}
          src="/svgs/logo_footer.svg"
          alt="The Moorings"
        ></img>
        <p>Felinheli Terrace, Y Felinheli</p>
        <p>
          <a className="lower-turquoise" href="tel:+4407742042031">
            +44 (0)7742042031
          </a>{' '}
          /
          <a className="lower-turquoise" href="tel:+4407836616502">
            {' '}
            +44 (0)7836616502
          </a>
        </p>
        <p>
          <a
            className="lower-turquoise"
            href="mailto:themooringscottage@gmail.com"
          >
            themooringscottage@gmail.com
          </a>
        </p>
        <div className={footerStyles.social_icons}>
          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            href="https://m.facebook.com/profile.php?id=111776223882344&ref=content_filter"
          >
            <img src="/svgs/facebook.svg" alt="Facebook"></img>
          </a>
          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            href="https://www.instagram.com/themooringscottage/"
          >
            <img src="/svgs/instagram.svg" alt="Instagram"></img>
          </a>
          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            href="https://www.twitter.com/mooringscottage/"
          >
            <img src="/svgs/twitter.svg" alt="Twitter"></img>
          </a>
        </div>
      </div>
      {children}
    </div>
  </>
);
