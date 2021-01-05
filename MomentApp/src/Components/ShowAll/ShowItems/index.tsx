import React, {useState, useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data';
import {nomalize} from '~/Functions';

import Empty from '~/Components/ShowAll/ShowItems/Empty';

const Container = Styled.View`
  flex: 6;
`;

const ItemContainer = Styled.TouchableOpacity`
  width: 80%;;
  height: 50px;
  margin-bottom: 20px;


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

const ShowItems = () => {
  const [todayItems, setTodayItems] = useState<Array<ITodoItemContext>>([]);
  const [touchColor, setTouchColor] = useState<string>('white');
  const {selectedDay, items} = useContext<ITodoListContext>(TodoListContext);

  const getDayItems = () => {
    var list: Array<ITodoItemContext> = [];
  
    for(var item of items) {
      if(item.day[selectedDay]) {
        list.push(item);
      }
    }
    
    console.log(list.length);
    setTodayItems(list);
  }; // 선택된 날의 할일을 가져오는 함수

  const setColor = (item: ITodoItemContext) => {
    touchColor === item.undoColor ? setTouchColor(item.doneColor) : setTouchColor(item.undoColor);
  };

  useEffect(() => {
    getDayItems();
  },[selectedDay]);

  if(todayItems.length === 0) {
    return (
      <Container>
        <Empty/>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <FlatList
          renderItem={({item}) => (
            <ItemContainer onPress={() => {
              setColor(item);
            }} style={{backgroundColor: touchColor}}>
              <ItemText style={{fontSize: nomalize(15)}}>{item.title}</ItemText>
            </ItemContainer>
          )}
          ListEmptyComponent={<Empty/>}
          data={todayItems}
          keyExtractor={item => item.index}/>
      </Container>
    )
  };
};

export default ShowItems;