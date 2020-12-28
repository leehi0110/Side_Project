import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 80%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = Styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

const EmptyComponent = () => {
  return (
    <EmptyComponent/>
  );
};

export default EmptyComponent;