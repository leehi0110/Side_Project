import React from 'react';
import Styled from 'styled-components/native';

import NameInputComponent from './NameInputComponent/index';

const Container = Styled.View`
  flex: 7;
  /* justify-content: space-around; */
`;

const RegisterItemComponent = () => {
  return (
    <Container>
      <NameInputComponent/>
    </Container>
  );
};

export default RegisterItemComponent;