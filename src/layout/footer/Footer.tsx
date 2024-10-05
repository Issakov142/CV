import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Svetlana</Name>
        <SocialsList>
          <SocialsItem>
            <SocialIconLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'inst'} />
            </SocialIconLink>
          </SocialsItem>
          <SocialsItem>
            <SocialIconLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'} />
            </SocialIconLink>
          </SocialsItem>
          <SocialsItem>
            <SocialIconLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'} />
            </SocialIconLink>
          </SocialsItem>
          <SocialsItem>
            <SocialIconLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'} />
            </SocialIconLink>
          </SocialsItem>
        </SocialsList>
        <Copyright>© 2024 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.14em;
`;
const SocialsList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;
const SocialsItem = styled.li``;
const SocialIconLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accent};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};

    transform: translateY(-4px);
  }
`;
const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;

  opacity: 0.5;
`;
