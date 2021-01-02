import React, {useState, useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data';

import Item from '~/Components/ShowAll/ShowItems/Item';
import Empty from '~/Components/ShowAll/ShowItems/Empty';

const Container = Styled.View`
  flex: 6;
  align-items: center;
`;

const ShowItems = () => {
  const [testData, setTestData] = useState<Array<ITodoItemContext>>([]);
  const {selectedDay, items} = useContext<ITodoListContext>(TodoListContext);

  const getDayItems = () => {
    let list: Array<ITodoItemContext> = [];

    for(var item of items) {
      if(item.day[selectedDay]) list.push(item);
    }

    setTestData(list);
  }

  useEffect(() => {
    getDayItems();
  },[]);

  return (
    <Container>
      {/* <Empty/> */}
      <Item/>
      <Item/>
      {/* <FlatList
        renderItem={Item}
        data={testData}
        keyExtractor={item => item.index}/> */}
    </Container>
  );
};

export default ShowItems;