import React from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent/';
import SelectDayFlatComponent from '~/Components/SelectDayFlatComponent';
import ShowListComponent from '~/Components/ShowListCompoonent';

const Container = Styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const ContentContainer = Styled.View`
  flex: 7;
  width: 100%;
  background-color: gray;
`;

const TodoListScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
      <SelectDayFlatComponent/>
      <ShowListComponent/>
    </Container>
  );
};

export default TodoListScreen;