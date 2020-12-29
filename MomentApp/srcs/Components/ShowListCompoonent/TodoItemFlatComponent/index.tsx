import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 80%;
  height: 50px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  align-self: center;

  box-shadow: 3px 10px 3px gray;
`;

const TodoButton = Styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TodoTitle = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

interface Props {
  item: {
    title: string,
    color: string, // rgba로 받아야 투명도 가능
    APM: string,
    hour: string,
    min: string,
  }
}

const TodoItemFlatComponent = ({item}: Props) => {

  return (
    <Container style={{backgroundColor: item.color}}>
      <TodoButton onPress={()=> {
      }}>
        <TodoTitle>{item.title}</TodoTitle>
      </TodoButton>
    </Container>
  );
};

export default TodoItemFlatComponent;