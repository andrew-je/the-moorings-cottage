import React from 'react';
import sectionStyles from './section.module.scss';

export default ({ children, className }) => (
  <div className={`${sectionStyles.section} ${className}`}>{children}</div>
);
