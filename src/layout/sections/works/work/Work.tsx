import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
  title: string;
  text: string;
  source: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.source} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="#">demo</Link>
      <Link href="#">Code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #b2d117;
  max-width: 540px;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a``;
