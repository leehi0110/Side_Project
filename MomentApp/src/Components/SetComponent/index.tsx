import React from 'react';
import Styled from 'styled-components/native';

import AddComponent from '~/Components/SetComponent/AddComponent';
import DeleteComponent from '~/Components/SetComponent/DeleteComponent';

const Container = Styled.View`
  flex: 1;
`;

const SetComponent = () => {
  return (
    <Container>
      <AddComponent/>
      <DeleteComponent/>
    </Container>
  );
};

export default SetComponent;