import React from 'react';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';

const Container = Styled.TouchableOpacity`

  width: 80%;
  height: 50px;
  background-color: white;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  box-shadow: 1px 5px 5px gray;
`;

const ItemText = Styled.Text`
  font-weight: bold;
  opacity: 0.3;
`;

const AddItem = () => {
  return (
    <Container>
      <ItemText style={{fontSize: nomalize(30)}}>{'+'}</ItemText>
    </Container>
  );
};

export default AddItem;