import React from 'react';
import Styled from 'styled-components/native';

import ItemInfo from '~/Components/SetItems/ItemInfo';
import AddItem from '~/Components/SetItems/AddItem';

const Container = Styled.View`
  flex: 7;
  align-items: center;
`;

const SetItems = () => {
  return (
    <Container>
      <ItemInfo/>
      <ItemInfo/>
      <AddItem/>
    </Container>
  );
};

export default SetItems;