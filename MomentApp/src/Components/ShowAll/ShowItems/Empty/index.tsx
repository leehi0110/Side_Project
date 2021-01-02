import React from 'react';
import Styled from 'styled-components/native';

import {nomalize} from '~/Functions';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = Styled.Text`
  font-weight: bold;
  opacity: 0.4;
`;

const Empty = () => {
  return (
    <Container>
      <EmptyText style={{fontSize: nomalize(20)}}>{'오늘 할 일이 없습니다'}</EmptyText>
    </Container>
  );
};

export default Empty;
