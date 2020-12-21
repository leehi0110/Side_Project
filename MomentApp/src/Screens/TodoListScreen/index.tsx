import React from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent/';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const TodoListScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
    </Container>
  );
};

export default TodoListScreen;