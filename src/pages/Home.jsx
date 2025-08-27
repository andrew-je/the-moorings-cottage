import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

const Home = () => {
  const swiperRef = useRef(null);

  const sliderImages = [
    '/img/slider1.jpg', '/img/slider2.jpg', '/img/slider3.jpg', '/img/slider4.jpg',
    '/img/slider5.jpg', '/img/slider6.jpg', '/img/slider7.jpg', '/img/slider8.jpg',
    '/img/slider9.jpg', '/img/slider10.jpg', '/img/slider11.jpg', '/img/slider12.jpg',
    '/img/slider13.jpg', '/img/slider14.jpg', '/img/slider15.jpg', '/img/slider16.jpg',
    '/img/slider17.jpg', '/img/slider18.jpg', '/img/slider19.jpg', '/img/slider20.jpg',
    '/img/slider21.jpg', '/img/slider22.jpg', '/img/slider23.jpg', '/img/slider24.jpg',
    '/img/slider25.jpg'
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="long__image smaller">
        <div className="media">
          <img src="/img/hero-banner_.jpg" alt="Snowdon" />
        </div>
      </div>
      
      {/* Hero Description */}
      <div className="hero__desc">
        <div className="container">
          <div className="info">
            <p>An original Tudor-style late 1800's semi-detached cottage that has been completely renovated to provide a calm, modern and peaceful retreat with spectacular vistas over the Menai Straits towards the Isle of Anglesey.</p>
            <p>The Moorings has two delightful balconies with glass balustrades both overlooking the sea. Finished to a high standard with an elevated position, perfectly set up for two couples or a family of four. This wonderful property is on the edge of the Snowdonia national park overlooking the Menai straits and Anglesey. Beach, restaurants, pubs and Tapas bar in walking distance of the property. It also sits on the coastal path and main cycle paths so lots to do in a beautiful location.</p>
          </div>
        </div>
      </div>

      {/* Cottage Slider */}
      <div className="slider__wrapper">
        <div className="container smaller">
          <div className="outer__slider">
            <h2>The cottage</h2>
            <div className="controls">
              <button className="prev__slider" onClick={() => swiperRef.current?.slidePrev()}>
                <img src="/img/left.svg" alt="left" />
              </button>
              <span className="slide-counter">1 of {sliderImages.length}</span>
              <button className="next__slider" onClick={() => swiperRef.current?.slideNext()}>
                <img src="/img/right.svg" alt="right" />
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              navigation={false}
              pagination={false}
              onSlideChange={(swiper) => {
                const counter = document.querySelector('.slide-counter');
                if (counter) {
                  counter.textContent = `${swiper.realIndex + 1} of ${sliderImages.length}`;
                }
              }}
              breakpoints={{
                570: {
                  centeredSlides: false,
                  spaceBetween: 0
                }
              }}
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="slide">
                    <img src={image} alt={`Cottage slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="button">
              <Link to="/cottage">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Local Area Info */}
      <div className="info__map">
        <div className="container smaller">
          <div className="outer__info">
            <h2>The local area</h2>
            <div className="double">
              <div className="desc__">
                <div className="text__">
                  <p>Y Felinheli, formerly known as Port Dinorwic, is situated on the beautiful Menai Straits between the historic town of Caernarfon and the cathedral city of Bangor.</p>
                  <p>Home to a small established yachting marina, this small village also has a couple of pubs, a restaurant and cafe in the dock area, a shop and Post Office, a beautician, a hairdresser and several great restaurants on the nearby Island of Anglesey.</p>
                  <p>Visitors to this lovely region are spoilt for choice, with stunning Snowdonia, the beautiful Llyn Peninsula, or the sandy beaches of the Isle of Anglesey all within easy reach.</p>
                </div>
                <div className="button">
                  <Link to="/area">FIND OUT MORE <img src="/img/right.svg" alt="right" /></Link>
                </div>
              </div>
              <div className="map__">
                <img src="/img/map.svg" alt="map" />
                <div className="button">
                  <Link to="/contact">HOW TO FIND US <img src="/img/right.svg" alt="right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Tour */}
      <div className="tour__wrapper">
        <div className="container smaller">
          <div className="outer__tour">
            <h2>Video tour</h2>
            <div className="tour__videos">
              <div className="elem__video">
                <div className="video__">
                  <iframe 
                    src="https://www.youtube.com/embed/aasj3_W02fc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" 
                    frameBorder="0"
                    title="House tour"
                  ></iframe>
                </div>
                <p>House tour</p>
              </div>
              <div className="elem__video">
                <div className="video__">
                  <iframe 
                    src="https://www.youtube.com/embed/dIo7Ci0y7LU?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" 
                    frameBorder="0"
                    title="Local area"
                  ></iframe>
                </div>
                <p>Local area</p>
              </div>
            </div>
            <div className="button__wrapper">
              <Link to="/cottage">FIND OUT MORE</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge Image */}
      <div className="long__image">
        <div className="media">
          <img src="/img/bridge.webp" alt="Menai Suspension Bridge" />
        </div>
        <div className="title">
          <p>Menai Suspension bridge</p>
        </div>
      </div>

      {/* Booking & Reviews Section */}
      <div className="booking">
        <div className="container smaller">
          <div className="outer__booking">
            <div className="left__">
              <h6>Booking & Availability</h6>
              <p>For availability, prices and to book please see the calendar below. Our change-over days are Friday, with the exception of Christmas and New Year.</p>
              <div className="iframe">
                <iframe 
                  src="https://secure.bookalet.co.uk/widget?id=da8ebdf5-2f4a-47cb-8c92-f84032b16f5b&amp;property=17263&amp;monthcount=1" 
                  width="100%" 
                  height="550" 
                  frameBorder="0" 
                  allowTransparency="true" 
                  title="Booking Calendar"
                ></iframe>
              </div>
              <div className="button__wrapper">
                <Link to="/booking">BOOK NOW</Link>
              </div>
            </div>
            <div className="right__">
              <h6>Reviews</h6>
              <div className="elem__review">
                <p>"Spotlessly clean and very comfortable rooms with a balcony accessed from the lounge and one from the master bedroom. The kitchen contained all you would need with an amazing fridge/freezer that dispensed cold water and ice. There was a lovely welcome pack to greet us that made us feel spoilt. The accommodation was centrally situated with easy access to all the attractions on offer in Snowdon and Anglesey".</p>
                <span>Wilson Family</span>
              </div>
              <div className="elem__review">
                <p>"Thoughtful, quality items throughout, there wasn't a single thing we could have asked for that wasn't included by such thoughtful owners. All furniture was of a high spec, and made our stay so comfortable. The property is so well placed for Snowdonia, Anglesey and wider exploration. Shopping and eating options within walking distance, or a short journey away. All in all outstanding, and hope to return".</p>
                <span>Canning Family</span>
              </div>
              <div className="elem__review">
                <p>"The thoughtful owners had provided everything we were likely to need and even left a welcome box which was a lovely touch on arrival. A beautifully clean property and one I am certainly able to recommended. A quiet location in the village but very handy for a range of activities, pubs and shops. Plenty of pleasant walks and places to explore, a place we would love to return to".</p>
                <span>Mr Croft</span>
              </div>
              <div className="read__more">
                <Link to="/review">Read more <img src="/img/right.svg" alt="right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
