import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

const Discount = () => {
  return (
    <Div>
      <Icon icon='bi:tag-fill' /> 50% discount only valid for 00:15:49
    </Div>
  );
};

const Div = styled.div`
  height: 35px;
  background: #90caf9;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

export default Discount;
