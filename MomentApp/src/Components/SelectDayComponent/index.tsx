import React from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const Container = Styled.View`
  align-items: center;
  justify-content: center;
`;

const DayButtonContainer = Styled.TouchableOpacity`
  width: 75%;
  height: 60%;
  border: none;
  border-radius: 50px;

  justify-content: center;
  align-items: center;
`;

const DayTitle = Styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

interface Props {
  item: {
    id: number,
    day: string,
    color: string,
  }
};

const SelectDayComponent = ({item}: Props) => {
  return (
    <Container style={{width: Dimensions.get('window').width/7}}>
      <DayButtonContainer style={{backgroundColor: item.color}}>
        <DayTitle>{item.day}</DayTitle>
      </DayButtonContainer>
    </Container>
  );
};

export default SelectDayComponent;