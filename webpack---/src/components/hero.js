import React from 'react';
import heroStyles from './hero.module.scss';
import { HeroBanner } from './images';

export default ({ children }) => (
  <div className={heroStyles.hero}>
    {/* <img src="/images/hero-banner.jpg" ></img> */}
    <HeroBanner className={heroStyles.image} alt="The Moorings - Y Felinheli" />
  </div>
);
