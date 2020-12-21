import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import moment from 'moment';

const Container = Styled.View``;

const TimeText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const TimeComponent = () => {
  const [nowTime, setNowTime] = useState<string>(moment().format('kk:mm'));
  const [showTime, setShowTime] = useState<string>('');

  useEffect(() => {
    setInterval(()=> {
      setNowTime(moment().format('kk:mm'));
      if(Number(nowTime[0]+nowTime[1]) > 12) {
        setShowTime('PM '+String(Number(nowTime[0]+nowTime[1])-12)+':'+ nowTime[3]+nowTime[4]);
      }
    },1000);
  },[]);

  return (
    <Container>
      <TimeText>{showTime}</TimeText>
    </Container>
  )
}

export default TimeComponent;