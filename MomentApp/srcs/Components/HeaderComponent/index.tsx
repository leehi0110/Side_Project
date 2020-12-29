import React from 'react';
import Styled from 'styled-components/native';

import TitleComponent from '~/Components/HeaderComponent/TitleComponent';
import DateComponent from '~/Components/HeaderComponent/DateComponent';
import TimeComponent from '~/Components/HeaderComponent/TimeComponent';

const Container = Styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
`;

const MomentContainer = Styled.View`
  flex: 1;
  width: 95%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderComponent = () => {
  return (
    <Container>
      <TitleComponent/>
      <MomentContainer>
        <DateComponent/>
        <TimeComponent/>
      </MomentContainer>
    </Container>
  );
};

export default HeaderComponent;
