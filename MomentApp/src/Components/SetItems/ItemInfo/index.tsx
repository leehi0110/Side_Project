import React, {useState, useContext} from 'react';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';

import Info from '~/Components/SetItems/ItemInfo/Info';

const Container = Styled.TouchableOpacity`
  
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

interface Props {
  item: ITodoItemContext;
};

const ItemInfo = ({item}: Props) => {
  const [isSelect, setSelect] = useState<boolean>(false);

  const Select = () => {
    setSelect(!isSelect);
  }

  if(isSelect){
    return (
      <>
      <Container onPress={Select}>
        <ItemText style={{fontSize: nomalize(15)}}>{item.title}</ItemText>
      </Container>
      <Info isAdd={false}/>
      </>
    );
  }
  else {
    return (
      <Container onPress={Select}>
        <ItemText style={{fontSize: nomalize(15)}}>{item.title}</ItemText>
      </Container>
    );
  }
  
};

export default ItemInfo;