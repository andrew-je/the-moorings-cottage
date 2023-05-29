import React from 'react';
import videosStyles from './videos.module.scss';
import Section from './section';
import Container from './container';
import Heading from './heading';
import SecondaryButton from './secondaryButton';
import { Row, Column } from '@react-tiny-grid/core';

export default () => (
  <Section className={videosStyles.videos}>
    <Container>
      <Heading>
        <h2 className={videosStyles.title}>Video tour</h2>
      </Heading>
      <Row spacing={[40, 25]} breakpoints={[769]}>
        <Column widths={[6]}>
          <div className={videosStyles.video}>
            {' '}
            <iframe
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/aasj3_W02fc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
              width="100%"
              height="240"
              allowtransparency="true"
              frameborder="0"
              title="House Tour"
            ></iframe>
            <span className={videosStyles.caption}>House tour</span>
          </div>
        </Column>
        <Column widths={[6]}>
          <div className={videosStyles.video}>
            {' '}
            <iframe
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/dIo7Ci0y7LU?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
              width="100%"
              height="240"
              allowtransparency="true"
              frameborder="0"
              title="Drone Footage"
            ></iframe>
            <span className={videosStyles.caption}>Local area</span>
          </div>
        </Column>
      </Row>
      <SecondaryButton className={videosStyles.button}>
        <a href="/the-house">Find out more</a>
      </SecondaryButton>
    </Container>
  </Section>
);
