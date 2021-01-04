import React from 'react';
import Styled from 'styled-components/native';
import { nomalize } from '~/Functions/index';

import ColorPicker from '~/Components/SetItems/ItemInfo/Info/ColorPicker'
import DayPicker from '~/Components/SetItems/ItemInfo/Info/DayPicker'
import TimePicker from '~/Components/SetItems/ItemInfo/Info/TimePicker'
import { FadeInFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

const Container = Styled.View`
  width: 80%;
  height: 250px;

  margin-bottom: 15px;

  background-color: white;
  border-radius: 20px;
  
  justify-content: space-around;
  align-items: center;

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

const AddButton = Styled.TouchableOpacity`
  /* width: 80%; */
  height: 20%;
  justify-content: center;
`;

const ButtonText = Styled.Text`
  font-weight: bold;
`;

interface Props {
  isAdd: boolean
}

const Info = ({isAdd}: Props) => {

  if(isAdd) {
    return (
      <Container>
        <TitleInput placeholder={'할 일을 입력해주세요'}/>
        <ColorPicker/>
        <DayPicker/>
        <TimePicker/>
        <AddButton>
          <ButtonText style={{fontSize: nomalize(15)}}>
            {'추가'}
          </ButtonText>
        </AddButton>
      </Container>
    )
  }
  else {
    return (
      <Container>
        <ColorPicker/>
        <DayPicker/>
        <TimePicker/>
        <AddButton>
          <ButtonText style={{fontSize: nomalize(15)}}>
            {'추가'}
          </ButtonText>
        </AddButton>
      </Container>
    );
  }
};

export default Info;