import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import { FlatList } from 'react-native';
import moment from 'moment';

import {TodoListContext} from '~/Context/DataContext';
import TodoItemFlatComponent from '~/Components/TodoItemFlatComponent/TodoItemFlatComponent';


const Container = Styled.View`
  flex: 7;
  width: 100%;
`;

const ShowListComponent = () => {
  const {todoList} = useContext<ListContext>(TodoListContext);

  useEffect(() => {
    console.log('refresh');
  },[todoList[moment().day()].items]);

  return (
    <Container>
      <FlatList
        data={todoList[moment().day()].items}
        renderItem={TodoItemFlatComponent}
        keyExtractor={item => item.index}/>
    </Container>
  );
};

export default ShowListComponent;