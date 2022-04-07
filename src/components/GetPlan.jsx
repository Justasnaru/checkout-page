import React, { useState } from 'react';
import styled from 'styled-components';
import Program from './Program';
import Plan from '../assets/img/program/plan.png';
import Exercise from '../assets/img/program/exercise.png';
import Shoe from '../assets/img/program/shoe.png';
import Diet from '../assets/img/program/diet.png';
import Smartwatch from '../assets/img/program/smartwatch.png';
import Whistle from '../assets/img/program/whistle.png';
import Bookcheck from '../assets/img/program/bookcheck.png';
import CheckOut from '../assets/img/safe_checkout_banner.png';
import { Button } from './Button';
import { H2 } from './H2';
import PriceTag from './PriceTag';

const ProgramData = [
  {
    title: 'A personalized yoga program',
    desc: 'Completely safe and focused on your key goals',
    icon: Plan,
  },
  {
    title: 'Easy & enjoyable yoga workouts for your level',
    desc: 'Program adjusts to your level and pace',
    icon: Exercise,
  },
  {
    title: 'No special preparation needed',
    desc: 'Perfect for begginners! Requires no special preparation or equipment',
    icon: Shoe,
  },
  {
    title: 'Daily motivation & accountability',
    desc: 'Track your progress, develop a healthy routine, reach goals fasters',
    icon: Diet,
  },
  {
    title: 'Browse from various yoga challenges',
    desc: '30 d morning yoga, mindful yoga, back flexibility challenge, and',
    icon: Whistle,
  },
  {
    title: 'Easy access on any device',
    desc: 'Do your yoga anywhere across all types of devices',
    icon: Smartwatch,
  },
  {
    title: 'A complete guide to get started',
    desc: 'Best tips, guidelines, advice, and recommendations for successful practice',
    icon: Bookcheck,
  },
];

const PriceData = [
  {
    plan: 6,
    price: 9.99,
    bill: [119.94, 59.94],
    billTime: 6,
    checked: true,
    save: 50,
  },
  {
    plan: 3,
    price: 14.99,
    bill: [59.97, 44.47],
    billTime: 3,
  },
  {
    plan: 1,
    price: 19.99,
  },
];

const GetPlan = () => {
  const [input, setInput] = useState(14.99);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Section>
      <P>
        Over <b>52 147</b> plans ordered.
      </P>
      <H1>Get access to your yoga program now!</H1>
      <Wrapper>
        <div>
          <H2>
            Choose your plan and get{' '}
            <Span color='#FF9B4E'>7 days free trial</Span>
          </H2>

          {PriceData.map((value, i) => {
            return (
              <PriceTag
                input={input}
                value={value.price}
                key={i}
                onChange={handleChange}
                plan={value.plan}
                price={value.price}
                bill={value.bill}
                billTime={value.billTime}
                checked={value.checked}
                save={value.save}
              />
            );
          })}
          <Button style={{ width: '100%' }}>Get your plan</Button>
          <P>
            Your free trial will automatically become a paid subscription on the
            8th day after you begin your trial. To cancel your subscription,
            please contact us at least 24 hours before the end of the trial
            period.
          </P>
          <CheckOutImg src={CheckOut} alt='' />
        </div>

        <div>
          <H2>What's in my program?</H2>
          {ProgramData.map(({ icon, desc, title }, i) => {
            return (
              <Program key={i} icon={icon} title={title}>
                {desc}
              </Program>
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  @media screen {
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 760px;
  justify-content: space-between;
  margin: 1rem auto;
  & > div {
    width: 320px;
  }
  @media (max-width: 805px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    & > div {
      width: 100%;
      padding: 1rem;
      margin: 1rem 0;
    }
  }
`;

const CheckOutImg = styled.img`
  width: 100%;
`;

const P = styled.p`
  text-align: center;
  font-size: 13px;
  margin-bottom: 1rem;
`;

const Span = styled.span`
  color: #ff9b4e;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 56px;
  text-align: center;
  width: 100vw;
  color: #22222c;
`;

export default GetPlan;
