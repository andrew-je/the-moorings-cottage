import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useAnalytics } from '../hooks/useAnalytics';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

const Home = () => {
  const swiperRef = useRef(null);
  const { trackBooking, trackGallery, trackVideo, trackEvent } = useAnalytics();

  const sliderImages = [
    '/img/slider1.jpg', '/img/slider2.jpg', '/img/slider3.jpg', '/img/slider4.jpg',
    '/img/slider5.jpg', '/img/slider6.jpg', '/img/slider7.jpg', '/img/slider8.jpg',
    '/img/slider9.jpg', '/img/slider10.jpg', '/img/slider11.jpg', '/img/slider12.jpg',
    '/img/slider13.jpg', '/img/slider14.jpg', '/img/slider15.jpg', '/img/slider16.jpg',
    '/img/slider17.jpg', '/img/slider18.jpg', '/img/slider19.jpg', '/img/slider20.jpg',
    '/img/slider21.jpg', '/img/slider22.jpg', '/img/slider23.jpg', '/img/slider24.jpg',
    '/img/slider25.jpg'
  ];

  const features = [
    {
      icon: '🏠',
      title: 'Beautiful Cottage',
      description: 'A renovated Tudor-style cottage with modern amenities and stunning views'
    },
    {
      icon: '🌊',
      title: 'Sea Views',
      description: 'Spectacular vistas over the Menai Straits towards the Isle of Anglesey'
    },
    {
      icon: '🏔️',
      title: 'Snowdonia Location',
      description: 'On the edge of Snowdonia National Park with easy access to hiking'
    },
    {
      icon: '🚶',
      title: 'Walking Distance',
      description: 'Beach, restaurants, pubs and shops all within walking distance'
    }
  ];

  const reviews = [
    {
      text: "Spotlessly clean and very comfortable rooms with a balcony accessed from the lounge and one from the master bedroom. The kitchen contained all you would need with an amazing fridge/freezer that dispensed cold water and ice.",
      author: "Wilson Family",
      rating: 5
    },
    {
      text: "Thoughtful, quality items throughout, there wasn't a single thing we could have asked for that wasn't included by such thoughtful owners. All furniture was of a high spec.",
      author: "Canning Family",
      rating: 5
    },
    {
      text: "The thoughtful owners had provided everything we were likely to need and even left a welcome box which was a lovely touch on arrival. A beautifully clean property.",
      author: "Mr Croft",
      rating: 5
    }
  ];

  const handleBookingClick = () => {
    trackBooking('homepage_booking_click', { step: 'initial_click' });
  };

  const handleCottageClick = () => {
    trackEvent('navigation', 'engagement', 'view_cottage', 1);
  };

  const handleGalleryClick = () => {
    trackGallery('view_full_gallery', 0);
  };

  const handleAreaClick = () => {
    trackEvent('navigation', 'engagement', 'explore_area', 1);
  };

  const handleVideoPlay = (videoType) => {
    trackVideo('play', videoType);
  };

  const handleReviewClick = () => {
    trackEvent('navigation', 'engagement', 'view_reviews', 1);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <img src="/img/hero-banner_.jpg" alt="The Moorings Cottage" className="hero__image" />
          <div className="hero__overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              The Moorings Cottage
              <span className="hero__subtitle">Y Felinheli, North Wales</span>
            </h1>
            <p className="hero__description">
              An original Tudor-style late 1800's semi-detached cottage that has been completely renovated to provide a calm, modern and peaceful retreat with spectacular vistas over the Menai Straits towards the Isle of Anglesey.
            </p>
            <div className="hero__actions">
              <Link to="/booking" className="btn btn--accent" onClick={handleBookingClick}>
                Book Your Stay
              </Link>
              <Link to="/cottage" className="btn btn--primary" onClick={handleCottageClick}>
                View Cottage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Why Choose The Moorings</h2>
            <p>Experience the perfect blend of historic charm and modern comfort</p>
          </div>
          
          <div className="grid grid--4">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cottage Gallery Section */}
      <section className="section section--small">
        <div className="container">
          <div className="section__header text-center">
            <h2>Take a Tour</h2>
            <p>Explore our beautiful cottage through these stunning images</p>
          </div>
          
          <div className="gallery-slider">
            <div className="gallery-slider__controls">
              <button 
                className="gallery-slider__btn gallery-slider__btn--prev"
                onClick={() => {
                  swiperRef.current?.slidePrev();
                  trackGallery('slider_navigation', 'prev');
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="gallery-slider__counter">1 of {sliderImages.length}</span>
              <button 
                className="gallery-slider__btn gallery-slider__btn--next"
                onClick={() => {
                  swiperRef.current?.slideNext();
                  trackGallery('slider_navigation', 'next');
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={false}
              pagination={false}
              allowTouchMove={true}
              touchRatio={1}
              touchAngle={45}
              shortSwipes={true}
              longSwipes={true}
              longSwipesRatio={0.5}
              longSwipesMs={300}
              onSlideChange={(swiper) => {
                const counter = document.querySelector('.gallery-slider__counter');
                if (counter) {
                  counter.textContent = `${swiper.realIndex + 1} of ${sliderImages.length}`;
                }
                trackGallery('slide_change', swiper.realIndex + 1);
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  centeredSlides: false
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false
                }
              }}
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery-slider__slide">
                    <img src={image} alt={`Cottage view ${index + 1}`} className="img-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="gallery-slider__actions text-center">
              <Link to="/gallery" className="btn btn--secondary" onClick={handleGalleryClick}>
                View Full Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Section */}
      <section className="section section--small">
        <div className="container">
          <div className="area-preview">
            <div className="area-preview__content">
              <h2>The Local Area</h2>
              <p>Y Felinheli, formerly known as Port Dinorwic, is situated on the beautiful Menai Straits between the historic town of Caernarfon and the cathedral city of Bangor.</p>
              <p>Home to a small established yachting marina, this small village also has a couple of pubs, a restaurant and cafe in the dock area, a shop and Post Office, and several great restaurants on the nearby Island of Anglesey.</p>
              <Link to="/area" className="btn btn--secondary" onClick={handleAreaClick}>
                Explore the Area
              </Link>
            </div>
            <div className="area-preview__image">
              <img src="/img/map.svg" alt="Local area map" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="section section--small">
        <div className="container">
          <div className="section__header text-center">
            <h2>Video Tours</h2>
            <p>See the cottage and local area in motion</p>
          </div>
          
          <div className="grid grid--2">
            <div className="video-card card">
              <div className="video-card__embed">
                <iframe 
                  src="https://www.youtube.com/embed/aasj3_W02fc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" 
                  frameBorder="0"
                  title="House tour"
                  allowFullScreen
                  onLoad={() => handleVideoPlay('house_tour')}
                ></iframe>
              </div>
              <h3>House Tour</h3>
              <p>Take a detailed tour of The Moorings Cottage</p>
            </div>
            
            <div className="video-card card">
              <div className="video-card__embed">
                <iframe 
                  src="https://www.youtube.com/embed/dIo7Ci0y7LU?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" 
                  frameBorder="0"
                  title="Local area"
                  allowFullScreen
                  onLoad={() => handleVideoPlay('local_area')}
                ></iframe>
              </div>
              <h3>Local Area</h3>
              <p>Discover the beautiful surroundings of Y Felinheli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Image Section */}
      <section className="bridge-section">
        <div className="bridge-section__image">
                      <img src="/img/bridge.webp" alt="Menai Bridge" className="img-cover" />
            <div className="bridge-section__overlay">
              <h2>Menai Bridge</h2>
              <p>Connecting mainland Wales to the Isle of Anglesey</p>
            </div>
        </div>
      </section>

      {/* Booking & Reviews Section */}
      <section className="section">
        <div className="container">
          <div className="booking-reviews">
            <div className="booking-reviews__booking">
              <div className="card">
                <h3>Book Your Stay</h3>
                <p>For availability, prices and to book please see the calendar below. Our change-over days are Friday, with the exception of Christmas and New Year.</p>
                
                <div className="booking-calendar">
                  <iframe 
                    src="https://secure.bookalet.co.uk/widget?id=da8ebdf5-2f4a-47cb-8c92-f84032b16f5b&amp;property=17263&amp;monthcount=1" 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    allowTransparency="true" 
                    title="Booking Calendar"
                    onLoad={() => trackBooking('calendar_loaded', { step: 'calendar_view' })}
                  ></iframe>
                </div>
                
                <Link to="/booking" className="btn btn--accent" onClick={handleBookingClick}>
                  Check Availability
                </Link>
              </div>
            </div>
            
            <div className="booking-reviews__reviews">
              <h3>What Our Guests Say</h3>
              <div className="reviews-grid">
                {reviews.map((review, index) => (
                  <div key={index} className="review-card card">
                    <div className="review-card__rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="review-card__star">★</span>
                      ))}
                    </div>
                    <p className="review-card__text">"{review.text}"</p>
                    <span className="review-card__author">- {review.author}</span>
                  </div>
                ))}
              </div>
              <Link to="/review" className="btn btn--secondary" onClick={handleReviewClick}>
                Read All Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
