import React from 'react';
import photo from '../../../assets/images/photo1.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Issakov Oleg</span>
            </S.Name>
            {/* <S.MainTitle>A Web Developer.</S.MainTitle> */}
            <S.MainTitle>
              <span className="dop">A Web Developer</span>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer.', 'A Fullstack.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="image of developer" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
