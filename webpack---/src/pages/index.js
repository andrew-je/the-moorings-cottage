import React from 'react';
import Carousel from 'nuka-carousel';
import Header from '../components/header';
import Heading from '../components/heading';
import Hero from '../components/hero';
import Videos from '../components/videos';
import LocalArea from '../components/localArea';
import ImageGallery from '../components/imageGallery';
import RichText from '../components/richText';
import PrimaryButton from '../components/primaryButton';
import HomeText from '../components/homeText';
import Container from '../components/container';
import Spacer from '../components/spacer';
import TextBlock from '../components/textBlock';
import { Row, Column } from '@react-tiny-grid/core';
import FeatureImage from '../components/featureImage';
import ImageHolder from '../components/imageHolder';
import ReviewHolder from '../components/reviewHolder';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import { HeroBanner } from '../components/images';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        The Moorings | Y Felinheli | Anglesey | North Wales | Self Catering Holiday Cottage
      </title>
      <link rel="canonical" href="https://themooringscottage.com" />
      <meta
        name="description"
        content="The Moorings is a self-catering cottage in Y Felinheli, North Wales. Formerly a sea captains cottage. With beautiful sea views of the Menai Straits and Anglesey. Based in the centre of an area of outstanding natural beauty, with Snowdonia and Angelsey on its doorstep."
      ></meta>
      <meta
        name="og:title"
        property="og:title"
        content="The Moorings Cottage, Y Felinheli, Anglesey, Snowdonia, North Wales, Holiday Cottage, Holiday, Self-catering"
      ></meta>
    </Helmet>

    <Header></Header>

    <Hero></Hero>
    
    {/* <Carousel
    swiping="true"
    autoplay="true"
    autoplayInterval="2000"
    swiping="true"
    pauseOnHover="false"
    style={{ background: "white" }}>
      <img src="/images/hero-banner.jpg" />
      <img src="/images/toast.jpg" />
      <img src="/images/breakfast-2-slider.jpg" />
      <img src="/images/kitchen-2-gallery.jpg" />
      <img src="/images/menai-straits-view-gallery.jpg" />
      <img src="/images/cwyfan-church-slider.jpg" />
    </Carousel> */}

    <HomeText>
      <p className="richTextCenter">
        An original Tudor-style late 1800's semi-detached cottage that has been
        completely renovated to provide a calm, modern and peaceful retreat with
        spectacular vistas over the Menai Straits towards the Isle of Anglesey.
        <Spacer></Spacer>
        The Moorings has two delightful balconies with glass balustrades both
        overlooking the sea. Finished to a high standard with an elevated
        position, perfectly set up for two couples or a family of four. This
        wonderful property is on the edge of the Snowdonia national park
        overlooking the Menai straits and Anglesey. Beach, restaurants, pubs and
        Tapas bar in walking distance of the property. It also sits on the
        coastal path and main cycle paths so lots to do in a beautiful location.
      </p>
    </HomeText>

    <ImageGallery></ImageGallery>
    <LocalArea></LocalArea>
    <Videos></Videos>

    <FeatureImage>
      <img src="/images/menai_bridge.jpg" alt="Menai Bridge"></img>
      <h5>Menai Suspension bridge</h5>
    </FeatureImage>

    <Container>
      <Row spacing={[46, 34]} breakpoints={[769]}>
        <Column widths={[6]}>
          <TextBlock>
            <Heading>
              <h2 style={{ marginBottom: '40px' }}>Booking & Availability</h2>
            </Heading>
            <RichText>
              For availability, prices and to book please see the calendar
              below. Our change-over days are Friday, with the exception of
              Christmas and New Year.
            </RichText>
            <Spacer></Spacer>
            <iframe
              src="https://secure.bookalet.co.uk/widget?id=da8ebdf5-2f4a-47cb-8c92-f84032b16f5b&property=17263&monthcount=1"
              width="100%"
              height="550"
              frameborder="0"
              allowtransparency="true"
              title="Booking Calendar"
            ></iframe>
            <Spacer></Spacer>
            <PrimaryButton>
              <a href="/booking">Book Now</a>
            </PrimaryButton>
          </TextBlock>
        </Column>

        <Column widths={[6]}>
          <TextBlock>
            <Heading>
              <h2 style={{ marginBottom: '40px' }}>Reviews</h2>
            </Heading>

            <ReviewHolder>
              <RichText>
                <p className="italics">
                  “Spotlessly clean and very comfortable rooms with a balcony
                  accessed from the lounge and one from the master bedroom. The
                  kitchen contained all you would need with an amazing
                  fridge/freezer that dispensed cold water and ice. There was a
                  lovely welcome pack to greet us that made us feel spoilt. The
                  accommodation was centrally situated with easy access to all
                  the attractions on offer in Snowdon and Anglesey”.
                </p>
              </RichText>
              <h4>Wilson Family</h4>
            </ReviewHolder>

            <ReviewHolder>
              <RichText>
                <p className="italics">
                  “Thoughtful, quality items throughout, there wasn't a single
                  thing we could have asked for that wasn't included by such
                  thoughtful owners. All furniture was of a high spec, and made
                  our stay so comfortable. The property is so well placed for
                  Snowdonia, Anglesey and wider exploration. Shopping and eating
                  options within walking distance, or a short journey away. All
                  in all outstanding, and hope to return”.
                </p>
              </RichText>
              <h4>Canning Family</h4>
            </ReviewHolder>

            <ReviewHolder>
              <RichText>
                <p className="italics">
                  “The thoughtful owners had provided everything we were likely
                  to need and even left a welcome box which was a lovely touch
                  on arrival. A beautifully clean property and one I am
                  certainly able to recommended. A quiet location in the village
                  but very handy for a range of activities, pubs and shops.
                  Plenty of pleasant walks and places to explore, a place we
                  would love to return to”.
                </p>
              </RichText>
              <h4>Mr Croft</h4>
            </ReviewHolder>
            <Link to="/reviews" className="upper-turquoise-arrow">
              Read more
              <img
                src="/svgs/right-arrow.svg"
                className="arrow"
                alt="Read more"
              />
            </Link>
          </TextBlock>
        </Column>
      </Row>
    </Container>

    <Footer></Footer>
  </>
);
