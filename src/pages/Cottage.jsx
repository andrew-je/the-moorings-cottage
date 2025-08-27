import { Link } from 'react-router-dom';
import './Cottage.css';

const Cottage = () => {
  return (
    <div className="cottage__wrapper">
      <div className="container smaller">
        <div className="outer__cottage">
          <div className="top__">
            <h2>The Cottage</h2>
          </div>
          <div className="double__">
            <div className="info">
              <h6>Self-catering cottage in Y Felinheli</h6>
              <p>The Moorings Cottage has been renovated to provide a calm and peaceful space and is available for holiday lets in North Wales. Situated in Y Felinheli, the house enjoys a semi-rural village location, yet is only five miles from Bangor and Caernarfon. The self-catering cottage is small and stylish, perfect for sleeping 4 in style.</p>
              <div className="list">
                <table>
                  <tbody>
                    <tr>
                      <td><span>Accomodates</span></td>
                      <td><p>4</p></td>
                    </tr>
                    <tr>
                      <td><span>Check in time</span></td>
                      <td><p>5pm onwards</p></td>
                    </tr>
                    <tr>
                      <td><span>Check out time</span></td>
                      <td><p>9am</p></td>
                    </tr>
                    <tr>
                      <td><span>Parking</span></td>
                      <td><p>One car parking space only</p></td>
                    </tr>
                    <tr>
                      <td><span>Master Bedroom</span></td>
                      <td><p>Kingsize bed</p></td>
                    </tr>
                    <tr>
                      <td><span>Bedroom 2</span></td>
                      <td><p>Super king or twins</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="media">
              <img src="/img/featureicons.svg" alt="feature" />
            </div>
          </div>
          <div className="gallery__cottage">
            <div className="top">
              <div className="front">
                <img src="/img/frontview.webp" alt="front" />
              </div>
              <div className="breakfast">
                <img src="/img/breakfast.webp" alt="breakfast" />
              </div>
            </div>
            <div className="bottom">
              <div className="lamp">
                <img src="/img/lamp.webp" alt="lamp" />
              </div>
              <div className="floorplan">
                <img src="/img/floorplan.svg" alt="floorplan" />
              </div>
            </div>
          </div>
          <div className="button__wrapper">
            <Link to="/booking">BOOK NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cottage;
