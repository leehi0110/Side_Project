import React, {useContext, useState} from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/Data';

import { setDefaultItem } from '../../Functions/index';


const Button = Styled.TouchableOpacity`
  width: 50%;
  height: 10%;
  border: 1px solid black;
`;

const Test = () => {
  const {addItem, getItem} = useContext<ITodoListContext>(TodoListContext);
  const [testData, setTestData] = useState<ITodoItemContext>(setDefaultItem());
  return (
    <>
    <Button
      onPress={() => {

        setTestData({
          index: '',
          day: [true,false,false,false,false,false,false],
          title: 'test1',
          undoColor: 'white',
          doneColor: 'red',
          timePart: 'AM',
          hour: '08',
          min: '11',
        });

        addItem(testData);
      }}/>
    <Button
      onPress={() => {
        getItem('0');
      }}/>
    </>
  );
};

export default Test;