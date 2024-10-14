import React from 'react';
import { S } from './Skills_Styles';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { Fade } from 'react-awesome-reveal';

const skillData = [
  {
    iconId: 'code',
    title: 'HTML5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'css',
    title: 'css3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'react',
    title: 'React',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'styledComponents',
    title: 'styled components',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'figma',
    title: 'WEB DESIgN',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'typescript',
    title: 'typeScript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
];

export const Skills = () => {
  return (
    <S.Skills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>

        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
          <Fade cascade={true} damping={0.25}>
            {skillData.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  iconId={skill.iconId}
                  title={skill.title}
                  description={skill.description}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
