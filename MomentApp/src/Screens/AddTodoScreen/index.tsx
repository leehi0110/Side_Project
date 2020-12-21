import React from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const ContextContainer = Styled.View`
  flex: 8;
`;

const AddTodoScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
      <ContextContainer></ContextContainer>
    </Container>
  );
};

export default AddTodoScreen;