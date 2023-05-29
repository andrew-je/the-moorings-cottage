import React from 'react';
import primaryButtonStyles from './primaryButton.module.scss';

export default ({ children }) => (
  <div className={primaryButtonStyles.primaryButton}>{children}</div>
);
