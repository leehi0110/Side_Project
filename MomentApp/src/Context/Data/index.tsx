import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoList>({
  index: 0,

  selectItemIndex: -2,
  selectItemIndexSet: (index: number):void => {},
  
  items: [],
  addItem: (item: ITodoItem):void => {},
  upDateItem: (item: ITodoItem):void => {},
  deleteItem: (targetIndex: string):void => {},

  doneItem: (targetIndex: string):void => {},
  getItems: ():void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [selectItemIndex, setSelectItemIndex] = useState<number>(-2);
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

  const selectItemIndexSet = (index: number) => {
    return setSelectItemIndex(index);
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

  const upDateItem = (item: ITodoItem) => {
    let list = items;

    for(let i=0;i<list.length;i++) {
      if(list[i].itemIndex === item.itemIndex) {
        list[i] = item;
        break;
      }
    }

    setItems(list);
    AsyncStorage.setItem('items',JSON.stringify(list));
  }

  const deleteItem = (targetIndex: string) => {
    let list = items;

    for(let i=0;i<list.length;i++) {
      if(list[i].itemIndex === targetIndex) {
        list.splice(i,1);
        break;
      }
    }

    setItems(list);
    AsyncStorage.setItem('items',JSON.stringify(list));
  }

  const doneItem = (targetIndex: string) => {
    const list = items;

    list.forEach((item) => {
      if(item.itemIndex === targetIndex) item.itemStatus = !item.itemStatus;
    });

    setItems(list);
    AsyncStorage.setItem('items',JSON.stringify(list));
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
        selectItemIndex,
        selectItemIndexSet,
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
