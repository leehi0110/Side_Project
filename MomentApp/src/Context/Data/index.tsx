import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as func from '~/Functions';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoListContext>({
  itemIndex: 0,
  items: [],

  getItemIndex: (): number => {return 0},
  getDayItems: (targetDay: number): ITodoItemContext[]=> {return []},
  getItem: (targetIndex: string): ITodoItemContext => {return func.setDefaultItem()},

  addItem: (input: ITodoItemContext): void => {},
  updateItem: (targetIndex: string, targetItem: ITodoItemContext): void => {},
  deleteItem: (targetIndex: string): void => {},

  undoItem: (): void => {},
  doItem: (): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [items, setItems] = useState<Array<ITodoItemContext>>([]);

  const initList = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');

      if(list === null) setItems([]);
      else setItems(JSON.parse(list));

      console.log('List get success');
    }
    catch(e) {
      console.log('List get fail => ');
      console.log(e);
    }
  }; // 내 할일 목록이 있는지 불러오는 함수

  const initIndex = async () => {
    try {
      const index = await AsyncStorage.getItem('index');

      if(index === null) setItemIndex(0);
      else setItemIndex(JSON.parse(index));

      console.log('Index get success');
    }
    catch(e) {
      console.log('Index get fail => ');
      console.log(e);
    }
  }; // 사용한 인덱스를 불러오는 함수

  const getItemIndex = (): number => {
    return itemIndex;
  } // 현재 사용 가능한 index를 불러오는 함수

  const getDayItems = (targetDay: number): ITodoItemContext[] => {

    const dayItems = func.providerGetDayItem(targetDay, items);

    console.log('Get Day items success');
    console.log(dayItems);

    return dayItems;

  } // 해당 요일의 할 일 목록을 가져오는 함수

  const getItem = (targetIndex: string): ITodoItemContext => {  
    const item = func.provideGetItem(targetIndex, items);

    console.log('Get item success')
    console.log(item);

    return item;
  } // 특정 index를 가진 할 일을 가져오는 함수

  const addItem = (input: ITodoItemContext) => {

    console.log('Add item function start');
    console.log('Param => ' + input);

    input.index = getItemIndex().toString();
    setItemIndex(itemIndex+1);
    // 현재 사용가능 한 index를 넣어준 뒤 +1

    console.log('Index add');
    console.log('Chage input => ' + input);

    const list = [...items,input];
    setItems(list);
    // items에 새로운 item을 넣은 뒤 변경

    AsyncStorage.setItem('todoList',JSON.stringify(list));
    // AsyncStorage 업데이트
    console.log('AsyncStorage Update success');
  } // 새로운 할 일을 할 일 리스트에 넣는 함수

  const updateItem = (targetIndex: string, targetItem: ITodoItemContext) => {
    var list = items;

    for(var item of list) {
      if(item.index === targetIndex) {
        item = targetItem;
        break;
      }
    } // 반복문을 통해 변화할 아이템을 찾고 파라미터로 들어온 아이템으로 변경
    
    setItems(list);
    AsyncStorage.setItem('todoList',JSON.stringify(list));

    console.log('Item update success');
  } // item 정보를 변경하고 리스트에 반영하는 함수

  const deleteItem = (targetIndex: string) => {
  }

  const undoItem = () => {
  }

  const doItem = () => {
  }

  useEffect(() => {
    initList(); // 할일 목록을 AsyncStorage에서 가져오는 함수
    initIndex(); // 사용한 인덱스 번호를 AsyncStorage에서 가져오는 함수
  });

  return (
    <TodoListContext.Provider
      value={{
        itemIndex,
        items,
        getItemIndex,
        getDayItems,
        getItem,
        addItem,
        updateItem,
        deleteItem,
        undoItem,
        doItem
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContext, TodoListContextProvider}
