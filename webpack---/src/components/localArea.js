import React from 'react';
import localAreaStyles from './localArea.module.scss';
import Section from './section';
import Container from './container';
import Heading from './heading';
import RichText from './richText';
import Spacer from './spacer';
import { Row, Column } from '@react-tiny-grid/core';
import { Link } from 'gatsby';

export default ({ children }) => (
  <Section className={localAreaStyles.localArea}>
    <Container>
      <Heading>
        <h2 className={localAreaStyles.title}>The local area</h2>
      </Heading>
      <Row spacing={[50, 31]} breakpoints={[769]}>
        <Column className={localAreaStyles.column} widths={[7]}>
          <RichText>
            <p className={localAreaStyles.text}>
              Y Felinheli, formerly known as Port Dinorwic, is situated on the
              beautiful Menai Straits between the historic town of Caernarfon
              and the cathedral city of Bangor.
              <Spacer></Spacer>
              Home to a small established yachting marina, this small village
              also has a couple of pubs, a restaurant and cafe in the dock area,
              a shop and Post Office, a beautician, a hairdresser and several
              great restaurants on the nearby Island of Anglesey.
              <Spacer></Spacer>
              Visitors to this lovely region are spoilt for choice, with
              stunning Snowdonia, the beautiful Llyn Peninsula, or the sandy
              beaches of the Isle of Anglesey all within easy reach.
            </p>
          </RichText>
          <Link to="/the-local-area" className={localAreaStyles.button}>
            Find Out More
            <img
              src="/svgs/right-arrow.svg"
              className={localAreaStyles.arrow}
              alt="Find out more"
            />
          </Link>
        </Column>
        <Column className={localAreaStyles.column} widths={[5]}>
          <img
            alt="Local area map"
            className={localAreaStyles.map}
            src="/svgs/map.svg"
          />
          <Link to="/contact-and-directions" className={localAreaStyles.button}>
            How To Find Us
            <img
              src="/svgs/right-arrow.svg"
              className={localAreaStyles.arrow}
              alt="How to find us"
            />
          </Link>
        </Column>
      </Row>
    </Container>
  </Section>
);
