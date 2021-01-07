import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as func from '~/Functions';
import moment from 'moment';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const NewItemContext = createContext<INewItemContext>({
  newItem: func.setDefaultItem(),
  initNewItem: (): void => {},
  setDay: (selectDay: number): void => {},
  setTitle: (title: string): void => {},
  setDoneColor: (color: string): void => {},
  setTimePart: (part: string): void => {},
  setHour: (hour: string): void => {},
  setMin: (min: string): void => {},
});

const NewItemContextProvider = ({children}: Props) => {
  const [newItem, setNewItem] = useState<ITodoItemContext>(func.setDefaultItem());
  
  const initNewItem = (): void => {
    setNewItem(func.setDefaultItem());
  } // newItem 정보를 초기화

  const setDay = (selectDay: number):void => {
    let list = newItem;

    if(list.day[selectDay]) list.day[selectDay] = false;
    else list.day[selectDay] = true;
    
    setNewItem(list);
  } // 할 일의 요일을 지정하는 함수

  const setTitle = (title: string): void => {
    let list = newItem;

    list.title = title;

    setNewItem(list);
  } // 할 일의 이름을 지정하는 함수

  const setDoneColor = (color: string): void => {
    let list = newItem;

    list.doneColor = color;

    setNewItem(list);
  } // 할 일의 색을 지정하는 함수

  const setTimePart = (part: string): void => {
    let list = newItem;

    list.timePart = part;

    setNewItem(list);
  } // 할 일의 오전 / 오후를 구분하는 함수

  const setHour = (hour: string): void => {
    let list = newItem;

    list.hour = hour;

    setNewItem(list);
  } // 할 일의 시간을 지정하는 함수

  const setMin = (min: string): void => {
    let list = newItem;

    list.min = min;

    setNewItem(list);
  } // 할 일의 분을 지정하는 함수

  useEffect(() => {
    initNewItem();
  },[]);

  return (
    <NewItemContext.Provider
      value={{
        newItem,
        initNewItem,
        setDay,
        setTitle,
        setDoneColor,
        setTimePart,
        setHour,
        setMin,
      }}>
      {children}
    </NewItemContext.Provider>
  );
};


const TodoListContext = createContext<ITodoListContext>({
  itemIndex: 0,
  
  selectIndex: -1,
  setSelectIndex: (targetIndex: number): void => {},
  
  items: [],
  
  selectedDay: 0,
  selectDay: (input: number): void => {},

  getItemIndex: (): number => {return 0},
  getDayItems: (targetDay: number): ITodoItemContext[]=> {return []},
  getItem: (targetIndex: string): ITodoItemContext | undefined => {return func.setDefaultItem()},

  addItem: (input: ITodoItemContext): void => {},
  updateItem: (targetIndex: string, targetItem: ITodoItemContext): void => {},
  deleteItem: (targetIndex: string): void => {},

  undoItem: (): void => {},
  doItem: (): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [selectIndex, setSelectIndex] = useState<number>(-1);
  const [items, setItems] = useState<Array<ITodoItemContext>>([]);
  const [selectedDay, setSelectedDay] = useState<number>(moment().day());

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

  const SetSelectIndex = (targetIndex: number) => {
    setSelectIndex(targetIndex);
  } // 현재 선택된 할 일의 고유 인덱스

  const selectDay = (input: number) => {
    setSelectedDay(input);

    console.log('selectDay change success');
  }

  const getItemIndex = (): number => {
    return itemIndex;
  } // 현재 사용 가능한 index를 불러오는 함수

  const getDayItems = (targetDay: number): ITodoItemContext[] => {

    const dayItems = func.providerGetDayItem(targetDay, items);

    console.log('Get Day items success');
    console.log(dayItems);

    return dayItems;

  } // 해당 요일의 할 일 목록을 가져오는 함수

  const getItem = (targetIndex: string): ITodoItemContext | undefined => {  

    console.log(items);

    const item = func.providerGetItem(targetIndex, items);

    console.log('Get item success')
    console.log(item);

    return item;
  } // 특정 index를 가진 할 일을 가져오는 함수

  const addItem = (input: ITodoItemContext) => {

    let newItem = input;

    console.log('Add item function start');

    newItem.index = getItemIndex().toString();
    console.log(newItem);
    setItemIndex(itemIndex+1);

    AsyncStorage.setItem('index',JSON.stringify(itemIndex));
    // 현재 사용가능 한 index를 넣어준 뒤 +1
    console.log('Index add');

    const list = func.provideSortByTime(items,newItem);
    // 새로운 아이템을 리스트에 넣기 전 시간순으로 정렬해 넣는다

    console.log(list);
    setItems(list);
    // items에 새로운 item을 넣은 뒤 변경

    AsyncStorage.setItem('todoList',JSON.stringify(list));
    // AsyncStorage 업데이트
    console.log('AsyncStorage Update success');
  } // 새로운 할 일을 할 일 리스트에 넣는 함수

  const updateItem = (targetIndex: string, targetItem: ITodoItemContext) => {
    let list = items;

    for(let item of list) {
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
    let list = items;

    for(let i=0;i<list.length;i++) {
      if(list[i].index === targetIndex) {
        list.splice(i,1); // targetIndex 아이템 삭제
        break;
      }
    }

    setItems(list);
    AsyncStorage.setItem('todoList',JSON.stringify(list));

    console.log('Item delete success');
  } // 특정 할 일을 리슽에서 삭제하는 함수

  const undoItem = () => {
  }

  const doItem = () => {
  }

  useEffect(() => {
    initList(); // 할일 목록을 AsyncStorage에서 가져오는 함수
    initIndex(); // 사용한 인덱스 번호를 AsyncStorage에서 가져오는 함수
  },[]);

  return (
    <TodoListContext.Provider
      value={{
        itemIndex,
        selectIndex,
        setSelectIndex,
        items,
        selectedDay,
        selectDay,
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

export {TodoListContext, NewItemContext, TodoListContextProvider, NewItemContextProvider}

