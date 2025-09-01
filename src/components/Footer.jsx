import { Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { trackSocial, trackContact } = useAnalytics();

  const footerLinks = [
    { path: '/cottage', label: 'The Cottage' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Booking' },
    { path: '/review', label: 'Reviews' },
    { path: '/area', label: 'Local Area' },
    { path: '/contact', label: 'Contact' },
    { path: '/terms', label: 'Terms' }
  ];

  const handleSocialClick = (platform) => {
    trackSocial(platform);
  };

  const handleContactClick = (method) => {
    trackContact(method);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Main Footer */}
          <div className="footer__main">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/img/logo_footer.svg" alt="The Moorings Cottage" />
              </Link>
              <p className="footer__tagline">
                A beautiful holiday cottage in the heart of North Wales, offering stunning sea views and modern comfort.
              </p>
            </div>

            <div className="footer__nav">
              <h4>Quick Links</h4>
              <ul className="footer__nav-list">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__contact">
              <h4>Contact Us</h4>
              <div className="footer__contact-info">
                <div className="footer__contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Felinheli Terrace, Y Felinheli, Gwynedd, LL56 4JN</span>
                </div>
                
                <div className="footer__contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3521 21.3979C21.1469 21.5832 20.9046 21.7209 20.6407 21.8019C20.3769 21.8829 20.0975 21.9054 19.822 21.867C16.7428 21.4956 13.787 20.5347 11.19 19.05C8.77382 17.7001 6.72533 15.6516 5.375 13.235C3.88441 10.6298 2.92806 7.66506 2.563 4.578C2.52462 4.30252 2.54713 4.02312 2.62813 3.75926C2.70912 3.4954 2.84679 3.25312 3.0321 3.04792C3.21741 2.84272 3.4458 2.67915 3.7008 2.56753C3.9558 2.45591 4.2315 2.3989 4.51 2.4H7.51C7.96566 2.40006 8.40276 2.58312 8.73251 2.91553C9.06226 3.24794 9.26141 3.70676 9.292 4.162C9.35693 5.11892 9.63131 6.05138 10.1 6.9C10.3193 7.31869 10.3999 7.79296 10.3299 8.25473C10.2599 8.7165 10.0427 9.14282 9.71 9.47L8.41 10.77C9.45693 12.9771 11.0229 14.5431 13.23 15.59L14.53 14.29C14.8572 13.9573 15.2835 13.7401 15.7453 13.6701C16.207 13.6001 16.6813 13.6807 17.1 13.9C17.9486 14.3687 18.8811 14.6431 19.838 14.708C20.2932 14.7386 20.7521 14.9377 21.0845 15.2675C21.4169 15.5972 21.5999 16.0343 21.6 16.49V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <a href="tel:+447742042031" onClick={() => handleContactClick('phone_1')}>+44 (0)7742042031</a>
                    <a href="tel:+447796601576" onClick={() => handleContactClick('phone_2')}>+44 (0)7796 601576</a>
                  </div>
                </div>
                
                <div className="footer__contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="mailto:themooringscottage@gmail.com" onClick={() => handleContactClick('email')}>themooringscottage@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <p className="footer__copyright">
                © {currentYear} The Moorings Cottage. All rights reserved.
              </p>
              
              <div className="footer__social">
                <a 
                  href="https://m.facebook.com/profile.php?id=111776223882344&ref=content_filter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                  onClick={() => handleSocialClick('facebook')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.instagram.com/themooringscottage/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                  onClick={() => handleSocialClick('instagram')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://x.com/mooringscottage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="X (Twitter)"
                  onClick={() => handleSocialClick('x_twitter')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
