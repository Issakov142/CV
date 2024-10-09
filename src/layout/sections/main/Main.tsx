import React from 'react';
import photo from '../../../assets/images/photo.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Svetlana Dyablo</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #16538f;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: -24px;
    left: 24px;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  margin: 10px 0;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;
const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
