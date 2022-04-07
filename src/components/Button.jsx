import styled from 'styled-components';

export const Button = styled.button.attrs((props) => ({
  style: {
    margin: props.margin || '1rem 0',
  },
}))`
  padding: 10px;
  background: #ff9b4e;
  box-shadow: 0px 10px 30px rgba(255, 155, 78, 0.24);
  border-radius: 8px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  width: 260px;
  transition: 150ms;
  &:hover {
    background: #f38530;
  }
`;
