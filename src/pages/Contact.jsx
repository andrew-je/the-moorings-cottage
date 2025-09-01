import './Contact.css';

const Contact = () => {
  return (
    <div className="contact__wrapper">
      <div className="container">
        <div className="outer__contact">
          <div className="top__">
            <h2>Contact & Directions</h2>
            <p>Get in touch with us and find out how to reach The Moorings Cottage</p>
          </div>
          
          <div className="contact__content">
            <div className="contact__info">
              <h3>Contact Information</h3>
              <div className="contact__details">
                <div className="contact__item">
                  <h4>Phone</h4>
                  <p><a href="tel:+4407742042031">+44 (0)7742042031</a></p>
                  <p><a href="tel:+44 7796 601576">+44 (0)7796 601576</a></p>
                </div>
                <div className="contact__item contact__item--centered">
                  <h4>Email</h4>
                  <p><a href="mailto:themooringscottage@gmail.com">themooringscottage@gmail.com</a></p>
                </div>
                <div className="contact__item">
                  <h4>Address</h4>
                  <p>The Moorings Cottage<br />
                  Felinheli Terrace<br />
                  Y Felinheli<br />
                  Gwynedd<br />
                  LL56 4JN</p>
                </div>
              </div>
            </div>

            <div className="directions__info">
              <h3>How to Find Us</h3>
              <div className="directions__content">
                <div className="directions__text">
                  <h4>By Car</h4>
                  <p>From the A55, take the exit for Y Felinheli. Follow the signs to the village centre. The cottage is located on Felinheli Terrace, overlooking the Menai Straits.</p>
                  
                  <h4>By Train</h4>
                  <p>The nearest train station is Bangor, which is approximately 5 miles away. From there, you can take a taxi or bus to Y Felinheli.</p>
                  
                  <h4>By Bus</h4>
                  <p>Regular bus services run from Bangor and Caernarfon to Y Felinheli. The bus stop is a short walk from the cottage.</p>
                </div>
                <div className="directions__map">
                  <img src="/img/map.svg" alt="Location map" />
                </div>
              </div>
            </div>

            <div className="local__info">
              <h3>Local Amenities</h3>
              <div className="amenities__grid">
                <div className="amenity__item">
                  <h4>Shops & Services</h4>
                  <ul>
                    <li>Local shop and Post Office</li>
                    <li>Beautician</li>
                    <li>Hairdresser</li>
                    <li>Petrol station</li>
                  </ul>
                </div>
                <div className="amenity__item">
                  <h4>Food & Drink</h4>
                  <ul>
                    <li>Local pubs</li>
                    <li>Restaurant and cafe</li>
                    <li>Takeaway options</li>
                    <li>Supermarkets in nearby towns</li>
                  </ul>
                </div>
                <div className="amenity__item">
                  <h4>Transport</h4>
                  <ul>
                    <li>Bus services</li>
                    <li>Train station (Bangor)</li>
                    <li>Taxi services</li>
                    <li>Car hire available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
