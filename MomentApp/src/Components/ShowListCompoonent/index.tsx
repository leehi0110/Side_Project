import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import { FlatList } from 'react-native';
import moment from 'moment';

import {TodoListContext} from '~/Context/DataContext';
import TodoItemFlatComponent from '~/Components/ShowListCompoonent/TodoItemFlatComponent/TodoItemFlatComponent';


const Container = Styled.View`
  flex: 7;
  width: 100%;
`;

const ShowListComponent = () => {
  const {todoList,dayIndex} = useContext<ListContext>(TodoListContext);

  useEffect(() => {
  },[todoList[dayIndex].items]);

  return (
    <Container>
      <FlatList
        data={todoList[dayIndex].items}
        renderItem={TodoItemFlatComponent}
        keyExtractor={item => item.index}/>
    </Container>
  );
};

export default ShowListComponent;