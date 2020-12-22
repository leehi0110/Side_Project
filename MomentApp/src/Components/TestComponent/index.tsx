import React, {useState,useEffect, useContext} from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/DataContext';

const Container = Styled.View`
  flex: 7;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const SendButton = Styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;

const ButtonText = Styled.Text`
  font-size: 20px;
  color: red;
  font-weight: bold;
`;

const TestComponent = () => {
  const {addTodo, index, upIndex} = useContext<ListContext>(TodoListContext);

  return (
    <Container>
      <SendButton onPress={() => {addTodo
        (
          {
            index: index.toString(),
            title: '테스트 3',
            color: 'blue',
            APM: 'AM',
            hour: '2',
            min: '30',
          },
          [2],
       ),
       upIndex()
      }}>
        <ButtonText>{'추가하기'}</ButtonText>
      </SendButton>
    </Container>
  );
};

export default TestComponent;