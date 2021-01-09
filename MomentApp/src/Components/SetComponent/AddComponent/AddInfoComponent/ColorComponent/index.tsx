import React, {useState,useEffect} from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 80%;

  margin-top: 10px;

  flex-direction: row;
  justify-content: space-around;
`;

const ColorPicker = Styled.TouchableOpacity`
  border-radius: 20px;
  border-width: 3px;
`;

const pickerSize = Dimensions.get('window').width/14;

interface Props {
  colorCallBack: (selectColor: string) => void,
  selectedColor? : string,
};

const ColorComponent = ({colorCallBack,selectedColor}: Props) => {
  const [borderColor, setBorderColor] = useState<string>('white');

  useEffect(() => {
    if(selectedColor != undefined) setBorderColor(selectedColor);
    else setBorderColor('white');
  },[])

  return (
    <Container>
      <ColorPicker
        onPress={() => {
          colorCallBack("#52DD16");
          setBorderColor("#52DD16");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#52DD16',
                borderColor: borderColor === "#52DD16" ? "black" : '#D6E1E1'}}/>
      <ColorPicker
        onPress={() => {
          colorCallBack("#8832FC");
          setBorderColor("#8832FC");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#8832FC',
                borderColor: borderColor === "#8832FC" ? "black" : '#D6E1E1'}}/>
      <ColorPicker
        onPress={() => {
          colorCallBack("#2E5AEB");
          setBorderColor("#2E5AEB");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#2E5AEB',
                borderColor: borderColor === '#2E5AEB' ? "black" : '#D6E1E1'}}/>
      <ColorPicker
        onPress={() => {
          colorCallBack("#F59A0A");
          setBorderColor("#F59A0A");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#F59A0A',
                borderColor: borderColor === "#F59A0A" ? "black" : '#D6E1E1'}}/>
      <ColorPicker
        onPress={() => {
          colorCallBack("#FF2D85");
          setBorderColor("#FF2D85");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#FF2D85',
                borderColor: borderColor === "#FF2D85" ? "black" : '#D6E1E1'}}/>
      <ColorPicker
        onPress={() => {
          colorCallBack("#FFFB1F");
          setBorderColor("#FFFB1F");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#FFFB1F',
                borderColor: borderColor === "#FFFB1F" ? "black" : '#D6E1E1'}}/>
      <ColorPicker
        onPress={() => {
          colorCallBack("#63FFEB");
          setBorderColor("#63FFEB");
        }}
        style={{width: pickerSize, 
                height: pickerSize,
                backgroundColor: '#63FFEB',
                borderColor: borderColor === "#63FFEB" ? "black" : '#D6E1E1'}}/>
    </Container>
  );
};

export default ColorComponent;