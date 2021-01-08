import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';

import AddButtonComponent from '~/Components/SetComponent/AddComponent/AddButtonComponent';
import AddInfoComponent from '~/Components/SetComponent/AddComponent/AddInfoComponent';

const Container = Styled.View`
  width: 100%;
`;

const AddComponent = () => {
  const [isClick,setIsClick] = useState<boolean>(false);
  
  const handleCallBack = () => {
    setIsClick(!isClick);
  }

  useEffect(() => {
  },[isClick]);

  if(!isClick) {
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
