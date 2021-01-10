import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native'
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/Data';
import ColorComponent from '~/Components/SetComponent/AddComponent/AddInfoComponent/ColorComponent';


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
  itemInfo: ITodoItem,
  parentCallBack: () => void,
}

const UpdateInfoComponent = ({itemInfo, parentCallBack}: Props) => {
  const [value, onChangeText] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const {deleteItem, upDateItem} = useContext<ITodoList>(TodoListContext);

  const handleColor = (selectColor: string) => {
    return setColor(selectColor);
  }

  useEffect(() => {
    return setColor(itemInfo.itemColor);
  },[])

  const alertToCheckDelete = () => {
    Alert.alert(
      "할 일을 삭제하시겠습니까?",
      "정말?",
      [
        {
          text:  "Cancel",
          onPress: () => {
            parentCallBack();
          },
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            deleteItem(itemInfo.itemIndex);
            parentCallBack();
          },
        },
      ],
      {cancelable: false}
    );
  };

  const alertToCheckUpdate = () => {
    Alert.alert(
      "할 일을 수정하시겠습니까?",
      "정말?",
      [
        {
          text: "Cancel",
          onPress: () => {
            parentCallBack();
          },
          style: "cancel",
        },
        {
          text: "Update",
          onPress: () => {
            upDateItem({
              itemIndex: itemInfo.itemIndex,
              itemTitle: value,
              itemColor: color,
              itemStatus: itemInfo.itemStatus,
              itemContinuity: itemInfo.itemContinuity,
            }),
            parentCallBack();
          }
        }
      ]
    )
  }

  useEffect(() => {
    onChangeText(itemInfo.itemTitle);
  },[])

  return (
    <Container>
      <SubContainer>
        <InfoContainer>
          <ItemTitleInput
            value={value}
            placeholder={"할 일을 입력해주세요"}
            onChangeText={text => onChangeText(text)}/>
          <ColorComponent 
            selectedColor={itemInfo.itemColor}
            colorCallBack={handleColor}/>
        </InfoContainer>
        <ButtonContainer>
          <Button onPress={() => {
            alertToCheckDelete();
          }}>
            <ButtonText>{'Delete'}</ButtonText>
          </Button>
          <Button onPress={() => {
            alertToCheckUpdate();
          }}>
            <ButtonText>{'Update'}</ButtonText>
          </Button>
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
};

export default UpdateInfoComponent;