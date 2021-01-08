import React from 'react';
import Styled from 'styled-components/native';

import AddComponent from '~/Components/SetComponent/AddComponent';

const Container = Styled.View`
  flex: 1;
`;

const SetComponent = () => {
  return (
    <Container>
      <AddComponent></AddComponent>
    </Container>
  );
};

export default SetComponent;