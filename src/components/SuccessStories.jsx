import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Story from './Story';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import DP1 from '../assets/img/story/dp1.png';
import DP2 from '../assets/img/story/dp2.png';
import DP3 from '../assets/img/story/dp3.png';

const SuccessStories = () => {
  const [viewPort, setViewPort] = useState();
  useEffect(() => {
    setViewPort(window.innerWidth);
  }, []);

  return (
    <Section>
      <Swiper
        slidesPerView={viewPort <= 1000 ? 1 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <Story info={'Emily, 28'} img={DP1} address='Delaware, NJ'>
            I have been using this program for 3 months now and It helped me to
            lose 16lbs, taught me how to breathe properly and now I look forward
            to my workout. Great challenges for different problem zones.
            Definitely recommend to anyone that wants to lose weight and feel
            better without long hour at the gym or exhausting workouts.
          </Story>
        </SwiperSlide>
        <SwiperSlide>
          <Story info={'Kylie, 40'} img={DP2} address='Los Angeles'>
            I have been using this program for 3 months now and It helped me to
            lose 16lbs, taught me how to breathe properly and now I look forward
            to my workout. Great challenges for different problem zones.
            Definitely recommend to anyone that wants to lose weight and feel
            better without long hour at the gym or exhausting workouts.
          </Story>
        </SwiperSlide>
        <SwiperSlide>
          <Story info={'Jesica, 51'} img={DP3} address='San Francisco, CA'>
            I have many friends who practice yoga and I decided to try it
            myself. It is the best decision I have made in a long time. With
            <b> Positive Yoga</b> program I started to lose weight, which was
            demotivating me for a long time. Also, I've learned about yoga
            philosophy and poses that encourage me to practice mindfulness and
            pay attention to stress reduction. I am very proud of myself.
            Feeling better is my biggest motivation.
          </Story>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

const Section = styled.section`
  max-width: 1000px;
  padding: 20px;
  margin: 2rem auto;
`;

export default SuccessStories;
