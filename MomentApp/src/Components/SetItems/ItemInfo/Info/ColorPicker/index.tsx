import React from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const Container = Styled.View`
  height: 20%;
  width: 90%;
  
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
`;

const pickerSize = Dimensions.get('window').width/14;

const Picker = Styled.TouchableOpacity`
  border-radius: 20px;
`;

const ColorPicker = () => {
  return (
    <Container>
      <Picker style={{backgroundColor: "#F72E73", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#F59A0A", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#F7FF73", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#52DD16", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#2E5AEB", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#5423F5", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#EA4BF5", width: pickerSize, height: pickerSize}}/>
      <Picker style={{backgroundColor: "#B0C0E8", width: pickerSize, height: pickerSize}}/>
    </Container>
  );
};

export default ColorPicker;