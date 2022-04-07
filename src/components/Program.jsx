import React from 'react';
import styled from 'styled-components';

const Program = ({ icon, title, children }) => {
  return (
    <Div>
      <img style={{ marginRight: '20px' }} src={icon} alt='' />
      <TextDiv>
        <BoldText>{title}</BoldText>
        <DimText>{children}</DimText>
      </TextDiv>
    </Div>
  );
};

const TextDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

const BoldText = styled.p`
  width: 305px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #22222c;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const DimText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #22222c;
  opacity: 0.64;
  text-align: left;
`;

export default Program;
