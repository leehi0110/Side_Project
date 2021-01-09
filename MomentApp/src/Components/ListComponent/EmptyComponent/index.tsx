import React from 'react';
import Styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = Styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

const SubContainer = Styled.View`
  width: 80%;

  align-items: center;
  justify-content: space-around;
`;

const EmptyText = Styled.Text`

  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  opacity: 0.2;
`;

const AddButton = Styled.TouchableOpacity`
`;

const EmptyComponent = ({}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <SubContainer>
        <EmptyText style={{fontSize: 30}}>{"할 일을 추가해주세요"}</EmptyText>
        <AddButton onPress={()=> {
          navigation.navigate("AddTodo");
        }}>
          <EmptyText style={{fontSize: 20}}>{"Click To Add Todo"}</EmptyText>
        </AddButton>
      </SubContainer>
    </Container>
  );
};

export default EmptyComponent;