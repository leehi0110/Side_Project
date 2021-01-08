import React from 'react';
import Styled from 'styled-components/native';

import SetComponent from '~/Components/SetComponent';

const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

const SetList = () => {
  return (
    <Container>
      <SetComponent/>
    </Container>
  );
};

export default SetList;