import React from 'react';
import Styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const Container = Styled.View`
  flex: 1;
  background-color: red;
`;

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content"/>
    </Container>
  );
};

export default App;