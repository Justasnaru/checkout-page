import React from 'react';
import { H2 } from './H2';
import styled from 'styled-components';
import StartJourneyImg from '../assets/img/start_journey.png';
import { Icon } from '@iconify/react';

const List = ({ children }) => {
  return (
    <ListDiv>
      <Icon icon='akar-icons:circle-check' />
      <ListP>{children}</ListP>
    </ListDiv>
  );
};

const StartJourney = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <H2>Start your yoga journey now!</H2>
          <Img src={StartJourneyImg} />
        </div>
        <div>
          <H2>Is Positive Yoga right for me?</H2>
          <List>Each program adapts to your age or fitness level</List>
          <List>Mindful way to exercise and get real results</List>
          <List>Effective and long-term lasting results</List>
          <List>Suited activities that benefit both the mind and body</List>
          <List>Low-intensity but highly-effective workouts</List>
          <List>Extra attention to muscle, joint and back health</List>
        </div>
      </Wrapper>
    </section>
  );
};

const Img = styled.img`
  width: 25rem;
  transform: translateX(-22px);
  @media (max-width: 400px) {
    width: 100vw;
    padding: 1rem;
    transform: translateX(0px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 830px;
  overflow: hidden;
  & > div:nth-child(1) {
    ${H2} {
      padding: 0 1rem;
    }
  }
  & > div {
    padding: 0 1rem;
  }
  @media (max-width: 805px) {
    width: 100vw;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    div {
      margin: 1rem 0;
    }
  }
`;

const ListP = styled.p`
  display: flex;
`;

const ListDiv = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;

  svg {
    color: #91b83d;
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

export default StartJourney;
