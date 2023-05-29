import React from 'react';
import containerStyles from './container.module.scss';

export default ({ children, className }) => (
  <div className={`${containerStyles.container} ${className}`}>{children}</div>
);
