import React from 'react';
import Styled from 'styled-components/native';
import {getDate, nomalize} from '~/Functions';

const Container = Styled.View`
  justify-content: center;
  margin-right: 10px;
`;

const DateTitle = Styled.Text`
  font-weight: bold;
`;

const Date = () => {
  return (
    <Container>
      <DateTitle style={{fontSize: nomalize(15)}}>
        {getDate()}
      </DateTitle>
    </Container>
  );
};

export default Date;