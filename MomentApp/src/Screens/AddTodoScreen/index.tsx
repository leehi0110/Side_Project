import React from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent';
import SelectDayComponent from '~/Components/SelectDayComponent';
import RegisterItemComponent from '~/Components/RegisterItemComponent';

const Container = Styled.SafeAreaView`
  flex: 1;
`;


const AddTodoScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
      <SelectDayComponent/>
      <RegisterItemComponent/>
    </Container>
  );
};

export default AddTodoScreen;