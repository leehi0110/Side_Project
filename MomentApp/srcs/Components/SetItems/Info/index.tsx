import React, {useState,useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import { nomalize } from '~/Functions/index';

import ColorPicker from '~/Components/SetItems/Info/ColorPicker'
import DayPicker from '~/Components/SetItems/Info/DayPicker'
import TimePicker from '~/Components/SetItems/Info/TimePicker'
import { NewItemContext, TodoListContext } from '~/Context/Data/@types';

const Container = Styled.View`
  width: 80%;
  height: 300px;

  margin-bottom: 15px;

  background-color: white;
  border-radius: 20px;
  
  justify-content: space-around;
  align-items: center;
  align-self: center;

  box-shadow: 1px 5px 5px gray;
`;

const TitleInput = Styled.TextInput`
  width: 90%;
  height: 20%;

  margin-top: 10px;
  border-bottom-width: 0.5px;
  text-align: center;
  border-bottom-color: gray;

  font-size: 20px;
  font-weight: bold;
`;

const ButtonContainer = Styled.View`
  flex: 1;
  height: 20%;
  flex-direction: row;
  align-items: center;
`;

const AddButton = Styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

const DeleteButton = Styled.TouchableOpacity` 
  flex: 1;
  justify-content: center;
`;

const ButtonText = Styled.Text`
  font-weight: bold;
  text-align: center;
`;

interface Props {
  isAdd: boolean,
  data?: ITodoItemContext
}

const Info = ({isAdd, data}: Props) => {
  const {addItem} = useContext<ITodoListContext>(TodoListContext);
  const {setTitle, newItem} = useContext<INewItemContext>(NewItemContext);
  const [value, onChangeText] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [day, setDay] = useState<Array<boolean>>([]);
  const [part,setPart] = useState<string>('');
  const [hour,setHour] = useState<string>('');
  const [min, setMin] = useState<string>('');

  useEffect(() => {
    if(isAdd) {
      onChangeText('');
      setDay([false,false,false,false,false,false,false]);
      setPart('AM');
      setHour('');
      setMin('');
    }
    else {
      if(data !== undefined) {
        onChangeText(data.title);
        setColor(data.doneColor);
        setDay(data.day);
        setPart(data.timePart);
        setHour(data.hour);
        setMin(data.min);
      }
    }
  },[]);

  if(isAdd) {
    return (
      <Container>
        <TitleInput 
          value={value}
          placeholder={'할 일을 입력해주세요'}
          onChangeText={text => onChangeText(text)}
          onEndEditing={(event) => {
            setTitle(event.nativeEvent.text);
          }}/>
        <ColorPicker selectColor={undefined}/>
        <DayPicker selectDay={day}/>
        <TimePicker 
          selectPart={part}
          selectHour={hour}
          selectMin={min}/>
        <AddButton onPress={() => {
          addItem(newItem);
        }}>
          <ButtonText style={{fontSize: nomalize(15)}}>
            {'추가'}
          </ButtonText>
        </AddButton>
      </Container>
    )
  } // 새로운 할 일을 추가하는 부분
  else {
    return (
      <Container>
        <TitleInput 
          value={value}
          placeholder={'할 일을 입력해주세요'}
          onChangeText={text => onChangeText(text)}
          onEndEditing={(event) => {
            setTitle(event.nativeEvent.text)
          }}/>
        <ColorPicker selectColor={color}/>
        <DayPicker selectDay={day}/>
        <TimePicker 
          selectPart={part}
          selectHour={hour}
          selectMin={min}/>
        <ButtonContainer>
          <AddButton>
            <ButtonText style={{fontSize: nomalize(15)}}>{'수정'}</ButtonText>
          </AddButton>
          <DeleteButton>
            <ButtonText style={{fontSize: nomalize(15)}}>{'삭제'}</ButtonText>
          </DeleteButton>
        </ButtonContainer>
      </Container>
    );
  } // 할 일을 수정 및 삭제하는 부분
};

export default Info;