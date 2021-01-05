import React,{useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data';
import ItemInfo from '~/Components/SetItems/ItemInfo';
import AddItem from '~/Components/SetItems/AddItem';

const Container = Styled.View`
  flex: 7;
  align-items: center;
`;

const SetItems = () => {
  const {items} = useContext<ITodoListContext>(TodoListContext);

  useEffect(()=>{
    console.log(items);
  },[]);

  return (
    <Container>
      <AddItem/>
      {/* <FlatList
        data={items}
        renderItem={ItemInfo}
        keyExtractor={item => item.index}/> */}
    </Container>
  );
};

export default SetItems;