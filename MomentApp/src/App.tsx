import React from 'react';
import Styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import Navigator from '~/Screens/Navigator';

const Container = Styled.View`
  flex: 1;
`

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content"/>
      <Navigator/>
    </Container>
  );
};

export default App;

