import React,{useState,useEffect} from 'react';
import Styled from 'styled-components/native';

import moment from 'moment';

const Container = Styled.View`
`;

const DayText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: peru;
`;

const DayComponent = () => {
  const [nowDay, setNowDay] = useState<string>('');

  const getDay = () => {
    const dayList = ['Sun' ,'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = moment().day();
    
    setNowDay(dayList[dayIndex]);
  }

  useEffect(() => {
    getDay();
  },[]);

  return (
    <Container>
      <DayText>{nowDay}</DayText>
    </Container>
  );
};

export default DayComponent;