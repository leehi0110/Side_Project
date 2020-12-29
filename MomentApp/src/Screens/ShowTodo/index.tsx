import React from 'react';
import Styled from 'styled-components/native';

import Title from '~/Components/Title';
import NowInfo from '~/Components/NowInfo';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const ContentContainer = Styled.View`
  flex: 8;
  background-color: yellow;
`;

const ShowTodo = () => {
  return (
    <Container>
      <Title/>
      <NowInfo/>
      <ContentContainer/>
    </Container>
  );
};

export default ShowTodo;