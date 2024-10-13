import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  return (
    <>
      {showBtn && (
        <StyledGoTopButton
          onClick={() => {
            scroll.scrollToTop();
          }}>
          <Icon width={'16'} height={'15'} viewBox={'0 0 16 15'} iconId={'arrowGoTop'} />
        </StyledGoTopButton>
      )}
    </>
  );
};

const StyledGoTopButton = styled.button`
  position: fixed;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 30px;
  right: 30px;
`;
