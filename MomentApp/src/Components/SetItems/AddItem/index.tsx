import React, {useState} from 'react';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';

import Info from '~/Components/SetItems/ItemInfo/Info';

const Container = Styled.TouchableOpacity`
  width: 100%;

  justify-content: center;
  align-items: center;
`;

const SubContainer = Styled.View`
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
  margin-bottom: 10px;
`;

const AddItem = () => {
  const [flag, setFlag] = useState<boolean>(false);

  const flagChange = () => {
    setFlag(!flag);
  }

  if(flag) {
    return (
      <Container onPress={() => {
        flagChange();
        
      }}>
        <ItemText style={{fontSize: nomalize(20)}}>{'Back'}</ItemText>
        <Info isAdd={true}/>
      </Container>
    );
  }
  else {
    return (
      <Container onPress={flagChange}>
        <SubContainer>
          <ItemText style={{fontSize: nomalize(30)}}>{'+'}</ItemText>
        </SubContainer>
      </Container>
    );
  }
};

export default AddItem;