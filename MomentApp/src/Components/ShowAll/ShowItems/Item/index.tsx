import React from 'react';
import Styled from 'styled-components/native';

const ItemContainer = Styled.TouchableOpacity`
`;

const ItemText = Styled.Text`
`;

const Item = () => {
  return (
    <ItemContainer>
      <ItemText>{}</ItemText>
    </ItemContainer>
  );
};

export default Item;