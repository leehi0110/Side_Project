import React from 'react';
import Styled from 'styled-components/native';
import { FlatList } from 'react-native';

import * as func from '~/Functions/SetDefaultFunction';
import SelectDayComponent from '~/Components/SelectDayComponent';

const Container = Styled.View`
  flex: 1;
  width: 100%;
`;

const data = [
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

const SelectDayFlatComponent = () => {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={SelectDayComponent}
        keyExtractor={item=> item.id.toString()}
        horizontal={true}
        pagingEnabled={true}/>
    </Container>
  );
};

export default SelectDayFlatComponent;