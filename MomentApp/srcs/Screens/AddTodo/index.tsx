import React from 'react';
import Styled from 'styled-components/native';

import Title from '~/Components/Title';
import NowInfo from '~/Components/NowInfo';
import SetItems from '~/Components/SetItems';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const AddTodo = () => {

  return (
    <Container>
        <Title/>
        <NowInfo/>
        <SetItems/>
    </Container>
  );
};

export default AddTodo;