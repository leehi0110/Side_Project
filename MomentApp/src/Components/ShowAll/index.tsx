import React from 'react';
import Styled from 'styled-components/native';

import SelectDay from '~/Components/ShowAll/SelectDay';
import ShowItems from '~/Components/ShowAll/ShowItems';

const Container = Styled.View`
  flex: 8;
`;

const ShowAll = () => {
  return (
    <Container>
      <SelectDay/>
      <ShowItems/>
    </Container>
  );
};

export default ShowAll;