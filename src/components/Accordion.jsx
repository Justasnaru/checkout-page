import { Icon } from '@iconify/react';
import React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';

export const AccordionHeader = ({ children }) => {
  return (
    <div className='accordion__header'>
      <h1>{children}</h1>
      <Icon icon='bxs:down-arrow' />
    </div>
  );
};

function Accordion({ title, children }) {
  const [activeStatus, setActiveStatus] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const ref = useRef(null);

  function toggleAccordion(e) {
    setActiveStatus(activeStatus === '' ? 'active' : '');
    setHeightState(
      activeStatus === 'active' ? '0px' : `${ref.current.scrollHeight}px`
    );
    setRotateState(
      activeStatus === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    );
  }

  return (
    <Div>
      <AccordionButton className={`${activeStatus}`} onClick={toggleAccordion}>
        <AccordionTitle>{title}</AccordionTitle>
        <Icon icon='ep:arrow-down-bold' className={`${setRotate}`} />
      </AccordionButton>
      <AccordionBody ref={ref} style={{ maxHeight: `${setHeight}` }}>
        <AccordionContent className='accordion__content'>
          {children}
        </AccordionContent>
      </AccordionBody>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: $radius;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`;

const AccordionButton = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
  & .accordion__icon {
    transition: transform 0.2s ease;
  }

  & .accordion__icon.rotate {
    transform: rotate(180deg);
  }
`;

const AccordionTitle = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
`;

const AccordionBody = styled.div`
  overflow: auto;
  /* background: #fff; */
  transition: max-height 0.2s ease;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AccordionContent = styled.div`
  padding: 1rem;
`;

export default Accordion;
