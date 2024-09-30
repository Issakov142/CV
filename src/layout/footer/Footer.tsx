import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

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
  background-color: #3683d5;
  min-height: 20vh;
`;

const Name = styled.span``;
const SocialsList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialsItem = styled.li``;
const SocialIconLink = styled.a``;
const Copyright = styled.small``;
