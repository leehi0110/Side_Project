import React from 'react';
import Styled from 'styled-components/native';

import DateComponent from '~/Components/MomentComponent/DateComponent';
import DayComponent from '~/Components/MomentComponent/DayComponent';
import TimeComponent from '~/Components/MomentComponent/TimeComponent';

const Container = Styled.View`
  width: 100%;
  height: 100px;
  
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SubContainer = Styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const MomentComponent = () => {
  return (
    <Container>
      <SubContainer>
        <DateComponent/>
        <DayComponent/>
      </SubContainer>
      <SubContainer>
        <TimeComponent/>
      </SubContainer>
    </Container>
  );
};

export default MomentComponent;