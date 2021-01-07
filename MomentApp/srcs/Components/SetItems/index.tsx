import React,{useState,useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';

import {NewItemContext} from '~/Context/Data/@types';
import { TodoListContext } from '~/Context/Data/@types';

import Info from '~/Components/SetItems/Info';
import AddItem from '~/Components/SetItems/AddItem';

const Container = Styled.View`
  flex: 7;
  width: 100%;
`;

const ListContainer = Styled.TouchableOpacity`
  
  width: 80%;
  height: 50px;
  margin-top: 20px;

  background-color: white;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
  align-self: center;

  box-shadow: 1px 5px 5px gray;
`;

const ItemText = Styled.Text`
  font-weight: bold;
`;


const SetItems = () => {
  const {items, selectIndex, setSelectIndex} = useContext<ITodoListContext>(TodoListContext);
  const {initNewItem} = useContext<INewItemContext>(NewItemContext);

  const isSelect = (input: string) => {
    if(selectIndex.toString() === input) {
      setSelectIndex(-1);
    }
    else setSelectIndex(parseInt(input));
  }

  return (
    <Container>
      <AddItem/>
      <FlatList
        data={items}
        renderItem={({item}) => {
          if(item.index === selectIndex.toString()) {
            return (
              <>
              <ListContainer onPress={() => {
                isSelect(item.index);
                initNewItem();
              }}>
                <ItemText style={{fontSize: nomalize(15)}}>{item.title}</ItemText>
              </ListContainer>
              <Info isAdd={false} data={item}/>
              </>
            );
          }
          else {
            return (
              <ListContainer onPress={() => {
                isSelect(item.index);
                initNewItem();
              }}>
                <ItemText style={{fontSize: nomalize(15)}}>{item.title}</ItemText>
              </ListContainer>
            );
          };
        }
      }
      keyExtractor={item => item.index.toString()}
      />
    </Container>
  );
};

export default SetItems;