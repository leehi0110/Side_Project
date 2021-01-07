import React,{useState,useEffect} from 'react';
import Styled from 'styled-components/native';

import moment from 'moment';

const Container = Styled.View``;

const DateText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const DateComponent = () => {
  const [nowDate, setNowDate] = useState<string>('');

  const getDate = () => {
    const nowDate: string = moment().format('YYYY. MM. DD ');
    setNowDate(nowDate);
  }

  useEffect(() => {
    getDate();
  },[]);

  return (
    <Container>
      <DateText>{nowDate}</DateText>
    </Container>
  );
};

export default DateComponent;