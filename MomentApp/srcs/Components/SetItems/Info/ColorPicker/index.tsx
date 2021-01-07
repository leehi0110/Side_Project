import React, {useState, useEffect,useContext} from 'react';
import Styled from 'styled-components/native';
import { Dimensions, Keyboard } from 'react-native';
import { NewItemContext } from '~/Context/Data/@types';

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
  border: 5px solid white;
`;

interface Props {
  selectColor: string | undefined;
}

const ColorPicker = ({selectColor}:Props) => {
  const [newColor, setNewColor] = useState<string | undefined>(undefined);
  const {setDoneColor} = useContext<INewItemContext>(NewItemContext);

  useEffect(() => {
    setNewColor(selectColor)
  },[]);

  return (
    <Container>
      <Picker
        onPress={() => {
          setNewColor("#F72E73");
          setDoneColor("#F72E73");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor ===  "#F72E73" ? "gray" : "white"), 
                  backgroundColor: "#F72E73", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker 
        onPress={() => {
          setNewColor("#F59A0A");
          setDoneColor("#F59A0A");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor === "#F59A0A" ? "gray" : "white"), 
                  backgroundColor: "#F59A0A", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker
        onPress={() => {
          setNewColor("#F7FF73");
          setDoneColor("#F7FF73");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor === "#F7FF73" ? "gray" : "white"), 
                  backgroundColor: "#F7FF73", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker
        onPress={() => {
          setNewColor("#52DD16");
          setDoneColor("#52DD16");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor === "#52DD16" ? "gray" : "white"), 
                  backgroundColor: "#52DD16", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker
        onPress={() => {
          setNewColor("#2E5AEB");
          setDoneColor("#2E5AEB");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor === "#2E5AEB" ? "gray" : "white"), 
                  backgroundColor: "#2E5AEB", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker
        onPress={() => {
          setNewColor("#5423F5");
          setDoneColor("#5423F5");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor === "#5423F5" ? "gray" : "white"), 
                  backgroundColor: "#5423F5", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker
        onPress={() => {
          setNewColor("#EA4BF5");
          setDoneColor("#EA4BF5");
          Keyboard.dismiss();
        }} 
        style={{  borderColor: (newColor === "#EA4BF5" ? "gray" : "white"), 
                  backgroundColor: "#EA4BF5", 
                  width: pickerSize, 
                  height: pickerSize }}/>
      <Picker
        onPress={() => {
          setNewColor("#B0C0E8");
          setDoneColor("#B0C0E8");
          Keyboard.dismiss();
        }}
        style={{  borderColor: (newColor === "#B0C0E8" ? "gray" : "white"), 
                  backgroundColor: "#B0C0E8", 
                  width: pickerSize, 
                  height: pickerSize }}/>
    </Container>
  );
};

export default ColorPicker;