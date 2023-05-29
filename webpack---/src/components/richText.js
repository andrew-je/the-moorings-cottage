import React from 'react';
import richTextStyles from './richText.module.scss';

export default ({ children }) => (
  <div className={richTextStyles.richText}>{children}</div>
);
