import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href="#">{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

const ListItem = styled.li``;
const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 10px;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 10px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
  }
`;
