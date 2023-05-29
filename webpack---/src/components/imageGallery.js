import React, { useState } from 'react';
import imageGalleryStyles from './imageGallery.module.scss';
import Section from './section';
import Container from './container';
import SecondaryButton from './secondaryButton';
import Heading from './heading';
import InfiniteCarousel from './Image Slider/index';

/* imagery */
import {
  Breakfast,
  Bubbly,
  BreakfastTwo,
  BalconyOne,
  BalconyTwo,
  BalconyThree,
  BalconyFour,
  BathroomOne,
  BathroomTwo,
  CwyfanChurch,
  DownstairsBathroom,
  FrontView,
  BackView,
  FrontViewGallery,
  Haflinger,
  HeroBanner,
  ILoveWales,
  KitchenOne,
  KitchenTwo,
  Lamp,
  LoungeOne,
  LoungeTwo,
  MasterBedroomOne,
  MasterBedroomTwo,
  MasterBedroomThree,
  SecondBedroom,
  MenaiBridge,
  MenaiStraits,
  PortDinorwicOne,
  PortDinorwicTwo,
  PriceChart,
  Review,
  Snowdon,
  UtilityRoom,
} from './images';

const ImageOne =       FrontViewGallery;
const ImageOnePlus =   HeroBanner;
const ImageTwo =       LoungeOne;
const ImageTwoPlus =   Bubbly;
const ImageThree =     LoungeTwo;
const ImageFour =      KitchenOne;
const ImageFourPlus =  Breakfast;
const ImageFive =      KitchenTwo;
const ImageSix =       UtilityRoom;
const ImageSeven =     DownstairsBathroom;
const ImageEight =     MasterBedroomOne;
const ImageEightPlus = SecondBedroom;
const ImageNine =      MasterBedroomTwo;
const ImageTen =       MasterBedroomThree;
const ImageEleven =    BathroomOne;
const ImageTwelve =    BathroomTwo;
const ImageThirteen =  BalconyOne;
const ImageFourteen =  BalconyTwo;
const ImageFourteenPlus =  BackView;
const ImageFifteen =   BalconyThree;
const ImageSixteen =   BalconyFour;
const ImageSeventeen = MenaiStraits;
const ImageEighteen =  PortDinorwicTwo;
const ImageNineteen =  MenaiBridge;
const ImageTwenty =    PortDinorwicOne;

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '-44px',
        left: 'calc(50% + 36px)',
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '-44px',
        right: 'calc(50% + 36px)',
        left: null,
        background: 'orange',
      }}
      onClick={onClick}
    />
  );
}

export default ({ children }) => {
  const [index, setIndex] = useState(1);

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    infinite: true,
    centerPadding: '200px',
    slidesToShow: 1,
    speed: 700,
    afterChange: (newIndex) => {
      console.log(newIndex);
      setIndex(newIndex + 1);
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          centerPadding: '160px',
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: '110px',
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '200px',
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    nextArrow: (
      <img
        alt="Right arrow"
        className={`${imageGalleryStyles.step} ${imageGalleryStyles.stepRight}`}
        src="/svgs/right-arrow.svg"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '-44px',
          left: 'calc(50% + 36px)',
        }}
      />
    ),
    prevArrow: (
      <img
        alt="Left arrow"
        className={`${imageGalleryStyles.step} ${imageGalleryStyles.stepLeft}`}
        src="/svgs/left-arrow.svg"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '-44px',
          right: 'calc(50% + 36px)',
          left: null,
        }}
      />
    ),
  };

  return (
    <Section className={imageGalleryStyles.imageGallery}>
      <Container>
        <Heading>
          <h2 className={imageGalleryStyles.title}>The cottage</h2>
        </Heading>
        <span className={imageGalleryStyles.indicator}>{index} of 25</span>
        <Slider {...settings}>
          <div>
            <ImageOne alt="The Moorings" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>The Moorings</small>
          </div>
          <div>
            <ImageOnePlus alt="View from the balcony" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Balcony View</small>
          </div>
          <div>
            <ImageTwo alt="Lounge" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Lounge</small>
          </div>
          <div>
            <ImageTwoPlus alt="Bubbly" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Bubbly</small>
          </div>
          <div>
            <ImageThree alt="Lounge" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Lounge</small>
          </div>
          <div>
            <ImageFour alt="Kitchen" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Kitchen</small>
          </div>
          <div>
            <ImageFourPlus alt="Breakfast" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Breakfast in bed</small>
          </div>
          <div>
            <ImageFive alt="Kitchen" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Kitchen</small>
          </div>
          <div>
            <ImageSix alt="Utility room" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Utility room</small>
          </div>
          <div>
            <ImageSeven
              alt="Downstairs bathroom"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>
              Downstairs bathroom
            </small>
          </div>
          <div>
            <ImageEight
              alt="Master bedroom"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Master bedroom</small>
          </div>
          <div>
            <ImageEightPlus
              alt="Second bedroom"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Second bedroom</small>
          </div>
          <div>
            <ImageNine
              alt="Master bedroom"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Master bedroom</small>
          </div>
          <div>
            <ImageTen
              alt="Master bedroom"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Master bedroom</small>
          </div>
          <div>
            <ImageEleven alt="Bathroom" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Bathroom</small>
          </div>
          <div>
            <ImageTwelve alt="Bathroom" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Bathroom</small>
          </div>
          <div>
            <ImageThirteen alt="Balcony" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Balcony</small>
          </div>
          <div>
            <ImageFourteen alt="Balcony" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Balcony</small>
          </div>
          <div>
            <ImageFourteenPlus alt="View from Balcony" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Back View</small>
          </div>
          <div>
            <ImageFifteen alt="Balcony" className={imageGalleryStyles.image} />
            <small className={imageGalleryStyles.caption}>Balcony</small>
          </div>
          <div>
            <ImageSixteen
              alt="View of the Menai Straits from the balcony"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>
              View of Menai Straits from balcony
            </small>
          </div>
          <div>
            <ImageSeventeen
              alt="View of Menai Straits from balcony"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>
              View of Menai Straits from balcony
            </small>
          </div>
          <div>
            <ImageEighteen
              alt="Port Dinorwic"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Port Dinorwic</small>
          </div>
          <div>
            <ImageNineteen
              alt="Menai Bridge"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Menai Bridge</small>
          </div>
          <div>
            <ImageTwenty
              alt="Port Dinorwic"
              className={imageGalleryStyles.image}
            />
            <small className={imageGalleryStyles.caption}>Port Dinorwic</small>
          </div>
        </Slider>
        {/* <InfiniteCarousel
          onChange={(index) => {
            console.log(index);
            setIndex(index === 20 ? 1 : index + 1);
          }}
          breakpoints={[
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                scrollOnDevice: true,
                showSides: false,
                slidesSpacing: 0,
                sideSize: 0,
                incrementalSides: false,
              },
            },
          ]}
          slidesToScroll={1}
          slidesToShow={4}
          showSides={true}
          sidesOpacity={0.2}
          sideSize={0.5}
          slidesToScroll={1}
          slidesSpacing={20}
          slidesToShow={1}
          scrollOnDevice={true}
          incrementalSides={true}
          nextArrow={
            <Image
              alt="Right arrow"
              className={`${imageGalleryStyles.step} ${imageGalleryStyles.stepRight}`}
              src="/svgs/right-arrow.svg"
            />
          }
          prevArrow={
            <Image
              alt="Left arrow"
              className={`${imageGalleryStyles.step} ${imageGalleryStyles.stepLeft}`}
              src="/svgs/left-arrow.svg"
            />
          }
        >
          <div>
            <Image
              alt="The Moorings"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>The Moorings</small>
          </div>
          <div>
            <Image
              alt="Lounge"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Lounge</small>
          </div>
          <div>
            <Image
              alt="Lounge"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Lounge</small>
          </div>
          <div>
            <Image
              alt="Kitchen"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Kitchen</small>
          </div>
          <div>
            <Image
              alt="Kitchen"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Kitchen</small>
          </div>
          <div>
            <Image
              alt="Utility room"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Utility room</small>
          </div>
          <div>
            <Image
              alt="Downstairs bathroom"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>
              Downstairs bathroom
            </small>
          </div>
          <div>
            <Image
              alt="Master bedroom"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Master bedroom</small>
          </div>
          <div>
            <Image
              alt="Master bedroom"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Master bedroom</small>
          </div>
          <div>
            <Image
              alt="Master bedroom"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Master bedroom</small>
          </div>
          <div>
            <Image
              alt="Bathroom"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Bathroom</small>
          </div>
          <div>
            <Image
              alt="Bathroom"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Bathroom</small>
          </div>
          <div>
            <Image
              alt="Balcony"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Balcony</small>
          </div>
          <div>
            <Image
              alt="Balcony"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Balcony</small>
          </div>
          <div>
            <Image
              alt="Balcony"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Balcony</small>
          </div>
          <div>
            <Image
              alt="View of the Menai Straits from the balcony"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>
              View of Menai Straits from balcony
            </small>
          </div>
          <div>
            <Image
              alt="View of Menai Straits from balcony"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>
              View of Menai Straits from balcony
            </small>
          </div>
          <div>
            <Image
              alt="Port Dinorwic"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Port Dinorwic</small>
          </div>
          <div>
            <Image
              alt="Menai Bridge"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Menai Bridge</small>
          </div>
          <div>
            <Image
              alt="Port Dinorwic"
              className={imageGalleryStyles.image}

            />
            <small className={imageGalleryStyles.caption}>Port Dinorwic</small>
          </div>
        </InfiniteCarousel> */}
        <SecondaryButton className={imageGalleryStyles.button}>
          <a href="/the-house">Read More</a>
        </SecondaryButton>
      </Container>
    </Section>
  );
};
