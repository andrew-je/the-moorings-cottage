import SEOHead from '../components/SEOHead';
import './Area.css';

const Area = () => {
  return (
    <div className="area__wrapper">
      <SEOHead 
        title="Local Area - Y Felinheli, Anglesey & Snowdonia | The Moorings Cottage"
        description="Explore Y Felinheli and surrounding areas. Discover Anglesey attractions, Snowdonia National Park, Caernarfon Castle, and local amenities near The Moorings Cottage."
        keywords="y felinheli attractions, anglesey things to do, snowdonia national park, caernarfon castle, menai bridge, north wales attractions, places to visit anglesey, gwynedd attractions"
        url="https://themooringscottage.co.uk/area"
      />
      <div className="container">
        <div className="outer__area">
          <div className="top__">
            <h2>The Local Area</h2>
            <p>Discover the beautiful surroundings of Y Felinheli and North Wales</p>
          </div>
          
          <div className="area__content">
            <div className="area__intro">
              <h3>Y Felinheli</h3>
              <p>Y Felinheli, formerly known as Port Dinorwic, is situated on the beautiful Menai Straits between the historic town of Caernarfon and the cathedral city of Bangor.</p>
              <p>Home to a small established yachting marina, this small village also has a couple of pubs, a restaurant and cafe in the dock area, a shop and Post Office, a beautician, a hairdresser and several great restaurants on the nearby Island of Anglesey.</p>
            </div>

            <div className="area__attractions">
              <h3>Local Attractions</h3>
              <div className="attractions__grid">
                <div className="attraction__item">
                  <h4>Snowdonia National Park</h4>
                  <p>Just a short drive away, Snowdonia offers stunning mountain scenery, hiking trails, and outdoor activities for all levels.</p>
                </div>
                <div className="attraction__item">
                  <h4>Isle of Anglesey</h4>
                  <p>Connected by the Menai Suspension Bridge, Anglesey offers beautiful beaches, coastal walks, and charming villages.</p>
                </div>
                <div className="attraction__item">
                  <h4>Caernarfon Castle</h4>
                  <p>This impressive medieval castle is a UNESCO World Heritage Site and offers fascinating history and stunning views.</p>
                </div>
                <div className="attraction__item">
                  <h4>Llyn Peninsula</h4>
                  <p>Known for its beautiful coastline, sandy beaches, and traditional Welsh culture, perfect for a day trip.</p>
                </div>
              </div>
            </div>

            <div className="area__activities">
              <h3>Things to Do</h3>
              <ul>
                <li>Walk along the coastal path</li>
                <li>Cycle the local cycle routes</li>
                <li>Visit the local marina</li>
                <li>Explore the nearby beaches</li>
                <li>Hike in Snowdonia National Park</li>
                <li>Visit historic castles and sites</li>
                <li>Enjoy local restaurants and pubs</li>
                <li>Take a boat trip on the Menai Straits</li>
              </ul>
            </div>

            <div className="area__image">
              <img src="/img/snowdon.jpg" alt="Snowdon" />
              <p>Snowdon, the highest mountain in Wales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
