import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

const Story = ({ info, address, img, children }) => {
  return (
    <Div>
      <div>
        <h3>{info}</h3>
        <Address>{address}</Address>
        <Rating>
          <Icon icon='clarity:star-solid' />
          <Icon icon='clarity:star-solid' />
          <Icon icon='clarity:star-solid' />
          <Icon icon='clarity:star-solid' />
          <Icon icon='clarity:star-solid' />
        </Rating>
      </div>
      <Img src={img} />
      <Bio>{children}</Bio>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  align-items: flex-start;
  box-shadow: 0px 16px 20px rgba(166, 166, 166, 0.21);
  border-radius: 10px;
  flex-flow: column;
  height: 42rem;
  @media (max-width: 1000px) {
    height: 28rem;
  }
`;

const Address = styled.p`
  color: #727278;
  font-size: 14px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  svg {
    color: #ffcc80;
    font-size: 1.2rem;
  }
`;

const Bio = styled.p`
  margin-top: 1rem;
  font-size: 14px;
  text-align: justify;
`;

const Img = styled.img`
  width: 11rem;
  margin-top: 1.5rem;
`;

export default Story;
