import React, {useState,useContext,useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data';
import UpdateInfoComponent from '~/Components//SetComponent/DeleteComponent/UpdateInfoComponent';


const Container = Styled.View`
  width: 100%;
  flex: 1;
`;

const ItemContainer = Styled.View`
  width: 100%;
  height: 80px;

  align-items: center;
  justify-content: center;
`;

const ItemButton = Styled.TouchableOpacity`
  width: 80%;
  height: 80%;

  border-radius: 40px;
  border: 2px solid #C8DBE6;

  align-items: center;
  justify-content: center;
`;

const ItemTitleText = Styled.Text`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const UpdateContainer = Styled.View`
  width: 100%;
`;

const DeleteComponent = () => {
  const {items, selectItemIndex, selectItemIndexSet} = useContext<ITodoList>(TodoListContext);

  const handlerCallBack = () => {
    selectItemIndexSet(-2);
  }

  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={item => item.itemIndex}
        renderItem={({item}) => {
          if(selectItemIndex !== parseInt(item.itemIndex)) {
            return (
              <ItemContainer>
                <ItemButton onPress={() => {
                  selectItemIndexSet(parseInt(item.itemIndex));
                  }}>
                  <ItemTitleText>{item.itemTitle}</ItemTitleText>
                </ItemButton>
              </ItemContainer>
            );
          } else {
            return (
              <UpdateContainer>
                <UpdateInfoComponent
                  itemInfo={item}
                  parentCallBack={handlerCallBack}/>
              </UpdateContainer>
            );
          }       
        }}/>
    </Container>
  );
};

export default DeleteComponent;