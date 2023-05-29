import React from 'react';
import reviewHolderStyles from './reviewHolder.module.scss';

export default ({ children }) => (
  <div className={reviewHolderStyles.reviewHolder}>{children}</div>
);
