import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/DataContext';

const Container = Styled.View`
  height: 200px;
  width: 80%;
  
  
  border-color: gray;
  border-top-width: 1px;
  border-width: 3px;
  border-radius: 20px;

  box-shadow: 1px 2px 2px gray;
  margin-top: 10px;
`;

const AddButton = Styled.TouchableOpacity`
  width: 80%;
  height: 40px;

  justify-content: center;
  align-items: center;

  background-color: gray;
`;

const TestText = Styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const SelectInfoComponent = () => {
  const {addTodo, index, upIndex} = useContext<ListContext>(TodoListContext);

  return (
    <Container>
      <AddButton onPress={() => {addTodo
        (
          {
            index: index.toString(),
            title: '테스트 3',
            color: '#fdff',
            APM: 'AM',
            hour: '2',
            min: '30',
          },
          [3],
       ),
       upIndex()
      }}>
        <TestText>{'전송하기'}</TestText>
      </AddButton>
    </Container>
  );
};

export default SelectInfoComponent;

