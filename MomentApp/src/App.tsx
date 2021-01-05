import React from 'react';
import Styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import Navigator from '~/Screens/Navigator';
import {TodoListContextProvider, NewItemContextProvider } from '~/Context/Data';



const Container = Styled.View`
  flex: 1;
`

const App = () => {
  return (
    <TodoListContextProvider>
      <NewItemContextProvider>
      <Container>
        <StatusBar barStyle="light-content"/>
        <Navigator/>
      </Container>
      </NewItemContextProvider>
    </TodoListContextProvider>
  );
};

export default App;

