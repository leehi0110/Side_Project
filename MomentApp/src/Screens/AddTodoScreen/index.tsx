import React from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent';
import SelectDayFlatComponent from '~/Components/SelectDayFlatComponent';
import TestComponent from '../../Components/TestComponent/index';

const Container = Styled.SafeAreaView`
  flex: 1;
`;


const AddTodoScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
      <SelectDayFlatComponent/>
      <TestComponent/>
    </Container>
  );
};

export default AddTodoScreen;