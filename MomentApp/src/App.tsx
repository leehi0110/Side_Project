import React from 'react';
import Styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import {Navigator} from '~/Screens/Navigator';

const Container = Styled.View`
  flex: 1;
  background-color: red;
`;

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content"/>
      <Navigator/>
    </Container>
  );
};

export default App;