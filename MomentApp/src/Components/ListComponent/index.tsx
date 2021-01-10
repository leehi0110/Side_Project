import React, {useContext,useState,useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/Data';
import EmptyComponent from '~/Components/ListComponent/EmptyComponent';

const Container = Styled.View`
  flex: 1;
  background-color: white;
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

  flex-direction: row;

  border-radius: 40px;
  border: 3px solid #C8DBE6;

  align-items: center;
  justify-content: space-around;
`;

const ItemTitle = Styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

const ListComponent = () => {
  const {items, doneItem} = useContext<ITodoList>(TodoListContext);
  const [isSelect,setIsSelect] = useState<boolean>(false);

  useEffect(() => {
  },[items])

  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={item => item.itemIndex}
        extraData={isSelect}
        ListEmptyComponent={EmptyComponent}
        renderItem={({item}) => {
          return (
            <ItemContainer>
              <ItemButton onPress={() => {
                doneItem(item.itemIndex);
                setIsSelect(!isSelect);
              }}
                style={{ backgroundColor: item.itemStatus ? item.itemColor : "white" }}>
                <ItemTitle style={{color: item.itemStatus ? "white" : "black"}}>
                  {item.itemTitle}
                </ItemTitle>
                <ItemTitle style={{color: item.itemStatus ? "white" : "black"}}>
                  {`+ ${item.itemContinuity}`}
                </ItemTitle>
              </ItemButton>
            </ItemContainer>
          );
        }}/>
    </Container>
  );
};

export default ListComponent;
