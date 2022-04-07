import Discount from '../components/Discount';
import FAQ from '../components/FAQ';
import GetPlan from '../components/GetPlan';
import Header from '../components/Header';
import StartJourney from '../components/StartJourney';
import SuccessStories from '../components/SuccessStories';
import { Button } from '../components/Button';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Discount />
      <Header />
      <GetPlan />
      <StartJourney />
      <SuccessStories />
      <Div>
        <Button>Get my plan</Button>
      </Div>
      <FAQ />
    </div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
