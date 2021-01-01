import React from 'react';
import Styled from 'styled-components/native';

import Title from '~/Components/Title';
import NowInfo from '~/Components/NowInfo';
import ShowAll from '~/Components/ShowAll';


const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const ShowTodo = () => {
  return (
    <Container>
      <Title/>
      <NowInfo/>
      <ShowAll/>
    </Container>
  );
};

export default ShowTodo;