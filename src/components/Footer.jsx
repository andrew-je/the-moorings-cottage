import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="outer__footer">
          <Link to="/">
            <img src="/img/logo_footer.svg" alt="logo" />
          </Link>
          <ul>
            <li>Felinheli Terrace, Y Felinheli</li>
            <li>
              <a href="tel:+4407742042031">+44 (0)7742042031</a>
              <span className="spacer">|</span>
              <a href="tel:+44 7796 601576">+44 (0)7796 601576</a>
            </li>
            <li>
              <a href="mailto:themooringscottage@gmail.com">themooringscottage@gmail.com</a>
            </li>
          </ul>
          <div className="socials">
            <ul>
              <li>
                <a href="https://m.facebook.com/profile.php?id=111776223882344&ref=content_filter" target="_blank" rel="noopener noreferrer">
                  <img src="/img/facebook.svg" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/themooringscottage/" target="_blank" rel="noopener noreferrer">
                  <img src="/img/instagram.svg" alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
