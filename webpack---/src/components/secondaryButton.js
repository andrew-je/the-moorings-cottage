import React from 'react';
import secondaryButtonStyles from './secondaryButton.module.scss';

export default ({ children, className }) => (
  <div className={`${secondaryButtonStyles.secondaryButton} ${className}`}>{children}</div>
);
