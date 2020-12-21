import React from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const AddTodoScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
    </Container>
  );
};

export default AddTodoScreen;