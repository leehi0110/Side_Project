import React from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {nomalize} from '~/Functions';

const Container = Styled.View`
  height: 20%;
  width: 90%;

  flex-direction: row;

  justify-content: space-around;
  align-items: center;
`;

const pickerSize = Dimensions.get('window').width/12;

const Picker = Styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #DBDBDB;
  
  justify-content: center;
  align-items: center;
`;

const PickerText = Styled.Text`
  color: white;
`;

const DayPicker = () => {
  return (
    <Container>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'S'}</PickerText>
      </Picker>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'M'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'T'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'W'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'T'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'F'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'S'}</PickerText>
        </Picker>
    </Container>
  );
};

export default DayPicker;