import React from 'react';
import Logo from '../assets/img/Logo.png';
import styled from 'styled-components';

const Header = () => {
  return (
    <BoxShadow>
      <img src={Logo} alt='' />
    </BoxShadow>
  );
};

const BoxShadow = styled.div`
  box-shadow: 0px 15px 24px #9c9c9c1f;
  display: grid;
  padding: 10px;
  place-content: center;
`;

export default Header;
