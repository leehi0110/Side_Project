import React from 'react';
import Styled from 'styled-components/native';
import * as func from '~/Functions/index';

const Container = Styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleText = Styled.Text`
  font-weight: bold;
`;

const Title = () => {
  return (
    <Container>
      <TitleText style={{fontSize: func.nomalize(30), color: "#916ED6"}}>{'Moment'}</TitleText>
    </Container>
  );
};

export default Title;