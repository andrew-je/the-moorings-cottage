import React from 'react';
import homeTextStyles from './homeText.module.scss';

export default ({ children }) => (
  <div className={homeTextStyles.homeText}>{children}</div>
);
