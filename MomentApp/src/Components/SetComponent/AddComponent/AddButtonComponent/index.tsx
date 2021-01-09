import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/Data';

const Container = Styled.View`
  width : 100%;
  height: 80px;
  
  align-items: center;
  justify-content: center;
`;

const AddButton = Styled.TouchableOpacity`
  width: 80%;
  height: 80%;

  border-radius: 40px;
  border: 1px solid #C8DBE6;
  background-color: #fffff9;

  align-items: center;
  justify-content: center;
`;

const AddButtonText = Styled.Text`
  color: blue;
  font-weight: bold;
  font-size: 30px;
  opacity: 0.2;
`;

interface Props {
   parentCallBack: () => void,
   buttonTitle: string,
}

const AddButtonComponent = ({parentCallBack,buttonTitle}: Props) => {
  const {selectItemIndexSet} = useContext<ITodoList>(TodoListContext);

  return (
    <Container>
      <AddButton onPress={() => {
        parentCallBack();
        selectItemIndexSet(-1);
      }}>
        <AddButtonText>{buttonTitle}</AddButtonText>
      </AddButton>
    </Container>
  );
};

export default AddButtonComponent;