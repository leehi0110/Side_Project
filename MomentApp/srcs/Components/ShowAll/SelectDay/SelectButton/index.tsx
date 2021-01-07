import React, {useContext} from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data/@types';

const ButtonContainer = Styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  background-color: #BAC1FF;
  height: 55%;
`;

const ButtonText = Styled.Text`
  font-weight: bold;
  color: white;
`;

interface Props {
  buttonInfo: {
    title: string,
    dayIndex: number,
  }
}

const SelectButton = ({buttonInfo}: Props) => {
  const {selectedDay, selectDay} = useContext<ITodoListContext>(TodoListContext);

  return (
    <ButtonContainer 
      style={{width: Dimensions.get('window').width/9,
              backgroundColor: buttonInfo.dayIndex === selectedDay ? '#8D6BE2' : '#BAC1FF'}}
      onPress={() => {
        selectDay(buttonInfo.dayIndex);
      }}>
      <ButtonText>{buttonInfo.title}</ButtonText>
    </ButtonContainer>
  );
};

export default SelectButton;