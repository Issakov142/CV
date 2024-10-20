import React from 'react';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const Logo = () => {
  return (
    <button
      onClick={() => {
        scroll.scrollToTop();
      }}>
      <Icon iconId={'figma'} />
    </button>
  );
};
