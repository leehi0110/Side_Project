import React,{useState,useEffect} from 'react';
import Styled from 'styled-components/native';

import moment from 'moment';

const Container = Styled.View`
`;

const TimeText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const TimeComponent = () => {
  const [nowTime, setNowTime] = useState<string>(moment().format('LT'));

  const getTime = () => {
    setNowTime(moment().format('LT'));
  }

  useEffect(() => {

    const timer = setInterval(getTime,1000);

    return () => {
      clearInterval(timer)
    }
  },[])

  return (
    <Container>
      <TimeText>{nowTime}</TimeText>
    </Container>
  );
};

export default TimeComponent;