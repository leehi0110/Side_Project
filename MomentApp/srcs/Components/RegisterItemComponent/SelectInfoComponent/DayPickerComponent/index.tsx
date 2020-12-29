import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const DaySelectButton = Styled.TouchableOpacity`
  width: 12%;
  height: 50%;

  border-radius: 20px;
  background-color: white;

  align-items: center;
  justify-content: center;
`;

const ButtonText = Styled.Text`
  font-size: 15px;
  color: black;
`;

const DayPickerComponent = () => {
  return (
    <Container>
      <DaySelectButton>
        <ButtonText>{'S'}</ButtonText>
      </DaySelectButton>
      <DaySelectButton>
        <ButtonText>{'M'}</ButtonText>
      </DaySelectButton>
      <DaySelectButton>
        <ButtonText>{'T'}</ButtonText>
      </DaySelectButton>
      <DaySelectButton>
        <ButtonText>{'W'}</ButtonText>
      </DaySelectButton>
      <DaySelectButton>
        <ButtonText>{'T'}</ButtonText>
      </DaySelectButton>
      <DaySelectButton>
        <ButtonText>{'F'}</ButtonText>
      </DaySelectButton>
      <DaySelectButton>
        <ButtonText>{'S'}</ButtonText>
      </DaySelectButton>
    </Container>
  );
};

export default DayPickerComponent