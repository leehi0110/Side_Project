import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import Styled from 'styled-components/native';

import SelectInfoComponent from '../SelectInfoComponent/index';

const TouchableContainer = Styled.TouchableWithoutFeedback`
  width: 100%;
  height: 100%;
`;

const Container = Styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InputContainer = Styled.TextInput`
  width: 80%;
  height: 50px;

  font-size: 15px;

  text-align: center;

  border-color: gray;
  border-top-width: 1px;
  border-width: 3px;
  border-radius: 20px;
  box-shadow: 1px 2px 2px gray;

  border-radius: 20px;
`;

const NameInputComponent = () => {
  const [value, setValue] = useState<string>('')
  const [size, setSize] = useState<Array<string>>(['0px','0px']);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
      <TouchableContainer onPress={()=> {
        Keyboard.dismiss();
      }}>
        <Container>
          <InputContainer
            onChangeText={text => setValue(text)}
            onFocus={() => {
              setSize(['20px', '20px']);
            }}
            value={value}
            placeholder={'할 일을 입력해주세요'}
            clearButtonMode={'always'}
            keyboardType={'default'}
            />
          <SelectInfoComponent/>
        </Container>
      </TouchableContainer>
    </KeyboardAvoidingView>
  );
};

export default NameInputComponent;

