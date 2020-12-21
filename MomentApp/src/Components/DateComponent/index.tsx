import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';

import moment from 'moment';

const Container = Styled.View``;

const DateText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const DateComponent = () => {
  const [today, setToday] = useState<string>('');

  useEffect(() => {
    const todayDate: string = moment().format('YYYY. MM. DD ');
    const todayDay: number = moment().day();
    const koreanDay: Array<string> = ['일','월', '화', '수', '목', '금','토'];

    setToday(todayDate+"("+koreanDay[todayDay]+")");

  },[])

  return (
    <Container>
      <DateText>{today}</DateText>
    </Container>
  );
};

export default DateComponent;