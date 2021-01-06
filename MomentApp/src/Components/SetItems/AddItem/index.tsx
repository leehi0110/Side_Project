import React, {useState, useContext} from 'react';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';
import { TodoListContext } from '~/Context/Data';
import { NewItemContext} from '~/Context/Data';

import Info from '~/Components/SetItems/Info';

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
  const {setSelectIndex} = useContext<ITodoListContext>(TodoListContext);
  const {initNewItem} = useContext<INewItemContext>(NewItemContext);

  const flagChange = () => {
    setFlag(!flag);
  }

  if(flag) {
    return (
      <Container onPress={() => {
        flagChange();
        initNewItem();
      }}>
        <ItemText style={{fontSize: nomalize(20)}}>{'Back'}</ItemText>
        <Info isAdd={true}/>
      </Container>
    );
  }
  else {
    return (
      <Container onPress={() => {
        flagChange();
        setSelectIndex(-1);
        initNewItem();
      }}>
        <SubContainer>
          <ItemText style={{fontSize: nomalize(30)}}>{'+'}</ItemText>
        </SubContainer>
      </Container>
    );
  }
};

export default AddItem;