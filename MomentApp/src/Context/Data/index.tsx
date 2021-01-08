import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoList>({
  index: 0,
  
  items: [],
  addItem: (item: ITodoItem):void => {},
  upDateItem: ():void => {},
  deleteItem: ():void => {},

  doneItem: (targetIndex: string):void => {},
  getItems: ():void => {},
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
    const todos = await AsyncStorage.getItem('items');

    if(todos !== null) {
      setItems(JSON.parse(todos));
    }
    else {
      setItems([]);
    }
  }

  const addItem = (item: ITodoItem) => {
    const oldList = items;

    const newList = [...oldList,item];
    const newIndex = index+1;

    setItems(newList);
    setIndex(newIndex);
    AsyncStorage.setItem('items',JSON.stringify(newList));
    AsyncStorage.setItem('index',JSON.stringify(newIndex));

  }

  const upDateItem = () => {

  }

  const deleteItem = () => {

  }

  const doneItem = (targetIndex: string) => {
    const list = items;

    list.forEach((item) => {
      if(item.itemIndex === targetIndex) item.itemStatus = !item.itemStatus;
    });

    setItems(list);
    AsyncStorage.setItem('items',JSON.stringify(list));
  }

  const testFunction = () => {
    console.log('testFunction');

    const tempItem: ITodoItem = {
      itemIndex: index.toString(),
      itemTitle: '고양이 산책',
      itemColor: '#F59A0A',
      itemStatus: false,
    };
    addItem(tempItem);
  }

  const getItems = () => {
    const list = items;

    list.forEach((logItem) => {
      console.log(logItem);
    });
  }
  
  useEffect(() => {
    initIndex();
    initList();
    // AsyncStorage.clear();
    // testFunction();
  },[])

  useEffect(() => {
    getItems();
  },[items])

  useEffect(() => {
  },[items]);

  return (
    <TodoListContext.Provider
      value={{
        index,
        items,
        addItem,
        upDateItem,
        deleteItem,
        doneItem,
        getItems,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContext, TodoListContextProvider};
