import React from 'react';
import Styled from 'styled-components/native';

import Title from '~/Components/Title';
import NowInfo from '~/Components/NowInfo';

import Test from '~/Components/Test';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const ContentContainer = Styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
`;

const AddTodo = () => {

  return (
    <Container>
        <Title/>
        <NowInfo/>
        <ContentContainer>
          <Test/>
        </ContentContainer>
    </Container>
  );
};

export default AddTodo;