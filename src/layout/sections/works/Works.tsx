import React, { useState } from 'react';
import { S } from './Works_Styles';

import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { Container } from '../../../components/Container';

// const tabsItems = ['All', 'landing page', 'React', 'spa'];

const tabsItems: Array<{ title: string; status: TabsStatusType }> = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'spa',
    status: 'spa',
  },
];

const worksData = [
  {
    title: 'Social Network',
    source: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa',
  },
  {
    title: 'Timer',
    source: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'react',
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>('all');
  let filteredWorks = worksData;

  if (currentFilterStatus === 'landing') {
    filteredWorks = worksData.filter((work) => work.type === 'landing');
  }
  if (currentFilterStatus === 'react') {
    filteredWorks = worksData.filter((work) => work.type === 'react');
  }
  if (currentFilterStatus === 'spa') {
    filteredWorks = worksData.filter((work) => work.type === 'spa');
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={'works'}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          currentFilterStatus={currentFilterStatus}
          changeFilterStatus={changeFilterStatus}
          tabMenuItems={tabsItems}
        />
        <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
          {filteredWorks.map((w, index) => {
            return <Work key={index} title={w.title} text={w.text} source={w.source} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
