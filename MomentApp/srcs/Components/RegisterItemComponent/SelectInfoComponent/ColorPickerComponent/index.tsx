import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = Styled.TouchableOpacity`
  width: 10%;
  height: 40%;
  border-radius: 30px;
  border: 2px solid;
`;

const ColorArr = [
  {
    back: "#F72E73",
  },
  {
    back: "#F59A0A",
  },
  {
    back: "#F7FF73",
  },
  {
    back: "#52DD16",
  },
  {
    back: "#2E5AEB",
  },
  {
    back: "#5423F5",
  },
  {
    back: "#EA4BF5",
  },
  {
    back: "#B0C0E8",
  }
]

const ColorSelectButton  = ({index}: Props) => {

  return (
    <Button 
        style={{backgroundColor: ColorArr[index].back, 
                borderColor: 'black'}}
        onPress={() => {

                 }}
    >
    </Button>
  )
}

interface Props {
  index: number;
}

const ColorPickerComponent = () => {
  return (
    <Container>
      <ColorSelectButton index={0}/>
      <ColorSelectButton index={1}/>
      <ColorSelectButton index={2}/>
      <ColorSelectButton index={3}/>
      <ColorSelectButton index={4}/>
      <ColorSelectButton index={5}/>
      <ColorSelectButton index={6}/>
      <ColorSelectButton index={7}/>
    </Container>
  );
};

export default ColorPickerComponent;