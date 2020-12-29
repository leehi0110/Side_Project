import React from 'react';
import Styled from 'styled-components/native';

import Date from '~/Components/NowInfo/Calendar/Date';
import Day from '~/Components/NowInfo/Calendar/Day';

const Container = Styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: center;
`;

const Calendar = () => {
  return (
    <Container>
      <Date/>
      <Day/>
    </Container>
  );
};

export default Calendar;