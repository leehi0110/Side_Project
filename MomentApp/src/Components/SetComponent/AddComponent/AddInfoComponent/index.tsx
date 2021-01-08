import React, {useState,useContext} from 'react';
import { resolveHookState } from 'react-use/lib/util/resolveHookState';
import Styled from 'styled-components/native';

import ColorComponent from '~/Components/SetComponent/AddComponent/AddInfoComponent/ColorComponent';
import { TodoListContext } from '~/Context/Data';

const Container = Styled.View`
  width: 100%;

  align-items: center;

  margin-top: 5px;
  margin-bottom: 5px;
`;

const SubContainer = Styled.View`
  width: 80%;

  border-radius: 30px;
  border: 1px solid #C8DBE6;
`;

const InfoContainer = Styled.View`
  width: 100%;

  margin-top: 10px;
  margin-bottom: 10px;

  align-items: center;
`;

const ItemTitleInput = Styled.TextInput`
  width: 80%;
  height: 60px;
  
  margin-bottom: 5px;

  border-bottom-width: 0.5px;
  border-bottom-color: gray;

  text-align: center;
  font-size: 20px;
`;

const ButtonContainer = Styled.View`
  width: 100%;

  margin-bottom: 10px;
  margin-top: 10px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = Styled.TouchableOpacity`
  width: 30%;

  border-radius: 20px;
  background-color: #fffff9;

  align-items: center;
`;

const ButtonText = Styled.Text`
  color: blue;
  opacity: 0.2;
  font-size: 25px;
  font-weight: bold;
`;

interface Props {
  parentCallBack: () => void,
}

const AddInfoComponent = ({parentCallBack}: Props) => {
  const [value, onChangeText] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const {addItem, index} = useContext<ITodoList>(TodoListContext);

  const handleColor = (selectColor: string) => {
    return setColor(selectColor);
  };

  return (
    <Container>
      <SubContainer>
        <InfoContainer>
          <ItemTitleInput
            autoFocus={false}
            placeholder={"할 일을 입력해주세요"}
            onChangeText={text => onChangeText(text)}
            value={value}/>
          <ColorComponent colorCallBack={handleColor}/>
        </InfoContainer>
        <ButtonContainer>
          <Button 
            onPress={parentCallBack}>
            <ButtonText>{'Back'}</ButtonText>
          </Button>
          <Button onPress={() => {
            const newItem: ITodoItem = {
              itemIndex: index.toString(),
              itemTitle: value,
              itemColor: color,
              itemStatus: false,
            };

            addItem(newItem);
            parentCallBack();
          }}>
            <ButtonText>{'ADD'}</ButtonText>
          </Button>
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
};

export default AddInfoComponent;