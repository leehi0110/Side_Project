import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;
`;

const TitleText = Styled.Text`
  font-size: 30px;
  font-weight: bold;
`;


const TitleComponent = () => {
  return (
    <Container>
      <TitleText>{'At Moments'}</TitleText>
    </Container>
  );
};

export default TitleComponent