import React from 'react';
import Styled from 'styled-components/native';

import SelectButton from '~/Components/ShowAll/SelectDay/SelectButton';

const Container = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SelectDay = () => {
  return (
    <Container>
      <SelectButton buttonInfo={{
        title: 'S',
        dayIndex: 0,
      }}/>
      <SelectButton buttonInfo={{
        title: 'M',
        dayIndex: 1,
      }}/>
      <SelectButton buttonInfo={{
        title: 'T',
        dayIndex: 2,
      }}/>
      <SelectButton buttonInfo={{
        title: 'W',
        dayIndex: 3,
      }}/>
      <SelectButton buttonInfo={{
        title: 'T',
        dayIndex: 4,
      }}/>
      <SelectButton buttonInfo={{
        title: 'F',
        dayIndex: 5,
      }}/>
      <SelectButton buttonInfo={{
        title: 'S',
        dayIndex: 6,
      }}/>
    </Container>
  );
};

export default SelectDay;