import React from 'react';
import Styled from 'styled-components/native';
import {FlatList} from 'react-native';

import HeaderComponent from '~/Components/HeaderComponent/';
import SelectDayComponent from '~/Components/SelectDayComponent';

const Container = Styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const FlatContainer = Styled.View`
  flex: 1;
  width: 100%;
`;

const ContentContainer = Styled.View`
  flex: 7;
  width: 100%;
  background-color: gray;
`;



const dayCategory = [
  {
    id: 0,
    day: 'S',
    color: '#9F7DB1'
  },
  {
    id: 1,
    day: 'M',
    color: '#9F7DB1'
  },
  {
    id: 2,
    day: 'T',
    color: '#9F7DB1'
  },
  {
    id: 3,
    day: 'W',
    color: '#9F7DB1'
  },
  {
    id: 4,
    day: 'T',
    color: '#9F7DB1'
  },
  {
    id: 5,
    day: 'F',
    color: '#9F7DB1'
  },
  {
    id: 6,
    day: 'S',
    color: '#9F7DB1'
  }
];

const TodoListScreen = () => {
  return (
    <Container>
      <HeaderComponent/>
      <FlatContainer>
      <FlatContainer>
        <FlatList
          data={dayCategory}
          renderItem={SelectDayComponent}
          keyExtractor={item=> item.id.toString()}
          horizontal={true}
          pagingEnabled={true}/>
      </FlatContainer>
      </FlatContainer>
      <ContentContainer></ContentContainer>
    </Container>
  );
};

export default TodoListScreen;