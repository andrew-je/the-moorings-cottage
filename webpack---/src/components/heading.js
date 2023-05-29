import React from 'react';
import headingStyles from './heading.module.scss';

export default ({ children }) => (
  <div className={headingStyles.heading}>{children}</div>
);
