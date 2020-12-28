import React, {useContext, useEffect} from 'react';
import { TodoListContext } from '~/Context/DataContext';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent'
import SelectDayComponent from '~/Components/SelectDayComponent';
import ShowListComponent from '~/Components/ShowListCompoonent';
import EmptyComponent from '~/Components/EmptyComponent';
import TodoItemFlatComponent from '~/Components/ShowListCompoonent/TodoItemFlatComponent/';

const Container = Styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const ContentContainer = Styled.View`
  flex: 7;
  width: 100%;
  background-color: gray;
`;

const ItemContainer = Styled(FlatList)`
  flex: 7;
  background-color: red;
`;

const TodoListScreen = () => {
  const {todoList,dayIndex} = useContext<ListContext>(TodoListContext);

  useEffect(() => {
  },[todoList]);

  return (
    <Container>
      <HeaderComponent/>
      <SelectDayComponent/>
      <ShowListComponent/>
      {/* <ItemContainer
        data={todoList[dayIndex].items}
        keyExtractor={Item => dayIndex.toString()}
        ListEmptyComponent={<EmptyComponent/>}
        renderItem={}
      /> */}
    </Container>
  );
};

export default TodoListScreen;