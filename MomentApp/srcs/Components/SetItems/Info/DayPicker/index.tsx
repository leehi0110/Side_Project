import React, {useState,useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {nomalize} from '~/Functions';
import { NewItemContext } from '~/Context/Data/@types';

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

interface Props {
  selectDay: Array<boolean>;
};

const DayPicker = ({selectDay}: Props) => {
  const [selectedDay, setSelectedDay] = useState<Array<boolean>>([false,false,false,false,false,false,false]);
  const {setDay} = useContext<INewItemContext>(NewItemContext);

  useEffect(() => {
    setSelectedDay(selectDay);
  },[selectDay]);

  useEffect(() => {
  },[selectedDay])

  const select = (day: number):void => {
    let list = selectedDay;

    if(list[day]) list[day] = false;
    else list[day] = true;

    setSelectedDay(list);
    setDay(day);
  };

 return (
    <Container>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[0] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(0);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'S'}</PickerText>
      </Picker>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[1] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(1);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'M'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[2] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(2);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'T'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[3] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(3);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'W'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[4] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(4);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'T'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[5] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(5);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'F'}</PickerText>
        </Picker>
      <Picker style={{width: pickerSize, height: pickerSize, backgroundColor: (selectedDay[6] ? "black" : "#DBDBDB") }}
        onPress={() => {
          select(6);
        }}>
        <PickerText style={{fontSize: nomalize(15)}}>{'S'}</PickerText>
        </Picker>
    </Container>
  );
};

export default DayPicker;