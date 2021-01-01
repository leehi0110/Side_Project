import React, {useState, useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data';

import Item from '~/Components/ShowAll/ShowItems/Item';

const Container = Styled.View`
  flex: 6;
`;

const ShowItems = () => {
  const {selectedDay, getDayItems} = useContext<ITodoListContext>(TodoListContext);

  return (
    <Container>
      <FlatList
        renderItem={Item}
        data={getDayItems(selectedDay)}
        keyExtractor={item => item.index}/>
    </Container>
  );
};

export default ShowItems;