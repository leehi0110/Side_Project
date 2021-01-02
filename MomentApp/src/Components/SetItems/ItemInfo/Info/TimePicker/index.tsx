import React, {useState} from 'react';
import Styled from 'styled-components/native';
import {nomalize} from '~/Functions';
import { Keyboard } from 'react-native';

const Container = Styled.View`
  width: 90%;
  height: 20%;

  flex-direction: row;

  justify-content: space-around;
  align-items: center;
`;

const TimePart = Styled.TouchableOpacity`
  width: 30%;
  height: 80%;
  
  background-color: #DBDBDB;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;

const PartText = Styled.Text`
  font-weight: bold;
  color: white;
`;

const TimeContainer = Styled.View`
  width: 50%;
  height: 100%;
  
  flex-direction: row;
  justify-content: space-around;
`;

const HourInput = Styled.TextInput`
  width: 45%;
  border-radius: 20px;
  background-color: #DBDBDB;
  text-align: center;
`;

const MinInput = Styled.TextInput`
  width: 45%;
  border-radius: 20px;
  background-color: #DBDBDB;
  text-align: center;
`;

const TimePicker = () => {
  const [part, setPart] = useState<string>('AM');

  return (
    <Container>
      <TimePart onPress={() => {
        part === 'AM' ? setPart('PM') : setPart('AM');
      }}>
        <PartText style={{fontSize: nomalize(15)}}>{part}</PartText>
      </TimePart>
      <TimeContainer>
        <HourInput placeholder='00' onSubmitEditing={Keyboard.dismiss}/>
        <MinInput placeholder='00' onSubmitEditing={Keyboard.dismiss}/>
      </TimeContainer>
    </Container>
  );
};

export default TimePicker;