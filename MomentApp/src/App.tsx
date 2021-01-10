import React from 'react';
import Styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import { TodoListContextProvider } from '~/Context/Data';

import Navigator from '~/Screens/Navigator';
import MomentComponent from '~/Components/MomentComponent';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const App = () => {

  return (
    <TodoListContextProvider>
      <Container>
        <StatusBar barStyle="light-content"/>
        <MomentComponent/>
        <Navigator/>
      </Container>
    </TodoListContextProvider>
  );
};

export default App;