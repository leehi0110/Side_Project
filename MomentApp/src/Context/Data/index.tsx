import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoList>({
  index: 0,
  upIndex: ():void => {},
  
  items: [],
  addItem: ():void => {},
  upDateItem: ():void => {},
  deleteItem: ():void => {},

  doneItem: ():void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [items, setItems] = useState<Array<ITodoItem>>([]);

  const initIndex = async () => {
    const getIndex = await AsyncStorage.getItem('index');

    if(getIndex !== null) {
      setIndex(JSON.parse(getIndex));
    } else {
      setIndex(0);
    }
  }

  const initList = async () => {
    const todos = await AsyncStorage.getItem('Items');

    if(todos !== null) {
      setItems(JSON.parse(todos));
    }
    else {
      setItems([]);
    }
  }

  const upIndex = () => {
    setIndex(index+1);
    AsyncStorage.setItem('index',JSON.stringify(index));
  }

  const addItem = () => {

  }

  const upDateItem = () => {

  }

  const deleteItem = () => {

  }

  const doneItem = () => {
    
  }

  const testFunction = () => {
    console.log('testFunction');
  }
  
  useEffect(() => {
    initIndex();
    initList();
    testFunction();
  },[])

  return (
    <TodoListContext.Provider
      value={{
        index,
        upIndex,
        items,
        addItem,
        upDateItem,
        deleteItem,
        doneItem,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContext, TodoListContextProvider};
