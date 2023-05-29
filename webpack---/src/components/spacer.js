import React from 'react';
import spacerStyles from './spacer.module.scss';

export default ({ children }) => (
  <>
    <div className={spacerStyles.spacer}>{children}</div>
  </>
);
