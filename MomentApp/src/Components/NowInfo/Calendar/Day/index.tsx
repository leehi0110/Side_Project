import React from 'react';
import Styled from 'styled-components/native';
import {getDay, nomalize} from '~/Functions';

const Container = Styled.View`
  justify-content: center;
`;

const DayTitle = Styled.Text`
  font-weight: bold;
`;

const Day = () => {
  return (
    <Container>
      <DayTitle style={{fontSize: nomalize(15)}}>
        {getDay()}
      </DayTitle>
    </Container>
  );
};

export default Day;