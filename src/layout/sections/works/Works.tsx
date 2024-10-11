import React from 'react';
import { S } from './Works_Styles';

import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { Container } from '../../../components/Container';

const worksItems = ['All', 'landing page', 'React', 'spa'];

const worksData = [
  {
    title: 'Social Network',
    source: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'Timer',
    source: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
          {worksData.map((w, index) => {
            return <Work key={index} title={w.title} text={w.text} source={w.source} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
