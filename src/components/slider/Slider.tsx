import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from './Slider_Styles';
import '../../styles/slider.css';

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    userName={'ivan ivanow'}
    text={
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  />,
  <Slide
    userName={'john doe'}
    text={
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  />,
  <Slide
    userName={'peatisfilum saflora'}
    text={
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  />,
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      infinite
      mouseTracking
      disableButtonsControls
      items={items}
    />
  </S.Slider>
);

// import React from 'react';
// import styled from 'styled-components';
// import { FlexWrapper } from '../FlexWrapper';
// import { theme } from '../../styles/Theme';

// export const Slider = () => {
//   return (
//     <StyledSlider>
//       <FlexWrapper>
// <Slide>
//   <Text>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
//     incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet,
//     consectetur adipisicing elit.
//   </Text>
//   <Name>@ivan ivanow</Name>
// </Slide>
//       </FlexWrapper>
//       <Pagination>
//         <span></span>
//         <span className={'active'}></span>
//         <span></span>
//       </Pagination>
//     </StyledSlider>
//   );
// };
