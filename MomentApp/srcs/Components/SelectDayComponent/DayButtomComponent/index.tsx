import React, {useState, useContext} from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TodoListContext } from '~/Context/DataContext';

const Container = Styled.View`
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;

const DayButton = Styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  opacity: 0.8;
  justify-content: center;
  align-items: center;
`;

const ButtonText = Styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

interface Props {
  items: {
    dayIndex: number,
    title: string,
  }
}

const DayButtonComponent = ({items}: Props) => {
  const {dayIndex, selectDayIndex} = useContext<ListContext>(TodoListContext);

  return (
    <Container 
      style={
        {width: Dimensions.get('window').width/8,
        height: Dimensions.get('window').width/8,
        backgroundColor: dayIndex === items.dayIndex ? '#A283F5' : "#9DA6FC"}
        }>
      <DayButton onPress={() => {
        selectDayIndex(items.dayIndex);
      }}>
        <ButtonText>{items.title}</ButtonText>
      </DayButton>
    </Container>
  );
};

export default DayButtonComponent;