import React from 'react';
import Accordion from './Accordion';
import { H2 } from './H2';
import styled from 'styled-components';

const FAQ = () => {
  return (
    <Div>
      <H2 style={{ textAlign: 'center' }}>Frequently Asked Questions</H2>
      <Accordion title={'What happens after I order?'}>
        After you place your order, we get to work! Based on the questions you
        answered in the quiz, we’ll craft your personal plan to your level with
        recomendations on how to improve.
      </Accordion>
      <Accordion title={'Where I can access my plan?'}>
        After you place your order, we get to work! Based on the questions you
        answered in the quiz, we’ll craft your personal plan to your level with
        recomendations on how to improve.
      </Accordion>
      <Accordion title={'How can I cancel my subscription?'}>
        After you place your order, we get to work! Based on the questions you
        answered in the quiz, we’ll craft your personal plan to your level with
        recomendations on how to improve.
      </Accordion>
      <Accordion title={'Why this program is paid?'}>
        After you place your order, we get to work! Based on the questions you
        answered in the quiz, we’ll craft your personal plan to your level with
        recomendations on how to improve.
      </Accordion>
    </Div>
  );
};

const Div = styled.div`
  max-width: 820px;
  padding: 1rem;
  margin: auto;
`;

export default FAQ;
