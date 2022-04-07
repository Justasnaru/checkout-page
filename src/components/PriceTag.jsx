import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";

const PriceTag = ({
  plan,
  save,
  bill = [0, 0],
  price,
  billTime,
  onChange,
  value,
  input,
}) => {
  return (
    <>
      <Input
        name="arif"
        onChange={onChange}
        type="radio"
        value={value}
        id={`${value}`}
        // eslint-disable-next-line
        checked={value == input}
      />
      <Label htmlFor={`${value}`}>
        <Header>
          <h4>{plan} month plan</h4>
          {save && <h4>Save {save}%</h4>}
        </Header>
        <Tag>
          <Price>
            <h1>${price}</h1>
            <p> / month</p>
          </Price>
          <CheckBox>
            <Icon icon="bi:check" />
          </CheckBox>
        </Tag>
        <Discount>
          {bill[0] ? (
            <>
              <del>${bill[0]}</del>
              <Bill>
                <span>${bill[1]}</span> billed every {billTime} months
              </Bill>
            </>
          ) : (
            <span>Billed monthly</span>
          )}
        </Discount>
      </Label>
    </>
  );
};

const CheckBox = styled.div`
  border-radius: 50%;
  background: #ebebeb;
  display: grid;
  place-content: center;
  width: 25px;
  height: 25px;
  svg {
    font-size: 1.5rem;
    color: #ebebeb;
  }
`;

const Label = styled.label`
  width: 100%;
  border-radius: 16px;
  padding: 10px;
  border: 2px solid #ebebeb;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column;
`;

const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    border-color: #ff9b4e;
    ${CheckBox} {
      background: #ff9b4e;
      & svg {
        color: #fff;
      }
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 10px;
  h1 {
    line-height: 1;
    margin-right: 4px;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Discount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 10px;
  font-size: 14px;
  h1 {
    line-height: 1;
    margin-right: 4px;
  }
`;

const Bill = styled.p`
  margin-left: 10px;
  span {
    color: #ff9b4e;
    font-weight: bold;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h4 {
    margin-right: 1rem;
    &:nth-child(2) {
      background: #ffe082;
      padding: 2px 10px;
      font-size: 15px;
      border-radius: 6px;
    }
  }
`;

export default PriceTag;
