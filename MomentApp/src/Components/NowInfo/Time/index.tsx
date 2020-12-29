import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import { getTime, nomalize } from '~/Functions';

const Container = Styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const TimeText = Styled.Text`
  font-weight: bold;
`;

const Time = () => {
  const [nowTime, setNowTime] = useState<string>(getTime());

  useEffect(() => {
    setInterval(() => {
      setNowTime(getTime());
    },1000);

    return () => {}
  });

  return (
    <Container>
      <TimeText style={{fontSize: nomalize(15)}}>
        {nowTime}
      </TimeText>
    </Container>
  );
};

export default Time;