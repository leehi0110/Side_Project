import React from 'react';
import Styled from 'styled-components/native';

import Calendar from '~/Components/NowInfo/Calendar';
import Time from '~/Components/NowInfo/Time';

const Container = Styled.View`
  flex: 1;
  flex-direction:row;
`;

const NowInfo = () => {
  return (
    <Container>
      <Calendar/>
      <Time/>
    </Container>
  );
};

export default NowInfo;