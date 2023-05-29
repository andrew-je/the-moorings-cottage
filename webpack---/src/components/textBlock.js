import React from 'react';
import textBlockStyles from './textBlock.module.scss';

export default ({ children }) => (
  <div className={textBlockStyles.textBlock}>
    {children}
  </div>
);
