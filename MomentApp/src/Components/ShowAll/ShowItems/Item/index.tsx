import React from 'react';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';

const ItemContainer = Styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-bottom: 20px;

  background-color: white;
  border-radius: 20px;
  
  justify-content: center;
  align-items: center;

  box-shadow: 1px 5px 5px gray;
`;

const ItemText = Styled.Text`
  font-weight: bold;
`;

const Item = () => {
  return (
    <ItemContainer>
      <ItemText style={{fontSize: nomalize(15)}}>{'title'}</ItemText>
    </ItemContainer>
  );
};

export default Item;