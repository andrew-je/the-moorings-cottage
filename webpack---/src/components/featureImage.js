import React from 'react';
import featureImageStyles from './featureImage.module.scss';

export default ({ children }) => (
  <div className={featureImageStyles.featureImage}>{children}</div>
);
