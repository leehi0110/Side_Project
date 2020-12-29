import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/DataContext';

import ColorPickerComponent from './ColorPickerComponent/index';
import DayPickerComponent from './DayPickerComponent/index';
import TimePickerComponent from './TimePickerComponent/index';

const Container = Styled.View`
  height: 300px;
  width: 80%;
  
  align-items: center;
  
  border-color: #a38e8e;
  border-top-width: 1px;
  border-width: 3px;
  border-radius: 20px;

  box-shadow: 1px 2px 2px gray;
  margin-top: 10px;
`;

const AddButton = Styled.TouchableOpacity`
  
  width: 70%;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const TestText = Styled.Text`
  color: #510FFF;
  font-size: 20px;
  font-weight: bold;
`;

const SelectInfoComponent = () => {
  const {addTodo, index, upIndex} = useContext<ListContext>(TodoListContext);

  return (
    <Container>
      <ColorPickerComponent/>
      <DayPickerComponent/>
      <TimePickerComponent/>
      <AddButton>
        <TestText>{'추가하기'}</TestText>
      </AddButton>
    </Container>
  );
};

export default SelectInfoComponent;

