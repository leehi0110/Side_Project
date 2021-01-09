import React, {useState,useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/Data';

import AddButtonComponent from '~/Components/SetComponent/AddComponent/AddButtonComponent';
import AddInfoComponent from '~/Components/SetComponent/AddComponent/AddInfoComponent';

const Container = Styled.View`
  width: 100%;
`;

const AddComponent = () => {
  const [isClick,setIsClick] = useState<boolean>(false);
  const {selectItemIndex, selectItemIndexSet} = useContext<ITodoList>(TodoListContext);
  
  const handleCallBack = () => {
    setIsClick(!isClick);
    selectItemIndexSet(-2);
  }

  useEffect(() => {
  },[isClick]);

  if(!isClick || selectItemIndex !== -1) {
    return (
      <Container>
        <AddButtonComponent 
          parentCallBack={handleCallBack}
          buttonTitle={"+"}/>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <AddInfoComponent
          parentCallBack={handleCallBack}/>
      </Container>
    );
  };
};

export default AddComponent;
