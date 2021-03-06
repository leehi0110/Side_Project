import React from 'react';
import Styled from 'styled-components/native';

import ListComponent from '~/Components/ListComponent';

const Container = Styled.View`
  flex: 1;
  /* background-color: #EBF0F0; */
`;

const ShowList = () => {
  return (
    <Container>
      <ListComponent/>
    </Container>
  );
};

export default ShowList;