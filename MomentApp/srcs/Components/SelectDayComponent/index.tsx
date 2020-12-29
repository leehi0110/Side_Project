import React from 'react';
import Styled from 'styled-components/native';

import DayButtonComponent from '~/Components/SelectDayComponent/DayButtomComponent';

const Container = Styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const SelectDayComponent = () => {
  return (
    <Container>
      <DayButtonComponent
        items ={{
          dayIndex: 0,
          title: 'S',
        }}/>
      <DayButtonComponent
        items ={{
          dayIndex: 1,
          title: 'M',
        }}/>
      <DayButtonComponent
        items ={{
          dayIndex: 2,
          title: 'T',
        }}/>
      <DayButtonComponent
        items ={{
          dayIndex: 3,
          title: 'W',
        }}
      />
      <DayButtonComponent
        items ={{
          dayIndex: 4,
          title: 'T',
        }}/>
      <DayButtonComponent
        items ={{
          dayIndex: 5,
          title: 'F',
        }}/>
      <DayButtonComponent
        items ={{
          dayIndex: 6,
          title: 'S',
        }}/>
    </Container>
  );
};

export default SelectDayComponent;