import React from 'react';

import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_Styles';

const SocialItemsData = [
  {
    iconId: 'inst',
  },
  {
    iconId: 'vk',
  },
  {
    iconId: 'telegram',
  },
  {
    iconId: 'linkedin',
  },
];

export const Footer = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.Name>Svetlana</S.Name>
        <S.SocialsList>
          {SocialItemsData.map((sid, index) => {
            return (
              <S.SocialsItem key={index}>
                <S.SocialIconLink href={`https://www.instagram.com/${sid.iconId}/`}>
                  <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={sid.iconId} />
                </S.SocialIconLink>
              </S.SocialsItem>
            );
          })}
        </S.SocialsList>
        <S.Copyright>© 2024 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
